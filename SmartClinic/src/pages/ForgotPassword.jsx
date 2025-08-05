import { useState } from "react";
import TypeWriter from "../components/TypeWriter";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const navigate = useNavigate();
	const navigateToChangePassword = () => {
		navigate("/changePass");
	};
	const [userEmail, setUserEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [userOtp, setUserOtp] = useState("");
	const [otpVisibility, setOtpVisibility] = useState("hidden");
	const [emailVisibility, setEmailVisibility] = useState("block my-[20px]");
	const handleUserEmailChange = (e) => {
		setUserEmail(e.target.value);
	};
	const handleUserOtpChange = (e) => {
		setUserOtp(e.target.value);
	};
	const handleGetOtp = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${API_BASE}/forgotPassword`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: userEmail,
				}),
			});
			const data = await response.json();
			if (data.status === "success") {
				toast.success("OTP sent successfully!!");
				setOtpVisibility("block my-[20px]");
				setEmailVisibility("hidden");
				setOtp(data.data.otp);
				setUserEmail("");
				sessionStorage.setItem(
					"encryptedData",
					data.data.user_id.encryptedData
				);
			}
			if (!response.ok) {
				console.log("The status code :", response.status);

				const errorData = await response.json();
				throw new Error(errorData.error);
			}
		} catch (err) {
			console.error(`Error signing in the user`, err.message);
		}
	};
	const handleVerifyOtp = () => {
		if (otp == userOtp) {
			setOtpVisibility("hidden");
			setOtp("");
			setEmailVisibility("block my-[20px]");
			navigateToChangePassword();
		} else {
			toast.error("Otps didnt match,Try again!!");
		}
	};
	return (
		<section className="flex items-center justify-center pt-[13vh]  ">
			<div className="mx-auto shadow-2xl px-8 py-12 rounded-2xl w-full max-w-lg bg-white">
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-extrabold text-[#18A0A9] mb-2">Forgot Password?</h1>
					<p className="text-xl font-semibold text-gray-700 mb-1">
						<TypeWriter array={["Reset", "Reclaim", "Relog"]} />
					</p>
					<p className="text-base text-gray-500">
						Your Journey Back In with our Forgot Password Assistance!
					</p>
				</div>

				<div className={emailVisibility}>
					<label className="block text-left text-gray-700 font-medium mb-2" htmlFor="email">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						placeholder="Enter your email"
						className="w-full mb-4 h-12 rounded-lg border border-[#18A0A9] px-4 focus:outline-none focus:ring-2 focus:ring-[#18A0A9] transition"
						value={userEmail}
						onChange={handleUserEmailChange}
						autoComplete="email"
					/>
					<button
						className="w-full h-12 bg-[#18A0A9] hover:bg-[#139098] text-white font-bold rounded-lg transition mb-2"
						type="submit"
						onClick={handleGetOtp}
					>
						Get OTP
					</button>
				</div>

				<div className={otpVisibility}>
					<label className="block text-left text-gray-700 font-medium mb-2" htmlFor="otp">
						Enter OTP
					</label>
					<input
						id="otp"
						type="text"
						placeholder="Enter OTP"
						className="w-full mb-4 h-12 rounded-lg border border-[#18A0A9] px-4 focus:outline-none focus:ring-2 focus:ring-[#18A0A9] transition"
						onChange={handleUserOtpChange}
						value={userOtp}
						autoComplete="one-time-code"
					/>
					<button
						className="w-full h-12 bg-[#18A0A9] hover:bg-[#139098] text-white font-bold rounded-lg transition"
						type="submit"
						onClick={handleVerifyOtp}
					>
						Verify OTP
					</button>
				</div>
				<ToastContainer position="top-center" />
			</div>
		</section>
	);
};

export default ForgotPassword;
