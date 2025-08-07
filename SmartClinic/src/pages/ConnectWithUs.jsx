import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ConnectWithUs = (props) => {
	const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

	const navigate = useNavigate();

	const navigateTo = (address) => {
		navigate(address);
	};

	const encryptedData = sessionStorage.getItem("encryptedData");
	const jwt = sessionStorage.getItem("jwt");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleSendMessage = async (e) => {
		if (!jwt) {
			toast.error("Please login to send us a message!!");
			navigateTo("/login");
		} else {
			e.preventDefault();
			try {
				const response = await fetch(
					`${API_BASE}/sendMessage/${encryptedData}`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: name,
							message: message,
						}),
					}
				);

				if (response.ok) {
					toast.success("Thanks for your message!!");
					console.log("Message sent successfully!");
					setName("");
					setMessage("");
				}
				if (!response.ok) {
					console.log("The status code :", response.status);
					console.log("message sending failed");
					if (response.status === 401) {
						console.log("passwords doesn't match");
					}
					const errorData = await response.json();
					throw new Error(errorData.error);
				}
			} catch (err) {
				console.error(`Error sending the message`, err.message);
			}
		}
	};
	return (
		<section
			className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
			id="ConnectWithUs"
			ref={props.ConnectWithUsSection}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Content Section */}
					<div className="space-y-8 text-center lg:text-left">
						<div>
							<div className="inline-block px-4 py-2 bg-[#00A0AA]/10 rounded-full mb-6">
								<span className="text-[#00A0AA] font-semibold text-sm uppercase tracking-wide">
									Connect With Us
								</span>
							</div>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
								Take a Step Towards{" "}
								<span className="text-[#00A0AA]">Prevention</span>
							</h2>
							<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
								Have questions or need assistance? Our team is here to help. 
								Reach out to us, and we'll get back to you as soon as possible.
							</p>
						</div>
						<div className="flex justify-center lg:justify-start">
							<img 
								src="/assets/undraw_faq_re_31cw.svg" 
								alt="Connect with us illustration"
								className="w-full max-w-md h-auto object-contain"
							/>
						</div>
					</div>

					{/* Form Section */}
					<div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
						<form onSubmit={handleSendMessage} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									placeholder="Your Name"
									value={name}
									ref={props.MessageNameSection}
									onChange={handleNameChange}
									className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A0AA] transition-all duration-300"
									required
								/>
							</div>
							
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									placeholder="Your Message"
									value={message}
									onChange={handleMessageChange}
									rows="5"
									className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A0AA] transition-all duration-300"
									required
								></textarea>
							</div>

							<div>
								<button
									type="submit"
									className="w-full group bg-[#00A0AA] hover:bg-[#008A94] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#00A0AA]/30"
								>
									<span className="flex items-center justify-center gap-2">
										Submit Now
										<svg 
											className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
											fill="none" 
											stroke="currentColor" 
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default ConnectWithUs;
