import { useState } from "react";
import WhyChooseUsPoint from "../components/WhyChooseUsPoint";
import TypeWriter from "../components/TypeWriter";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = (props) => {
	const navigate = useNavigate();

	const navigateToHospitals = () => {
		navigate("/hospitals");
	};
	
	const [points, setPoints] = useState([
		{
			point: "Safety First Quality Must",
		},
		{
			point: "Patient-Centric Approach",
		},
		{
			point: "Focused Leadership",
		},
		{
			point: "Cutting-Edge Technology",
		},
		{
			point: "Transparent Pricing",
		},
		{
			point: "Coordinated Care",
		},
	]);
	
	const [array, setArray] = useState([
		"Wellness",
		"Compassion",
		"Quality",
		"Strength",
		"Fitness",
		"Resilience",
		"Energy",
	]);

	return (
		<section
			className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
			id="WhyChooseUs"
			ref={props.WhyChooseUsSection}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Section - Image & Typewriter */}
					<div className="space-y-12">
						<div className="flex justify-center lg:justify-start">
							<div className="relative">
								<div className="bg-gradient-to-br from-[#FFC567] to-[#FFB84D] w-80 sm:w-96 h-32 rounded-3xl shadow-lg"></div>
								{/* <img
									src="assets/image 36.svg"
									alt="Healthcare professional"
									className="absolute top-0 left-8 sm:left-12 w-72 sm:w-80 h-auto object-contain transform -translate-y-16"
								/> */}
							</div>
						</div>
						<div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 pt-8">
							<div className="mb-8">
								<h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
									<TypeWriter array={array} />
								</h3>
								<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
									We are committed to providing exceptional healthcare services with compassion, 
									innovation, and excellence.
								</p>
							</div>
							
							<div className="flex justify-center lg:justify-start">
								<button
									className="bg-[#00A0AA] hover:bg-[#008A94] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#00A0AA]/30"
									onClick={navigateToHospitals}
								>
									<span className="flex items-center gap-2">
										Take An Appointment
										<svg 
											className="w-5 h-5" 
											fill="none" 
											stroke="currentColor" 
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>

					{/* Right Section - Why Choose Us */}
					<div className="space-y-8">
						<div>
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
								Why Choose{" "}
								<span className="text-[#00A0AA]">Us?</span>
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{points.map((detail, index) => {
									return (
										<WhyChooseUsPoint
											key={index}
											point={detail.point}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
