const ServicesCard = (props) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Image Container */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20">
                    <img 
                        src={props.imgUrl} 
                        alt={props.serviceHeading}
                        className="w-full h-full object-contain"
                    />
                </div>
                
                {/* Content Container */}
                <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {props.serviceHeading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {props.serviceDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;