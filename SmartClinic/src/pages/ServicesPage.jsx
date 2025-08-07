import { useState } from "react";
import ServicesCard from "../components/ServicesCard";
import { useNavigate } from "react-router-dom";

const ServicesPage = (props) => {
	const navigate = useNavigate();

	const navigateToDiagnoses = () => {
		navigate("/diagnoses");
	};
	
	const [serviceCardProps, setServiceCardProps] = useState([
		{
			serviceHeading: "Covid-19 Diagnosis",
			serviceDescription:
				"Comprehensive COVID-19 detection using symptoms analysis and medical evaluation for accurate diagnosis.",
			imgUrl: "/assets/image 27.svg",
		},
		{
			serviceHeading: "Pneumonia Diagnosis",
			serviceDescription:
				"Professional pneumonia detection through chest analysis and symptom evaluation using medical expertise.",
			imgUrl: "/assets/Screen Shot 2023-09-14 at 14.01.svg",
		},
		{
			serviceHeading: "Diabetes Assessment",
			serviceDescription:
				"Comprehensive diabetes risk assessment and monitoring through medical analysis and lifestyle evaluation.",
			imgUrl: "/assets/Screen Shot 2023-09-14 at 14.01(1).svg",
		},
		{
			serviceHeading: "Thyroid Evaluation",
			serviceDescription:
				"Professional thyroid function analysis combining medical history and symptoms for accurate diagnosis.",
			imgUrl: "/assets/Screen Shot 2023-09-14 at 14.02.svg",
		},
	]);

	return (
		<section 
			className="py-16 lg:py-20" 
			id="ServicesPage" 
			ref={props.Servicespagesection}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="mb-16">
					<p className="text-[#00A0AA] font-bold text-sm uppercase tracking-wide mb-4">
						DIAGNOSES & TREATMENTS
					</p>
					
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
						<div className="flex-1">
							<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
								More than{" "}
								<span className="text-[#00A0AA]">5 Specialties</span>{" "}
								and Health Care Diagnoses
							</h2>
						</div>
						
						<div className="flex justify-start lg:justify-end">
							<button
								className="bg-[#00A0AA] hover:bg-[#008A94] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
								onClick={navigateToDiagnoses}
							>
								See All Diagnoses
							</button>
						</div>
					</div>

					<p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
						Get professional medical assessments and diagnoses from experienced healthcare professionals 
						with our comprehensive diagnostic services.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
					{serviceCardProps.map((detail, index) => {
						return (
							<ServicesCard
								key={index}
								serviceHeading={detail.serviceHeading}
								serviceDescription={detail.serviceDescription}
								imgUrl={detail.imgUrl}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
