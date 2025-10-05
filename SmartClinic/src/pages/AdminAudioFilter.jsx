import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminAudioFilter = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const [audios, setAudios] = useState([]);

	useEffect(() => {
		const fetchAudios = async () => {
			try {
				const res = await axios.get(`${API_BASE}/audios`);
				if (Array.isArray(res.data)) {
					const audiosWithPriority = res.data.map((audio) => {
						let priority = 0;
						const nameLower = (audio.name || "").toLowerCase();
						if (nameLower.includes("prudhvi")) {
							priority = 4;
						} else if (nameLower.includes("siddharth")) {
							priority = 3;
						} else if (nameLower.includes("nidhish")) {
							priority = 2;
						} else {
							priority = 1;
						}
						return { ...audio, priority };
					});
					audiosWithPriority.sort((a, b) => b.priority - a.priority);
					setAudios(audiosWithPriority);
				} else {
					setAudios([]);
				}
			} catch (error) {
				console.error("Error fetching audios:", error);
				setAudios([]);
			}
		};
		fetchAudios();
	}, [API_BASE]);

	return (
		<motion.div
			className="p-10 min-h-screen bg-gradient-to-br from-white via-[#E6FBFC] to-white"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="flex flex-wrap items-center mb-8">
				<motion.h1
					className="text-3xl md:text-4xl font-bold text-[#008893]"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Prioritized Patient Audios
				</motion.h1>
			</div>

			<div className="overflow-x-auto rounded-xl border border-[#00A0AA]/25 bg-white/70 backdrop-blur-sm shadow">
				<table className="min-w-full text-sm md:text-base">
					<thead className="bg-[#00A0AA] text-white text-center">
						<tr className="uppercase tracking-wide text-xs md:text-sm">
							<th className="py-4 px-6">Audio Name</th>
							<th className="py-4 px-6">Email</th>
							<th className="py-4 px-6">Play</th>
						</tr>
					</thead>
					<tbody>
						{audios.length === 0 ? (
							<tr>
								<td
									colSpan={3}
									className="text-center py-8 text-gray-500"
								>
									No audio files found.
								</td>
							</tr>
						) : (
							audios.map((audio, index) => {
								const audioUrl = `${API_BASE}/audio/${audio.id}`;
								return (
									<motion.tr
										key={audio.id}
										className="text-center border-b border-[#00A0AA]/15 last:border-none"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.3,
											delay: index * 0.05,
										}}
										whileHover={{
											scale: 1.015,
											backgroundColor:
												"rgba(0,160,170,0.08)",
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

export default AdminAudioFilter;
