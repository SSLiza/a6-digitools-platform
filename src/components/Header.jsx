import React from 'react';
import headerImg from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';

const Header = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-8 justify-between px-6 sm:px-10 lg:px-20 xl:px-40 my-10 lg:my-16 items-center'>
            
            {/* LEFT CONTENT */}
            <div className='space-y-6 lg:space-y-8 text-center lg:text-left'>
                
                {/* Badge */}
                <div className='flex max-w-fit mx-auto lg:mx-0 rounded-4xl items-center gap-2 bg-purple-200 px-3 py-1'>
                    <div className='bg-purple-300 h-5 w-5 rounded-full flex justify-center items-center'>
                        <div className='bg-purple-500 h-3 w-3 rounded-full flex justify-center items-center'>
                            <GoDotFill className='text-purple-700'/>
                        </div>
                    </div>
                    <span className="font-medium text-sm sm:text-base lg:text-xl text-purple-700">
                        New: AI-Powered Tools Available
                    </span>
                </div>
               
                {/* Heading */}
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                    Supercharge Your <br className='hidden sm:block' />
                    Digital Workflow
                </h2>

                {/* Description */}
                <p className='text-[#627382] text-base sm:text-lg lg:text-xl'>
                    Access premium AI tools, design assets, templates, and productivity <br className='hidden md:block' />
                    software—all in one place. Start creating faster today. <br className='hidden md:block' />
                    Explore Products
                </p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                    
                    <button className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white px-6 py-3 text-sm sm:text-base'>
                        Explore Products
                    </button>

                    <button className="group relative p-[2px] rounded-3xl flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer">

    <div className="bg-white w-full h-full px-4 py-2 rounded-[22px] flex items-center justify-center gap-2 text-center">

        <CiPlay1
            size={18}
            className="text-[#4f39f6]"
        />

        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-sm sm:text-base text-center">
            Watch Demo
        </span>

    </div>
</button>

                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className='w-full lg:w-1/2'>
                <img 
                    src={headerImg} 
                    alt="banner" 
                    className='w-full h-auto max-w-md mx-auto lg:max-w-full'
                />
            </div>

        </div>
    );
};

export default Header;