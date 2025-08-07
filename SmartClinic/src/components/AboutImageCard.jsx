const AboutImageCard = (props) => {
    return (
        <div className="flex flex-col items-center mb-8 px-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                <img 
                    src={props.imgUrl} 
                    alt={props.docTitle} 
                    className="w-full h-auto rounded-xl shadow-lg" 
                />
                <div className="bg-[#00A0AA] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-xl mx-3 sm:mx-4 -mt-10 sm:-mt-12 relative z-10">
                    <p className="text-xs sm:text-sm font-medium opacity-90">Medical Expert</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold leading-tight">{props.docTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutImageCard;  