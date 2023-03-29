import React from 'react';
// import burgervideo from '../asset/burger2.mp4'
// import pizzavideo from '../asset/pizza.mp4'
// import winevideo from '../asset/wine.mp4'

const MenuCards=() =>{
  return (
    <div className='max-w[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* menu cards */}
      <div className='rounded-xl relative border shadow-lg hover:scale-105 duration-300'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
           <p className='font-bold text-2xl px-2 pt-4'>Sun's Out</p> 
           <p className='px-2'>Through 8/26</p> 
           <button className='border-white  text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white'>Order Now</button>
           <button className='border-white  text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white ml-[240px]'>More Details</button>
        </div>
        <img src='https://images.pexels.com/photos/4559596/pexels-photo-4559596.jpeg?auto=compress&cs=tinysrgb&w=800' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                     />
                
      </div>

      <div className='rounded-xl relative border shadow-lg hover:scale-105 duration-300'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
           <p className='font-bold text-2xl px-2 pt-4'>Express Delivery</p> 
           <p className='px-2'>Added Daily</p> 
           <button className='border-white  text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white'>Order Now</button>
           <div className='hidden lg:flex items-center rounded-full p-1 text-[12px] w-[32%] ml-[260px] absolute bottom-4 bg-green-400' >
                    <p className='bg-red-500 text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2 '>PickUp</p>
                </div>
           {/* <button className='border-white  text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white ml-[240px]'>More Details</button> */}
        </div>
        
         <img src='https://images.pexels.com/photos/8939564/pexels-photo-8939564.jpeg?auto=compress&cs=tinysrgb&w=800' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
                     />
                
      </div>

      <div className='rounded-xl relative border shadow-lg hover:scale-105 duration-300'>
        
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
           <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p> 
           <p className='px-2'>Tasty Treats</p> 
           <button className='border-white text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white '>Order Now</button>
           <button className='border-white  text-white mx-2 absolute bottom-4 rounded-full hover:bg-orange-600 hover:text-white ml-[240px]'>More Details</button>
        </div>
        <img src='https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=800' className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
                   
      </div>
    </div>
  );
}

export default MenuCards;
