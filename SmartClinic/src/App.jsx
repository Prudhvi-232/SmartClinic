import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChangePassword from "./pages/ChangePassword";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { useRef, useEffect } from "react";
import PageNotFound from "./pages/PageNotFound";
import Doctors from "./pages/Doctors";
import DiagnosesPage from "./pages/DiagnosesPage";
import ForgotPassword from "./pages/ForgotPassword";
import VoiceRecorder from "./components/VoiceRecorder";
import Admin from "./pages/Admin";
import AdminUser from "./pages/AdminUser";
import AdminAudio from "./pages/AdminAudio";
import AdminAudioFilter from "./pages/AdminAudioFilter";
function App() {
	const HomeSection = useRef(null);
	const AboutSection = useRef(null);
	const Servicespagesection = useRef(null);
	const WhyChooseUsSection = useRef(null);
	const Carousalpagesection = useRef(null);
	const ConnectWithUsSection = useRef(null);
	const FooterSection = useRef(null);
	const jwt = sessionStorage.getItem("jwt");
	const encryptedData = sessionStorage.getItem("encryptedData");

	// Ask for location access on initial load (only if not already stored)
	useEffect(() => {
		if (typeof window === "undefined") return;
		const alreadyStored = sessionStorage.getItem("userLocation");
		if (alreadyStored) return; // don't prompt again this session
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const coords = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
						accuracy: position.coords.accuracy
					};
					console.log(coords.lng);
					sessionStorage.setItem(
						"userLocation",
						JSON.stringify(coords)
					);
					console.log("User location captured:", coords);
					
					toast.success("Location captured");
				},
				(error) => {
					if (error.code === error.PERMISSION_DENIED) {
						toast.info("Location permission denied");
					} else if (error.code === error.POSITION_UNAVAILABLE) {
						toast.error("Location unavailable");
					} else if (error.code === error.TIMEOUT) {
						toast.error("Location request timed out");
					} else {
						toast.error("Unable to get location");
					}
				},
				{ enableHighAccuracy: true, timeout: 100000, maximumAge: 60000 }
			);
		} else {
			toast.warn("Geolocation not supported in this browser");
		}
	}, []);
	return (
		<div>
			<Navbar
				message={"login successful"}
				AboutSection={AboutSection}
				HomeSection={HomeSection}
				Servicespagesection={Servicespagesection}
				WhyChooseUsSection={WhyChooseUsSection}
				Carousalpagesection={Carousalpagesection}
				ConnectWithUsSection={ConnectWithUsSection}
				FooterSection={FooterSection}
			/>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>

			<Routes>
				<Route
					path="/"
					element={
						<Hero
							AboutSection={AboutSection}
							HomeSection={HomeSection}
							Servicespagesection={Servicespagesection}
							WhyChooseUsSection={WhyChooseUsSection}
							Carousalpagesection={Carousalpagesection}
							ConnectWithUsSection={ConnectWithUsSection}
							FooterSection={FooterSection}
						/>
					}
				/>
				<Route path="/hospitals" element={<Doctors />} />
				<Route path="/diagnoses" element={<DiagnosesPage />} />
				<Route path="/forgetPassword" element={<ForgotPassword />} />
				{!jwt && <Route path="/login" element={<LoginPage />} />}
				{!jwt && <Route path="/signup" element={<SignUpPage />} />}
				{encryptedData && (
					<Route path="/changePass" element={<ChangePassword />} />
				)}

				<Route path="*" element={<PageNotFound />} />
				<Route path="/admin-dashboard" element={<Admin />} />
				<Route path="/admin-users" element={<AdminUser />} />
				<Route path="/admin-audio" element={<AdminAudio />} />
				<Route
					path="/admin-audio-filter"
					element={<AdminAudioFilter />}
				/>
			</Routes>

			<VoiceRecorder />
		</div>
	);
}

export default App;
