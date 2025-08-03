import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DoctorCard = (props) => {
	const navigate = useNavigate();

	const navigateToLogin = useCallback(() => {
		navigate("/login");
	}, [navigate]);
	const jwt = sessionStorage.getItem("jwt");
	const [direction, setDirection] = useState(false);

	const handleGoToHospital = useCallback(() => {
		if (jwt) {
			setDirection(true);
		} else {
			navigateToLogin();
			toast.error("Please login to use all the functions!!");
			setDirection(false);
		}
	}, [jwt, navigateToLogin]);

	useEffect(() => {
		handleGoToHospital();
	}, [handleGoToHospital]);

	return (
		<div className="mb-[30px] w-[408px] mx-auto">
			<div className="relative w-[408px] h-[240px] overflow-hidden rounded-t-lg shadow-lg">
				<img
					src={props.imageSrc}
					alt="hospital image"
					className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<div className="w-[408px]">
				<div className="bg-[#00A0AA] text-[#FFFFFF] rounded-b-lg shadow-lg">
					<div className="flex justify-between items-start p-[15px] pb-[10px]">
						<h3 className="text-[18px] font-semibold flex-1 pr-[10px] leading-tight">
							{props.name}
						</h3>
						<button
							onClick={handleGoToHospital}
							className="hover:bg-[#008A94] p-2 rounded transition-colors duration-200"
						>
							<a href={direction && props.website} className="">
								<img
									src="assets/hospital_web.svg"
									alt="Website"
									className="w-[20px] h-[20px]"
								/>
							</a>
						</button>
					</div>
					<div className="flex justify-between items-center mx-[15px] pb-[10px]">
						<p className="text-[16px]">
							<span className="text-[#FFC567] font-bold mr-[2px] text-[18px]">
								{props.rating}
							</span>
							<span className="text-[14px]">/5</span>
						</p>
						<div className="flex items-center">
							<img
								src="/assets/phone_doctor.svg"
								alt="Phone"
								className="w-[16px] h-[16px] mr-[5px]"
							/>
							<p className="text-[14px]">{props.phoneNumber}</p>
						</div>
					</div>
					<div className="text-center bg-[#008A94] text-[#FFFFFF] font-bold border-t-[1px] border-[#006B75]">
						<a
							href={direction && props.directions}
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								className="text-[16px] font-semibold py-[12px] w-full hover:bg-[#006B75] transition-colors duration-200"
								onClick={handleGoToHospital}
							>
								Go To Hospital
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorCard;
