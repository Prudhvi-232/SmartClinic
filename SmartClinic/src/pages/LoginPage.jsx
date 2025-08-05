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
				sessionStorage.setItem("jwt", data.token);
				sessionStorage.setItem(
					"encryptedData",
					data.data.encryptedData
				);
				sessionStorage.setItem("email", data.email);
				sessionStorage.setItem("name", data.name);

				toast.success("Login successful!");

				setTimeout(() => {
					if (
						email.toLowerCase() === "kbr1@gmail.com" ||
						email.toLowerCase() === "lk5@gmail.com"
					) {
						navigate("/admin-dashboard");
					} else {
						navigate("/");
					}
				}, 1000);
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
		
		<section className="flex justify-between items-center w-[100%] h-[80vh] ">
			<div>
				<img
					src="assets/undraw_medicine_b-1-ol.svg"
					className="h-[400px]"
					alt=""
				/>
			</div>

			<div className="w-[475px] shadow-lg px-[35px] ml-[15vw] py-[20px] rounded-lg">
				<h1 className="text-[40px] font-bold mb-[30px]">
					Welcome Back
				</h1>
		
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-[400px] h-[50px] rounded-xl my-[10px] border p-[10px]"
				/>

				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-[400px] h-[50px] rounded-xl my-[10px] border p-[10px]"
				/>

				<button
					className="w-[400px] h-[50px] bg-[#18A0A9] text-white font-medium rounded-xl my-[10px]"
					onClick={handleLogIn}
				>
					Login
				</button>

				<div className="mt-[10px]">
					Not registered yet?{" "}
					<Link
						to="/signup"
						className="text-blue-500 hover:underline"
					>
						Create account
					</Link>
				</div>

				<Link
					to="/forgetPassword"
					className="text-blue-500 hover:underline"
				>
					Forget Password?
				</Link>
			</div>

			<ToastContainer />
		</section>
	);
};

export default LoginPage;
