import Home from "./Home";
import Footer from "./Footer";
import { useRef } from 'react'

const Hero = (props) => {
    const MessageNameSection = useRef(null);
    return (
        <section className="w-full">
            
            <Home HomeSection={props.HomeSection} />
            <Footer  ConnectWithUsSection={props.ConnectWithUsSection} MessageNameSection={MessageNameSection}/>
        </section>
    );
}

export default Hero;