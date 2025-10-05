import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-white via-[#E6FBFC] to-white flex items-center justify-center px-4 pt-16 text-gray-800">
			<div className="w-full max-w-3xl rounded-2xl border border-teal-100 bg-white/70 backdrop-blur-sm shadow-lg px-8 py-14 md:py-16 relative overflow-hidden">
				{/* Decorative accent circles */}
				<div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#00A0AA]/15 opacity-60 blur-2xl" />
				<div className="pointer-events-none absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#00A0AA]/20 opacity-40 blur-3xl" />

				<motion.div
					className="flex flex-col items-center text-center space-y-6 relative"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<div className="flex items-center gap-3 text-[#00A0AA]">
						<i
							className="ri-shield-star-line text-5xl"
							aria-hidden="true"
						></i>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							Admin{" "}
							<span className="text-[#008893]">Dashboard</span>
						</h1>
					</div>

					<p className="text-base md:text-lg text-gray-600 max-w-2xl">
						Manage platform users, review submissions, and oversee
						system health from one place.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
						<motion.button
							onClick={() => navigate("/admin-users")}
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00A0AA] px-6 py-3 font-medium text-white shadow-md hover:bg-[#008893] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A0AA] focus-visible:ring-offset-2 transition"
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.96 }}
						>
							<i
								className="ri-user-settings-line text-xl"
								aria-hidden="true"
							></i>
							Manage Users
							<i
								className="ri-arrow-right-line text-lg"
								aria-hidden="true"
							></i>
						</motion.button>

						<motion.button
							onClick={() => navigate("/admin-audio")}
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-[#00727A] border border-[#00A0AA]/40 shadow-sm hover:bg-[#E6FBFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A0AA] focus-visible:ring-offset-2 transition"
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.96 }}
						>
							<i
								className="ri-mic-line text-xl"
								aria-hidden="true"
							></i>
							Audio Records
						</motion.button>
					</div>

					<div className="pt-6 text-xs md:text-sm text-gray-500">
						<span className="inline-flex items-center gap-1">
							<i className="ri-shield-check-line text-[#00A0AA]"></i>
							You are logged in with{" "}
							<strong className="font-semibold text-[#00A0AA]">
								administrator
							</strong>{" "}
							privileges.
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Admin;
