import CarousalCardStars from './CarousalCardStars';
import { useEffect, useState } from 'react';

const CarousalCard = (props) => {
    useEffect(() => {
        const starsArray = Array.from({ length: props.count}, (_, index) => (
            <CarousalCardStars key={index} />
        ));
        setStars(starsArray);
    }, [props.count]);

    const [stars, setStars] = useState([]);

    return (
        <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-100'>
            {/* Stars Rating */}
            <div className='flex items-center mb-4'>
                {stars}
            </div>

            {/* Testimonial */}
            <blockquote className='text-gray-700 text-lg leading-relaxed mb-4'>
                {props.comment}
            </blockquote>

            {/* Profile Section */}
            <div className='flex items-center'>
                <img 
                    src="assets/Ellipse 10.svg" 
                    alt="User profile" 
                    className='w-10 h-10 rounded-full object-cover'
                />
                <div className='ml-3'>
                    <h4 className='font-semibold text-gray-900'>
                        {props.name}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CarousalCard;
