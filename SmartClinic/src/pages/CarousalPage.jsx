import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import CarousalCard from "../components/CarousalCard";
import "swiper/css";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Navigation } from "swiper/modules";

const CarousalPage = (props) => {
	const carousalDetails = [
		{
			count: 5,
			comment: `"SmartClinic is a lifesaver! It helped me understand my symptoms and get a diagnosis quickly. Thanks for the peace of mind!"`,
			name: "Nidhish Kureti",
		},
		{
			count: 4,
			comment: `"I was worried about my health, but SmartClinic provided a clear diagnosis and valuable information. I can't thank you enough!"`,
			name: "Gana Kalavakuntla",
		},
		{
			count: 5,
			comment: `"What a fantastic resource! The accurate diagnosis I received from SmartClinic saved me from unnecessary stress and doctor visits."`,
			name: "Jaswanth Prudhvi",
		},
		{
			count: 5,
			comment: `"I'm impressed with the accuracy of the diagnoses on SmartClinic. It's like having a virtual doctor at my fingertips!"`,
			name: "Siddharth Paladi",
		},
	];

	return (
		<section
			className="py-16 lg:py-20"
			id="CarousalPage"
			ref={props.Carousalpagesection}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						What Our Patients Say
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Hear from our satisfied patients who have experienced our exceptional care.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{carousalDetails.map((details, index) => {
						return (
							<CarousalCard
								key={index}
								count={details.count}
								comment={details.comment}
								name={details.name}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CarousalPage;
