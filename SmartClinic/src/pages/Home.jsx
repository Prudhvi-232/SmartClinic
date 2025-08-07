import About from "./About";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    
    const navigateToDiagnoses = () => {
        navigate("/diagnoses");
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('About');
        if (aboutSection) {
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    };

    return (
        <section
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
            id="Home"
            ref={props.HomeSection}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
                {/* Image Section */}
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                    <div className="relative bg-gradient-to-br from-[#FFC567] to-[#FFB84D] rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img
                            src="/assets/image 32.svg"
                            alt="SmartClinic Healthcare Illustration"
                            className="w-full max-w-[400px] h-auto object-contain drop-shadow-lg"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00A0AA] rounded-full opacity-80"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#00A0AA] rounded-full opacity-60"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
                    <div className="space-y-4">
                        <p className="text-lg md:text-xl text-[#00A0AA] font-bold tracking-wide uppercase">
                            Welcome to SmartClinic
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Your Journey to{" "}
                            <span className="text-[#00A0AA] bg-gradient-to-r from-[#00A0AA] to-[#00C5D1] bg-clip-text text-transparent">
                                Better Health
                            </span>{" "}
                            Starts Here
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Experience personalized healthcare with our AI-powered diagnosis tools and expert medical guidance.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={navigateToDiagnoses}
                            className="group bg-[#00A0AA] hover:bg-[#008A94] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#00A0AA]/30"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Discover More
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <button 
                            onClick={scrollToAbout}
                            className="border-2 border-[#00A0AA] text-[#00A0AA] hover:bg-[#00A0AA] hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00A0AA]/30"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Learn More
                                {/* <svg 
                                    className="w-5 h-5 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg> */}
                            </span>
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">Trusted by thousands of patients</p>
                        <div className="flex justify-center lg:justify-start space-x-6 text-gray-400">
                            <div className="flex items-center space-x-2">
                                {/* Tick mark sign */}
                                <div className="w-8 h-8 bg-[#00A0AA] rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                
                                <span className="text-sm font-medium">AI-Powered</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-[#00A0AA] rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">Secure</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-[#00A0AA] rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">24/7 Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
