import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChangePassword from "./pages/ChangePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
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
