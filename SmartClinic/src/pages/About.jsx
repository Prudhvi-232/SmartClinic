import AboutImageCard from "../components/AboutImageCard";
import { useState } from "react";

const About = (props) => {
	const [aboutImageProps, _setaboutImageProps] = useState([
		{
			imgUrl: "/assets/image 41.svg",
			docTitle: "Pediatrician",
			description: "Expert care for children's health and development"
		},
		{
			imgUrl: "/assets/image 42.svg",
			docTitle: "Cardiologist",
			description: "Advanced heart and cardiovascular care"
		},
		{
			imgUrl: "/assets/image 43.svg",
			docTitle: "Dermatologist", 
			description: "Comprehensive skin and aesthetic treatments"
		},
	]);

	return (
		<section
			className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24"
			id="About"
			ref={props.AboutSection}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="inline-block px-4 py-2 bg-[#00A0AA]/10 rounded-full mb-6">
						<span className="text-[#00A0AA] font-semibold text-sm uppercase tracking-wide">
							About SmartClinic
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						Dedicated to Provide the{" "}
						<span className="text-[#00A0AA] bg-gradient-to-r from-[#00A0AA] to-[#00C5D1] bg-clip-text text-transparent">
							Best Diagnosis
						</span>
					</h2>
					<div className="max-w-4xl mx-auto">
						<p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
							At SmartClinic, we combine cutting-edge AI technology with expert medical knowledge 
							to provide accurate, personalized healthcare solutions. Our platform empowers you 
							with instant health insights while maintaining the highest standards of medical care.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
					{aboutImageProps.map((detail, index) => {
						return (
							<AboutImageCard
								imgUrl={detail.imgUrl}
								docTitle={detail.docTitle}
								description={detail.description}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default About;
