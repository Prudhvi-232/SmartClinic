import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${API_BASE}/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
					passwordConfirm,
				}),
			});

			const data = await response.json();

			if (response.ok && data.status === "success") {
				sessionStorage.setItem("jwt", data.token);
				sessionStorage.setItem(
					"encryptedData",
					data.data.encryptedData
				);
				sessionStorage.setItem("email", data.email);
				sessionStorage.setItem("name", data.name);

				toast.success("Signup successful!");
				setTimeout(() => navigate("/"), 1000);
			} else {
				toast.error(data.message || "Signup failed");
			}
		} catch (err) {
			console.error(`Error signing up:`, err.message);
			toast.error("An error occurred while signing up.");
		}
		setName("");
		setEmail("");
		setPassword("");
		setPasswordConfirm("");
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-8 md:pt-12">
			<div className="container mx-auto">
				<section className="flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16">
					<div className="hidden md:block md:w-1/2 lg:w-2/5">
						<img
							src="assets/health-flatline-3a65b.svg"
							className="w-full h-auto"
							alt="Signup Illustration"
						/>
					</div>

					<div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
						<h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
							Join SmartClinic
						</h1>

						<form onSubmit={handleSignUp} className="space-y-4">
							<input
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full h-12 rounded-xl border-2 border-gray-200 p-3 transition-colors focus:border-[#18A0A9] focus:outline-none"
								autoComplete="name"
								required
							/>

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
								autoComplete="new-password"
								required
							/>

							<input
								type="password"
								placeholder="Confirm Password"
								value={passwordConfirm}
								onChange={(e) =>
									setPasswordConfirm(e.target.value)
								}
								className="w-full h-12 rounded-xl border-2 border-gray-200 p-3 transition-colors focus:border-[#18A0A9] focus:outline-none"
								autoComplete="new-password"
								required
							/>

							<button
								type="submit"
								className="w-full h-12 bg-[#18A0A9] text-white font-semibold rounded-xl my-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#18A0A9]/30"
							>
								Sign Up
							</button>
						</form>

						<div className="text-center mt-4 text-gray-600">
							Already have an account?{" "}
							<Link
								to="/login"
								className="text-[#00A0AA] hover:underline font-medium"
							>
								Login
							</Link>
						</div>
					</div>
				</section>
			</div>
			<ToastContainer />
		</div>
	);
};

export default SignUpPage;
