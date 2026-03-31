import React from 'react';

const Rating = () => {
    return (
        <div className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-50 py-8 flex items-center justify-center text-white divide-x divide-white/30'>
            <div className='text-white px-50 text-center'>
                <h2 className='text-[60px] font-bold'>50K+</h2>
                <p className='text-xl'>Active Users</p>
            </div>     
            <div className='text-white px-50 text-center'>
                <h2 className='text-[60px] font-bold'>200+</h2>
                <p className='text-xl'>Premium Tools</p>
            </div>     
            <div className='text-white px-50 text-center'>
                <h2 className='text-[60px] font-bold'>4.9</h2>
                <p className='text-xl'>Rating</p>
            </div>     
        </div>
    );
};

export default Rating;