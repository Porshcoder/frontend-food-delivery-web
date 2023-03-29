import React from 'react';
import { FaFacebook, FaInstagram,FaTwitter,FaPinterest} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedin} from 'react-icons/fa'

const SocialIcons = ({Icons}) => {
  return (
    <div className='text-orange-500'>
      {Icons.map((icon)=>(
        <span key={icon.name} className=''>
            <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
      
      <div className='p-2 cursor-pointer inline-flex items-center rounded-full mx-1.5 text-xl gap-2
       '>
      <GoMarkGithub className='hover:text-gray-100   duration-300'/>
      <FaFacebook className='hover:text-gray-100   duration-300'/>
      <FaPinterest className='hover:text-gray-100   duration-300'/>
      <FaInstagram className='hover:text-gray-100   duration-300'/>
      <FaLinkedin className='hover:text-gray-100   duration-300'/>
      <FaTwitter className='hover:text-gray-100   duration-300'/>
    
      </div>
    </div>
  );
}

export default SocialIcons;
