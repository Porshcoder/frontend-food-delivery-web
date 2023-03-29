import React, { useState } from 'react';
import { data } from '../data/data.js'

const Food = () => {
  // console.log(data)
  const [foods, setFood] = useState(data)
  // filter type burgers etc
  const filterType =(catergory) =>{
    setFood(
      data.filter((item)=>{
        return item.category === catergory
      })
    );
  };

// filter by price
const filterPrice = (price)=>{
  setFood(
    data.filter((item) =>{
      return item.price === price;
    })
  )
}


  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* filter row */}

      <div className='flex flex-col lg:flex-row justify-between py-6 '>

        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700 ml-3'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() =>setFood(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>All</button>
            <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full '>Burgers</button>
            <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>Pizza</button>
            <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>Salad</button>
            <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>Chicken</button>
            <button onClick={()=>filterType('wine')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>Wine</button>
            <button onClick={()=>filterType('beef')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>Beef</button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className='font-bold text-gray-700 ml-2'>Filter Price</p>
          <div className='flex justify-between max-w-[480px] w-full '>
            <button onClick={() =>filterPrice('5,500cfa')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>5,500cfa</button>
            <button onClick={() =>filterPrice('10,000cfa')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>10,000cfa</button>
            <button onClick={() =>filterPrice('20,000cfa')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>20,000cfa</button>
            <button onClick={() =>filterPrice('8,000cfa')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'>8,000cfa</button>
            {/* <button onClick={() =>filterPrice('1000$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full '>1000$</button> */}
          </div>
        </div>
      </div>

      {/* display images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-600 text-white p-2 rounded-full'>{item.price}</span>
              </p>
          </div>
          </div>
        ))}
      </div>
      </div>
      );
};

      export default Food;
