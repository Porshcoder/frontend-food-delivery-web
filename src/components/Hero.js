import React from 'react';
import burgervideo from '../asset/burger.mp4'

const Hero = () => {
    return (
        <div className='max-w-(1140px) mx-auto p-4 '>
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute  h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center w-[100%] '>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
                    <p className='ml-[20px] mt-8 text-[20px]'>Welcome to Go-<span className='text-orange-500 font-bold'>Food</span> your most reliable online Restaurant. we also provide the 
                    <br/>best organic-farm products,<span className='text-orange-500 font-bold text-[20px]'>(Food, Wine, Cafe & Cocktails etc..)</span> alongside fast<br/> delivery Services for our customers.</p>
                    <button className=' text-white mx-2 absolute bottom-4 py-3 px-7 rounded-full bg-orange-600 hover:text-white ml-6 mb-8'>Get Started</button>
                </div>
                <video autoPlay loop muted id='video' className='w-[100%] max-h-[500px] object-cover' >
                    <source src={burgervideo} type='video/mp4' />
                </video>
            </div>


        </div>
    );
}

export default Hero;
