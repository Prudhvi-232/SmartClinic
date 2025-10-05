import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminAudio = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const [audios, setAudios] = useState([]);

	useEffect(() => {
		const fetchAudios = async () => {
			try {
				console.log("Fetching audios...");
				console.log("line 12...");
				const res = await axios.get(`${API_BASE}/audios`);
				console.log("Fetched audios line 4:", res.data);
				if (Array.isArray(res.data)) {
					setAudios(res.data);
				} else {
					setAudios([]);
				}
			} catch (error) {
				console.error("Error fetching audios line 21:", error);
				setAudios([]);
			}
		};

		fetchAudios();

		const channel = new BroadcastChannel("audioUploadChannel");
		channel.onmessage = (event) => {
			if (event.data === "new-audio-uploaded") {
				console.log("🔄 Refreshing audios on admin side...");
				fetchAudios();
			}
		};

		return () => channel.close();
	}, [API_BASE]);

	return (
		<motion.div
			className="p-10 min-h-screen bg-gradient-to-br from-white via-[#E6FBFC] to-white"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="flex flex-wrap gap-4 justify-between items-center mb-8">
				<motion.h1
					className="text-3xl md:text-4xl font-bold text-[#008893] flex items-center gap-3"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<i
						className="ri-mic-line text-4xl text-[#00A0AA]"
						aria-hidden="true"
					/>
					Audio Records
				</motion.h1>
				<button
					onClick={() => {
						window.location.href = "/admin-audio-filter";
					}}
					className="inline-flex items-center gap-2 bg-[#00A0AA] hover:bg-[#008893] text-white font-medium py-2.5 px-5 rounded-lg shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A0AA] focus-visible:ring-offset-2 transition"
				>
					<i
						className="ri-filter-3-line text-lg"
						aria-hidden="true"
					/>
					Prior Patients
				</button>
			</div>

			<div className="overflow-x-auto rounded-xl border border-[#00A0AA]/25 bg-white/70 backdrop-blur-sm shadow">
				<table className="min-w-full text-sm md:text-base">
					<thead className="bg-[#00A0AA] text-white text-center">
						<tr className="uppercase tracking-wide text-xs md:text-sm">
							<th className="py-4 px-6">Patient Name</th>
							<th className="py-4 px-6">Email</th>
							<th className="py-4 px-6">Play</th>
						</tr>
					</thead>
					<tbody>
						{audios.length === 0 ? (
							<motion.tr
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								<td
									colSpan={3}
									className="text-center py-8 text-gray-500"
								>
									No audio files found.
								</td>
							</motion.tr>
						) : (
							audios.map((audio, index) => {
								const audioUrl = `${API_BASE}/audio/${audio.id}`;
								return (
									<motion.tr
										key={audio.id}
										className="text-center border-b border-[#00A0AA]/15 last:border-none"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.3,
											delay: index * 0.04,
										}}
										whileHover={{
											scale: 1.015,
											backgroundColor:
												"rgba(0,160,170,0.08)", // brand #00A0AA with opacity
										}}
									>
										<td className="py-4 px-6 font-medium text-gray-700">
											{audio.name}
										</td>
										<td className="py-4 px-6 text-gray-600">
											{audio.email}
										</td>
										<td className="py-4 px-6">
											<audio
												controls
												src={audioUrl}
												className="w-full max-w-xs"
											/>
										</td>
									</motion.tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default AdminAudio;
