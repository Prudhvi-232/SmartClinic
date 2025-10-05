import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminUser = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const [users, setUsers] = useState([]);

	const fetchUsers = useCallback(async () => {
		try {
			const res = await axios.get(`${API_BASE}/allusers`);
			setUsers(res.data.data.users);
		} catch (err) {
			console.error("Failed to fetch users:", err);
		}
	}, [API_BASE]);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return (
		<motion.div
			className="p-10 min-h-screen bg-gradient-to-br from-white via-[#E6FBFC] to-white"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className="flex flex-wrap justify-between items-center mb-8 gap-4">
				<motion.h1
					className="text-3xl md:text-4xl font-bold text-[#008893]"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Registered Users
				</motion.h1>
				<button
					onClick={() => {
						window.location.href = "/admin-audio";
					}}
					className="inline-flex items-center gap-2 bg-[#00A0AA] hover:bg-[#008893] text-white font-medium py-2.5 px-5 rounded-lg shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A0AA] focus-visible:ring-offset-2 transition"
				>
					<i className="ri-mic-line text-lg" aria-hidden="true" />
					View Audios
				</button>
			</div>

			<div className="overflow-x-auto rounded-xl border border-[#00A0AA]/25 bg-white/70 backdrop-blur-sm shadow">
				<table className="min-w-full text-sm md:text-base">
					<thead className="bg-[#00A0AA] text-white text-center">
						<tr className="uppercase tracking-wide text-xs md:text-sm">
							<th className="py-4 px-6">No of Patients</th>
							<th className="py-4 px-6">Name</th>
							<th className="py-4 px-6">Email</th>
						</tr>
					</thead>
					<tbody className="text-center">
						{users.length === 0 ? (
							<tr>
								<td
									colSpan="3"
									className="text-center py-8 text-gray-500"
								>
									No users found
								</td>
							</tr>
						) : (
							users.map((user, index) => (
								<motion.tr
									key={user._id}
									className="border-b border-[#00A0AA]/15 last:border-none hover:bg-[#00A0AA]/10"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.3,
										delay: index * 0.05,
									}}
								>
									<td className="py-4 px-6 font-medium text-gray-700">
										{index + 1}
									</td>
									<td className="py-4 px-6 text-gray-800">
										{user.name}
									</td>
									<td className="py-4 px-6 text-gray-600">
										{user.email}
									</td>
								</motion.tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default AdminUser;
