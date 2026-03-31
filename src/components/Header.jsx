import React from 'react';
import headerImg from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';

const Header = () => {
    return (
        <div className='flex gap-8 justify-between px-50 my-16  items-center'>
            <div className='space-y-8'>
                <div className='flex max-w-fit rounded-4xl items-center gap-2 bg-purple-200 px-3 py-1'>
                    <div className='bg-purple-300 h-5 w-5 rounded-full flex justify-center items-center'>
                        <div className='bg-purple-500 h-3 w-3 rounded-full flex justify-center items-center'>
                        <GoDotFill className='text-purple-700'/>
                    </div>
                    </div>
                     <span class="font-medium text-xl text-purple-700">
                    New: AI-Powered Tools Available
                </span>
                </div>
               
                <h2 className='text-7xl font-bold'>Supercharge Your <br />
                    Digital Workflow</h2>
                <p className='text-[#627382] text-xl'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className='btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-3xl text-white p-3'>Explore Products</button>
                    <button className="group relative p-[2px] rounded-3xl flex items-center justify-center bg-gradient-to-r from-[#4f39f6] to-[#9514fa] overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer">

                        <div className="bg-white w-full h-full px-2.5 py-1 rounded-[22px] flex items-center gap-1.5">

                            <CiPlay1
                                size={20}
                                className="text-[#4f39f6]"
                            />

                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4f39f6] to-[#9514fa] font-semibold">
                                Watch Demo
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <img src={headerImg} alt="" />
        </div>
    );
};

export default Header;