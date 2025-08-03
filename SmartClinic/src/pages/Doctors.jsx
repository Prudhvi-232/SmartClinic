import { useState } from "react";
import DoctorCard from "../Components/DoctorCard";
import "../styles/infiniteScroll.css";

const Doctors = () => {
	const [doctors, _setDoctors] = useState([
		{
			name: "Tender Palm Hospital",
			rating: "3.8",
			fullAddress:
				"Amar Shaheed Path, Sector-7, Sector 7, Gomti Nagar, Lucknow, Ahmamau, Uttar Pradesh 226001",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipMVO4wLdW_tijKWqbR84NECgf8W9Hs5mdQ2wfo2=w408-h306-k-no`,
			website: `https://www.tenderpalm.com/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Lucknow,+Uttar+Pradesh/Tender+Palm+Hospital,+Amar+Shaheed+Path,+Sector-7,+Sector+7,+Gomti+Nagar,+Lucknow,+Ahmamau,+Uttar+Pradesh+226001/@26.8018656,81.0127645,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be342ab9377f7:0xbab197a93f5a2c9d!2m2!1d81.0098672!2d26.8048692?entry=ttu`,
			phoneNumber: "05223500111",
		},
		{
			name: "PANACEA HOSPITAL",
			rating: "4.7",
			fullAddress:
				"4C, 1076, GomtiNagar, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipN0znneSR9v3cPAruQ3iebG0ZOAGa8I9p-C3pQS=w408-h252-k-no`,
			website: `http://www.panaceahospital.in/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Lucknow,+Uttar+Pradesh/4C,+PANACEA+HOSPITAL,+1076,+GomtiNagar,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8095389,81.0076047,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be2cdbe5d3e0f:0x49f7f6d1d95c61f9!2m2!1d81.0122539!2d26.8212187?entry=ttu`,
			phoneNumber: "09919083111",
		},
		{
			name: "SHISHU HOSPITAL ",
			rating: "3.6",
			fullAddress:
				"R255+GPW, Amar Shaheed Path, near Dial100 Police office, Gomti Nagar, Lucknow, Uttar Pradesh 226002",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipNZbss7H3K9qwz5xfROA6rMlssGveSR8aH5Y-YE=w426-h240-k-no`,
			website: `None`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/R255%2BGPW+SHISHU+HOSPITAL+NEAR+INTERNATIONAL+STADIUM,+Amar+Shaheed+Path,+near+Dial100+Police+office,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226002/@26.8027043,81.0125209,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be3172ea6d615:0x1c5a8fc407595cbd!2m2!1d81.0093137!2d26.8088506?entry=ttu`,
			phoneNumber: "Not Available",
		},
		{
			name: "MEDIHEALTH MULTISPECIALITY HOSPITAL",
			rating: "4.9",
			fullAddress:
				"Padma Tower, Lallan Singh Nagar, Arjunganj, Lucknow, Uttar Pradesh 226002",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipN9y87Z7EIamEVHtuSl2OwveG6aPqZ8y4UKAArX=w426-h240-k-no`,
			website: `http://medihealthlko.com/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/MEDIHEALTH+MULTISPECIALITY+HOSPITAL,+Padma+Tower,+Lallan+Singh+Nagar,+Arjunganj,+Lucknow,+Uttar+Pradesh+226002/@26.8014124,81.0003555,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be32aec5c584f:0x72cbaa57e0dee88f!2m2!1d80.9956558!2d26.8049613?entry=ttu`,
			phoneNumber: "07651832332",
		},
		{
			name: "HealthCity Trauma Centre & Superspeciality Hospital",
			rating: "4.5",
			fullAddress:
				"Health City Hospital Road, NH-A/B, Vijay Khand Rd, Vijay Khand 2, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipO4c8jZsnktIXzfhjY5si3oh_ourIA_u82eNU9J=w408-h306-k-no`,
			website: `http://www.lucknowhealthcity.com/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/HealthCity+Trauma+Centre+%26+Superspeciality+Hospital,+Health+City+Hospital+Road,+NH-A%2FB,+Vijay+Khand+Rd,+Vijay+Khand+2,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8266132,80.988764,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be2c94da83907:0x2a73095003dbbf46!2m2!1d80.9935299!2d26.8566484?entry=ttu`,
			phoneNumber: "09455335566",
		},
		{
			name: "St Joseph Hospital",
			rating: "3.5",
			fullAddress:
				"Captain Manoj Pandey, 5, Gomti Nagar Bypass Rd, Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipO1Ep7ncZPrp5Ivq1ZynFY-04fgVsAEn3mc5UnZ=w408-h634-k-no`,
			website: `http://www.stjosephslucknow.org/experts.php`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/St+Joseph+Hospital,+Captain+Manoj+Pandey,+5,+Gomti+Nagar+Bypass+Rd,+Vishal+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8255303,80.9882553,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be2cc31c47117:0xc12c4fd2be195079!2m2!1d80.9923729!2d26.8537749?entry=ttu`,
			phoneNumber: "05224054228",
		},
		{
			name: "Divine Heart & Multispeciality Hospital",
			rating: "4.3",
			fullAddress:
				"V25F+MHW, Institutional Area, Viraj Khand Rd, Viraj Khand - 5, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipPta74AQaVVZCR4i1Z8r9XUdMOJnnm7pXmiBc2R=w408-h544-k-no`,
			website: `https://divinehearthospital.com/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/V25F%2BMHW+Divine+Heart+%26+Multispeciality+Hospital,+Institutional+Area,+Viraj+Khand+Rd,+Viraj+Khand+-+5,+Viraj+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8285572,80.9959259,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be2f3d2796549:0x449251352fb3e3a6!2m2!1d81.0235985!2d26.8588016?entry=ttu`,
			phoneNumber: "05222721992",
		},
		{
			name: "Samvedana Multispeciality Hospital",
			rating: "4.8",
			fullAddress:
				"6E/42, Sector 6, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipOZA8u7iARVoE51iFuRg35FdYeFNGNvXAgCHlFs=w426-h240-k-no`,
			website: `http://samvedanahealthcare.in/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/Samvedana+Multispeciality+Hospital,+6E%2F42,+Sector+6,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.811935,80.9943822,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be38abd332c3d:0xbc75ff1d5078a55e!2m2!1d81.0147699!2d26.8329948?entry=ttu`,
			phoneNumber: "09151391110",
		},
		{
			name: "Medwell Hospital",
			rating: "3.5",
			fullAddress:
				"Burlington Crossing, 37, Cantonment Rd, Lucknow, Uttar Pradesh 226001",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipP-6G2HNeW_q6bdXpulXH-eANe8guVLXhxINp5e=w408-h306-k-no`,
			website: `None`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/Medwell+Hospital,+Burlington+Crossing,+37,+Cantonment+Rd,+Lucknow,+Uttar+Pradesh+226001/@26.8185083,80.9608532,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399bfdaec3e250bf:0xad36a89da078eb0a!2m2!1d80.9369493!2d26.8416017?entry=ttu`,
			phoneNumber: "05224056111",
		},
		{
			name: "SPARSH MULTISPECIALITY HOSPITAL",
			rating: "5.0",
			fullAddress:
				"Q2W6+PPC, NH731, Bagiamau, Ahmamau, Uttar Pradesh 226002",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipOMmQYFod4fvQ7n6hZ55yRU8N3yqFShVmgiF0Dl=w408-h544-k-no`,
			website: `None`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/Q2W6%2BPPC+SPARSH+MULTISPECIALITY+HOSPITAL,+NH731,+Bagiamau,+Ahmamau,+Uttar+Pradesh+226002/@26.8021653,81.0107662,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be38488ce99bf:0xfaf0343d141a4d2e!2m2!1d81.0117772!2d26.7968186?entry=ttu`,
			phoneNumber: "Not Available",
		},
		{
			name: "Nishat Hospital",
			rating: "3.6",
			fullAddress:
				"Nishat hospital, Sri, J.C.Bose Marg, Kaiserbagh Officer's Colony, Lalbagh, Lucknow, Uttar Pradesh 226001",
			// imageSrc: `https://lh5.googleusercontent.com/p/AF1QipP5JvkR1EhMej5Zq_VjDrZB4TtNA--sLw5FaVwQ=w427-h240-k-no`,
			imageSrc: `https://imgs.search.brave.com/UdRyvIjjTe0QvQ2FGTVc_xBudmOEh2k2EydHh72rSxY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuamRtYWdpY2Jv/eC5jb20vY29tcC9s/dWNrbm93L2RjLzA1/MjJweDUyMi54NTIy/LjEyMzQ0MzkzNDJ5/M2M5bjUuZGMvY2F0/YWxvZ3VlL25pc2hh/dC1ob3NwaXRhbC1s/YWxiYWdoLWx1Y2tu/b3ctaG9zcGl0YWxz/LTRhcTB0czItMjUw/LmpwZw`,
			website: `https://www.nishathospital.com/`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/Nishat+Hospital,+Nishat+hospital,+Sri,+J.C.Bose+Marg,+Kaiserbagh+Officer's+Colony,+Lalbagh,+Lucknow,+Uttar+Pradesh+226001/@26.8206223,80.9596462,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399bfda436a3a617:0xcd75e98e07d9c9d3!2m2!1d80.9363396!2d26.8503694?entry=ttu`,
			phoneNumber: "05224082590",
		},
		{
			name: "Sun Hospital Lucknow",
			rating: "3.5",
			fullAddress:
				"4/4, Vaibhav Khand, Effy Tower, opposite Mantri Awas, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipOqB7S8pOWwZsZz2rQym_6DsABQ58PL6R4FvlRd=w408-h725-k-no`,
			website: `None`,
			directions: `https://www.google.com/maps/dir/IIIT+Lucknow+Admin+Block,+Chak+Ganjaria,+C.+G.+City,+Lucknow,+Uttar+Pradesh/Sun+Hospital+Lucknow,+4%2F4,+Vaibhav+Khand,+Effy+Tower,+opposite+Mantri+Awas,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.8316842,80.9755829,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x399be37b925b07fb:0xe514a28ec36dcac1!2m2!1d81.0237994!2d26.8004659!1m5!1m1!1s0x399be3f6a53b4b21:0x5abdf5fe86e330ea!2m2!1d81.0208844!2d26.859815?entry=ttu`,
			phoneNumber: "08960286288",
		},
		{
			name: "Apollo Hospital Lucknow",
			rating: "4.2",
			fullAddress:
				"Kanpur - Lucknow Rd, Sector B, Bargawan, LDA Colony, Lucknow, Uttar Pradesh 226012",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipNfBdchKODODyeIQl4XSFZK6F7Sf4wW1G7Z1QQi=w408-h306-k-no`,
			website: `https://www.apollohospitals.com/`,
			directions: `https://www.google.com/maps/place/Apollo+Hospital+Lucknow/@26.7656983,80.8952883,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.7656983!4d80.8952883`,
			phoneNumber: "1860-500-1066",
		},
		{
			name: "Max Super Speciality Hospital",
			rating: "4.6",
			fullAddress:
				"1, Sarvodaya Nagar, Near Ekana Cricket Stadium, Lucknow, Uttar Pradesh 226016",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipM8uJ3K_9cZGQh8EjBrHKNlG-xE5CwFJZvGw5Qk=w408-h306-k-no`,
			website: `https://www.maxhealthcare.in/`,
			directions: `https://www.google.com/maps/place/Max+Super+Speciality+Hospital/@26.8234567,80.9876543,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8234567!4d80.9876543`,
			phoneNumber: "0522-4515000",
		},
		{
			name: "Fortis Hospital Lucknow",
			rating: "4.4",
			fullAddress:
				"B-2, Sec-B, Pocket-B, Vasant Kunj, New Delhi - 110070",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipNGHKN8x9_uXZBvHJ7wSGH-vNz2tL4kQz7pYRTL=w408-h306-k-no`,
			website: `https://www.fortishealthcare.com/`,
			directions: `https://www.google.com/maps/place/Fortis+Hospital/@26.8456789,81.0123456,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8456789!4d81.0123456`,
			phoneNumber: "0522-6784567",
		},
		{
			name: "Medanta The Medicity",
			rating: "4.5",
			fullAddress:
				"Sector 38, Gurgaon, Haryana - 122001 (Branch coming to Lucknow)",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipO9K2L5mN3P4qR6sT7uV8wX9yZ0aB1cD2eF3gH=w408-h306-k-no`,
			website: `https://www.medanta.org/`,
			directions: `https://www.google.com/maps/place/Medanta+Hospital/@26.8567890,81.0234567,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8567890!4d81.0234567`,
			phoneNumber: "0124-4141414",
		},
		{
			name: "King George's Medical University",
			rating: "4.1",
			fullAddress: "Chowk, Lucknow, Uttar Pradesh 226003",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipPqR8sT9uV0wX1yZ2aB3cD4eF5gH6iJ7kL8mN9=w408-h306-k-no`,
			website: `https://www.kgmcindia.edu/`,
			directions: `https://www.google.com/maps/place/King+George's+Medical+University/@26.8678901,81.0345678,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8678901!4d81.0345678`,
			phoneNumber: "0522-2257540",
		},
		{
			name: "Sanjay Gandhi Postgraduate Institute",
			rating: "4.7",
			fullAddress: "Raebareli Road, Lucknow, Uttar Pradesh 226014",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipQrS9tU0vW1xY2zA3bC4dE5fF6gH7iJ8kL9mN0=w408-h306-k-no`,
			website: `https://www.sgpgi.ac.in/`,
			directions: `https://www.google.com/maps/place/SGPGI/@26.8789012,81.0456789,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8789012!4d81.0456789`,
			phoneNumber: "0522-2494401",
		},
		{
			name: "Vivekananda Polyclinic",
			rating: "4.0",
			fullAddress: "Vivekanand Puri, Lucknow, Uttar Pradesh 226007",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipRsT0uV1wX2yZ3aB4cD5eF6gH7iJ8kL9mN0oP1=w408-h306-k-no`,
			website: `None`,
			directions: `https://www.google.com/maps/place/Vivekananda+Polyclinic/@26.8890123,81.0567890,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.8890123!4d81.0567890`,
			phoneNumber: "0522-2345678",
		},
		{
			name: "Chandan Hospital",
			rating: "3.9",
			fullAddress: "Faizabad Road, Lucknow, Uttar Pradesh 226016",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipStU1vW2xY3zA4bC5dE6fF7gH8iJ9kL0mN1oP2=w408-h306-k-no`,
			website: `https://www.chandanhospital.com/`,
			directions: `https://www.google.com/maps/place/Chandan+Hospital/@26.9001234,81.0678901,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.9001234!4d81.0678901`,
			phoneNumber: "0522-3456789",
		},
		{
			name: "Sahara Hospital",
			rating: "4.1",
			fullAddress:
				"Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
			imageSrc: `https://lh5.googleusercontent.com/p/AF1QipTuV2wX3yZ4aB5cD6eF7gH8iJ9kL0mN1oP2qR3=w408-h306-k-no`,
			website: `https://www.saharahospital.com/`,
			directions: `https://www.google.com/maps/place/Sahara+Hospital/@26.9112345,81.0789012,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.9112345!4d81.0789012`,
			phoneNumber: "0522-4567890",
		},
	]);

	return (
		<section className="my-[100px]">
			<div className="max-w-full mx-auto">
				<h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
					Find the Best Hospitals Near You
				</h1>

				{/* Infinite Scrolling Hospitals */}
				<div className="infinite-scroll-container mb-16">
					<div className="infinite-scroll-track">
						{/* First set of cards */}
						{doctors.map((details, index) => (
							<div
								key={`first-${index}`}
								className="infinite-scroll-item"
							>
								<DoctorCard
									name={details.name}
									rating={details.rating}
									imageSrc={details.imageSrc}
									website={details.website}
									directions={details.directions}
									phoneNumber={details.phoneNumber}
								/>
							</div>
						))}
						{/* Duplicate set for seamless infinite loop */}
						{doctors.map((details, index) => (
							<div
								key={`second-${index}`}
								className="infinite-scroll-item"
							>
								<DoctorCard
									name={details.name}
									rating={details.rating}
									imageSrc={details.imageSrc}
									website={details.website}
									directions={details.directions}
									phoneNumber={details.phoneNumber}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Browse All Hospitals Section */}
				<div className="px-6 py-12 bg-gray-50">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold mb-4 text-gray-800">
								Browse All Hospitals
							</h2>
							<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
								Explore our comprehensive list of trusted
								healthcare providers. Hover over the scrolling
								section above to pause and view details. Click
								on any hospital card to get directions or visit
								their website.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
							{doctors.map((details, index) => (
								<div
									key={`static-${index}`}
									className="w-full max-w-[420px]"
								>
									<DoctorCard
										name={details.name}
										rating={details.rating}
										imageSrc={details.imageSrc}
										website={details.website}
										directions={details.directions}
										phoneNumber={details.phoneNumber}
									/>
								</div>
							))}
						</div>

						{/* Bottom spacing and info */}
						<div className="mt-12 text-center">
							<p className="text-sm text-gray-500 max-w-2xl mx-auto">
								All hospital information is regularly updated.
								For emergencies, please call your local
								emergency services. Hospital ratings are based
								on patient reviews and facility assessments.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Doctors;
