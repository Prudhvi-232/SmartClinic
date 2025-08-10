import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PageNotFound = () => {
	const navigate = useNavigate();

	const toHome = () => {
		toast.success("Welcome back!!");
		navigate("/");
	};

	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4 py-12">
			<div className="max-w-md w-full">
				<img
					src="assets/undraw_page_not_found_re_e9o6.svg"
					alt="Page Not Found"
					className="w-full max-w-xs mx-auto mb-8"
				/>
				<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
					Oops! Page Not Found
				</h1>
				<p className="text-lg text-gray-600 mb-8">
					It seems like you've taken a wrong turn. The page you are looking for
					does not exist.
				</p>
				<button
					onClick={toHome}
					className="bg-[#00A0AA] hover:bg-[#008A94] text-white font-semibold px-8 py-3 rounded-lg text-lg transform hover:scale-105 "
				>
					Return to Home
				</button>
			</div>
			<ToastContainer />
		</section>
	);
};

export default PageNotFound;
