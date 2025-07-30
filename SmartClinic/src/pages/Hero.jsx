import Home from "./Home";
import About from "./About";
import ServicesPage from "./ServicesPage";
import WhyChooseUs from "./WhyChooseUs";
import CarousalPage from "./CarousalPage";
import ConnectWithUs from "./ConnectWithUs";
import Footer from "./Footer";
import { useRef } from "react";
import PropTypes from "prop-types";

const Hero = (props) => {
	const MessageNameSection = useRef(null);
	return (
		<section className="w-full">
			<Home HomeSection={props.HomeSection} />
			<About AboutSection={props.AboutSection} />
			<ServicesPage ServicesPageSection={props.ServicesPageSection} />
			<WhyChooseUs WhyChooseUsSection={props.WhyChooseUsSection} />
			<CarousalPage CarousalPageSection={props.CarousalPageSection} />
			<ConnectWithUs
				ConnectWithUsSection={props.ConnectWithUsSection}
				MessageNameSection={MessageNameSection}
			/>
			<Footer
				ConnectWithUsSection={props.ConnectWithUsSection}
				MessageNameSection={MessageNameSection}
			/>
		</section>
	);
};

Hero.propTypes = {
	HomeSection: PropTypes.object,
	AboutSection: PropTypes.object,
	ServicesPageSection: PropTypes.object,
	WhyChooseUsSection: PropTypes.object,
	CarousalPageSection: PropTypes.object,
	ConnectWithUsSection: PropTypes.object,
};

export default Hero;
