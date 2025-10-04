const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

// GET /nearby-hospitals?lat=..&lng=..
exports.getNearbyHospitals = async (req, res) => {
	const { lat, lng } = req.query;
	if (!lat || !lng) {
		return res
			.status(400)
			.json({ status: "fail", message: "lat & lng required" });
	}
	const apiKey = process.env.GOOGLE_MAPS_API_KEY;
	if (!apiKey)
		return res
			.status(500)
			.json({
				status: "error",
				message: "Missing GOOGLE_MAPS_API_KEY in server env",
			});
	try {
		// Nearby Search for hospitals within 5km
		const radius = 5000;
		const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=hospital&key=${apiKey}`;
		const nearbyResp = await fetch(nearbyUrl);
		const nearbyData = await nearbyResp.json();

		if (
			nearbyData.status !== "OK" &&
			nearbyData.status !== "ZERO_RESULTS"
		) {
			return res
				.status(502)
				.json({
					status: "error",
					message: "Google Places API error",
					googleStatus: nearbyData.status,
					details: nearbyData.error_message,
				});
		}

		// Map minimal fields
		const hospitals = (nearbyData.results || []).map((p) => ({
			placeId: p.place_id,
			name: p.name,
			rating: p.rating || null,
			vicinity: p.vicinity,
			address: p.formatted_address || p.vicinity,
			location: p.geometry?.location,
			openNow: p.opening_hours?.open_now,
			icon: p.icon,
			photoRef: p.photos?.[0]?.photo_reference || null,
		}));

		// Optionally fetch photos & details in parallel (limit to first 8 to reduce quota)
		const detailPromises = hospitals.slice(0, 8).map(async (h) => {
			const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${h.placeId}&fields=formatted_phone_number,website,photos&key=${apiKey}`;
			const dResp = await fetch(detailUrl);
			const dData = await dResp.json();
			if (dData.status === "OK") {
				h.phone = dData.result.formatted_phone_number || null;
				h.website = dData.result.website || null;
				const photoRef = dData.result.photos?.[0]?.photo_reference;
				if (photoRef) {
					h.photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${apiKey}`;
				}
			}
			return h;
		});

		await Promise.all(detailPromises);

		res.json({ status: "success", count: hospitals.length, hospitals });
	} catch (err) {
		console.error("Nearby hospital error:", err);
		res.status(500).json({
			status: "error",
			message: "Server error fetching hospitals",
		});
	}
};
