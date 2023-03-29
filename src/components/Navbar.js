import React ,{useState} from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch, } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill,} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import{MdHelp ,MdFavorite} from 'react-icons/md'


const Navbar = () => {
const [nav,setNav] = useState(false)



    return (
        <div className='max-w-[1375px] mx-auto flex justify-between items-center p-4 bg-white ' >
            {/*left side*/}

            <div className='flex items-center '>
                <div onClick={() =>setNav(!nav)} className='cursor-pointer '>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-black mt-4'>
                    GO-<span className='font-bold text-orange-500'>Food</span>
                    <p className='text-sm ml-[30px] font-[Poppins]'>REST<span className='text-orange-500'>AU</span>RANT</p> 
                </h1>
                  
                
            </div>

            {/* search input */}

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={18} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Foods' />
            </div>

            <div className='hidden lg:flex items-center p-1 text-[14px]'>

                    <button className='border-none text-black p-2  hover:text-orange-600'>Register</button>
                    <button className='border-none text-black p-2  hover:text-orange-600'>Login</button>
                    
                </div>

            {/* card button */}

            <button className='bg-gray-900 text-white hidden md:flex items-center py-2 rounded-full hover:text-orange-500 hover:bg-white '>
                <BsFillCartFill size={20} className='mr-2  ' /> Cart
            </button>

            {/* mobile menu */}
            {/* overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div>: ''}
            
            {/* side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-blue-900 z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
             
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer text-white'/>

            <h2 className='text-2xl p-4 text-white'>Go-<span className='font-bold text-orange-500'>Food</span>
            <p className='text-sm ml-[5px] font-[Poppins]'>REST<span className='text-orange-500'>AU</span>RANT</p> 
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-white'>
                    <li className='text-xl py-4 flex hover:text-orange-500'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><FaWallet size={25} className='mr-4'/>Wallets</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><MdHelp size={25} className='mr-4'/>Help</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                    <li className='text-xl py-4 flex hover:text-orange-500'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
            </div>

        </div>
    );
}

export default Navbar;
