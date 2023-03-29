import React from 'react';

export default function Product(props) {
    return (
        <div className="border ml-3 mb-8 text-center">
        <img src={props.url} alt="" className=""/>
        <h2 className="text-2xl mb-2">{props.name}</h2>
        <p className="mb-2">{props.price}</p>
        <p className="mb-3">{props.description}</p>
        <p>
        <button className="bg-orange-500 w-[80%] text-white p-2 rounded-full border-none mb-2 hover:bg-blue-900 hover:text-white">Add To Cart</button>
        </p>
      </div>
    );
}
