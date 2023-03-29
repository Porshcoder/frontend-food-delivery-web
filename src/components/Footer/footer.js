import React from 'react';
import ItemContainer from './ItemContainer';
import SocialIcons from './SocialIcons';
import {Icons} from './Menus'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white  h-[100%] w-[100%] '>
     <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-blue-900 py-7 '>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 mt-10'>We provide the best <span className='text-orange-500'>Foods & Food Delivery</span> services.</h1>

      <div>
        <input type='text' placeholder='Enter Your Email Here' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none border-none'/>
        <button className='bg-orange-500 hover:bg-white duration-300 hover:text-black px-5 py-2.5  font-[Poppins]  text-white rounded-md md:w-auto w-full border-none'>Request Code</button>
      </div>
     </div>
     <ItemContainer/>
     <hr/>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
     text-center pt-2 text-gray-400 text-sm pb-8'>
      
      <span className='text-orange-500 cursor-pointer py-2'>©Copy Rights by PorshCoder 2023 |  <u>All rights reserved</u>.</span>
      <span className='text-orange-500 py-2'>Terms & Privacy Policy.</span>
      <SocialIcons Icons={Icons}/>
     </div>
    </footer>
  );
}

export default Footer;
