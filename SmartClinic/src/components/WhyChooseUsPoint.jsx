const WhyChooseUsPoint = (props) => {
    return ( 
        <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0 w-6 h-6">
                <img 
                    src="assets/Group 12.svg" 
                    alt="checkmark" 
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="font-medium text-gray-700 text-lg leading-relaxed">
                {props.point}
            </p>
        </div>
     );
}
 
export default WhyChooseUsPoint;