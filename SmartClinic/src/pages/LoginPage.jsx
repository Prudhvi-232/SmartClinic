import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogIn = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${API_BASE}/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok && data.status === "success") {
				// Persist core session data
				sessionStorage.setItem("jwt", data.token);
				sessionStorage.setItem(
					"encryptedData",
					data.data.encryptedData
				);
				sessionStorage.setItem("email", data.email || email);
				sessionStorage.setItem("name", data.name || "");

				// Determine admin based on email (simple whitelist logic)
				const adminWhitelist = [
					"prudhvitaduvai@gmail.com",
					"siddharth2304p@gmail.com",
				];
				const isAdmin = adminWhitelist.includes(email.toLowerCase());

				// Store role + legacy flag the navbar can read everywhere
				if (isAdmin) {
					sessionStorage.setItem("role", "admin");
					sessionStorage.setItem("admin_users", "true");
				} else {
					sessionStorage.setItem("role", "user");
					sessionStorage.removeItem("admin_users");
				}

				toast.success("Login successful!");

				setTimeout(() => {
					if (isAdmin) {
						navigate("/admin-dashboard");
					} else {
						navigate("/");
					}
				}, 400);
			} else {
				toast.error(data.message || "Login failed");
			}
		} catch (err) {
			console.error(`Error logging in:`, err.message);
			toast.error("An error occurred while logging in.");
		}

		// Clear input fields
		setEmail("");
		setPassword("");
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center p-4 pt-8 md:pt-12">
			<div className="container mx-auto">
				<section className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16">
					<div className="hidden md:block md:w-1/2 lg:w-2/5">
						<img
							src="assets/undraw_medicine_b-1-ol.svg"
							className="w-full h-auto"
							alt="Welcome Illustration"
						/>
					</div>

					<div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
						<h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
							Welcome Back
						</h1>

						<form onSubmit={handleLogIn} className="space-y-4">
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full h-12 rounded-xl border-2 border-gray-200 p-3 transition-colors focus:border-[#18A0A9] focus:outline-none"
								autoComplete="email"
								required
							/>

							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full h-12 rounded-xl border-2 border-gray-200 p-3 transition-colors focus:border-[#18A0A9] focus:outline-none"
								autoComplete="current-password"
								required
							/>

							<button
								type="submit"
								className="w-full h-12 bg-[#18A0A9] text-white font-semibold rounded-xl my-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#18A0A9]/30"
							>
								Login
							</button>
						</form>

						<div className="text-center mt-4 text-gray-600">
							Not registered yet?{" "}
							<Link
								to="/signup"
								className="text-[#00A0AA] hover:underline font-medium"
							>
								Create account
							</Link>
						</div>

						<div className="text-center mt-2">
							<Link
								to="/forgetPassword"
								className="text-sm text-gray-500 hover:underline"
							>
								Forgot Password?
							</Link>
						</div>
					</div>
				</section>
			</div>
			<ToastContainer />
		</div>
	);
};

export default LoginPage;
