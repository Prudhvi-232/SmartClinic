import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
	const API_BASE = import.meta.env.VITE_API_URL;
	
	const encryptedData = sessionStorage.getItem("encryptedData");
	const navigate = useNavigate();
	
	const toHome = () => {
		toast.success("Welcome back!!");
		navigate("/");
	};
	const toLogin = () => {
		toast.success("Password changed, Login again");
		navigate("/login");
	};
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handlePasswordConfirmChange = (e) => {
		setPasswordConfirm(e.target.value);
	};
	const handleChangePassword = async (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			toast.error("Passwords do not match!");
			// return;
		}
		// This is to prevent unnecessary API calls
		try {
			// PATCH method is standard HTTP method for making partial updates to a resource. we r only updating the user's password, not the entire user object.
	
			const response = await fetch(`${API_BASE}/${encryptedData}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					password: password,
					passwordConfirm: passwordConfirm,
				}),
			});

			if (response.ok) {
				toLogin();
				toast.success(
					"password successfully changed!!\n login to continue!!"
				);
				sessionStorage.clear("encryptedData");
				sessionStorage.clear("jwt");
			}
			if (!response.ok) {
				console.log("The status code :", response.status);
				console.log("password changing failed");
				if (response.status === 401) {
					console.log("passwords doesn't match");
				}
				const errorData = await response.json();
				throw new Error(errorData.error);
			}
		} catch (err) {
			console.error(`Error changing the password`, err.message);
		}

		setPassword("");
		setPasswordConfirm("");
	};
	
	return (
		<section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
			<div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
				<img
					src="assets/authentication-two-color-b35f8.svg"
					className="h-80 lg:h-[400px] object-contain"
					alt="Authentication Photo"
				/>
			</div>

			<div className="w-full max-w-md shadow-lg px-8 py-6 rounded-lg bg-white">
				<h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
					Change Password
				</h1>

				<input
					type="password"
					placeholder="New Password"
					value={password}
					onChange={handlePasswordChange}
					className="w-full h-12 rounded-lg mb-4 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#18A0A9]"
				/>

				<input
					type="password"
					placeholder="Confirm New Password"
					value={passwordConfirm}
					onChange={handlePasswordConfirmChange}
					className="w-full h-12 rounded-lg mb-4 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-[#18A0A9]"
				/>

				<button
					onClick={handleChangePassword}
					className="w-full h-12 bg-[#18A0A9] text-white font-medium rounded-lg hover:bg-[#139098]"
				>
					Change Password
				</button>

				<div className="mt-4 text-center">
					<p className="text-sm text-gray-600">
						Don't want to change the password?{' '}
						<a onClick={toHome} className="text-[#3b82f6] cursor-pointer">
							Go to Home
						</a>
					</p>
				</div>
			</div>
			<ToastContainer position="top-right" autoClose={2000} />
		</section>
	);
};

export default ChangePassword;
