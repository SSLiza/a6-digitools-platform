import React from 'react';

const Rating = () => {
    return (
        <div className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-6 sm:px-10 lg:px-20 xl:px-40 py-8 flex flex-col sm:flex-row items-center justify-center text-white divide-y sm:divide-y-0 sm:divide-x divide-white/30'>
            
            {/* Item 1 */}
            <div className='text-center px-6 sm:px-10 lg:px-16 py-6 sm:py-0'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold'>
                    50K+
                </h2>
                <p className='text-sm sm:text-base lg:text-xl'>
                    Active Users
                </p>
            </div>     

            {/* Item 2 */}
            <div className='text-center px-6 sm:px-10 lg:px-16 py-6 sm:py-0'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold'>
                    200+
                </h2>
                <p className='text-sm sm:text-base lg:text-xl'>
                    Premium Tools
                </p>
            </div>     

            {/* Item 3 */}
            <div className='text-center px-6 sm:px-10 lg:px-16 py-6 sm:py-0'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold'>
                    4.9
                </h2>
                <p className='text-sm sm:text-base lg:text-xl'>
                    Rating
                </p>
            </div>     

        </div>
    );
};

export default Rating;