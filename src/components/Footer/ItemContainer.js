import Item from "./Item";
import {PRODUCTS, RESOURCES, COMPANY, SUPPORT, } from './Menus'
const ItemContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ml-[30px]">
        <Item Links={PRODUCTS} title='ABOUT US'/> 
        <Item Links={RESOURCES} title='SERVICES'/> 
        <Item Links={COMPANY} title='COMPANY' /> 
        <Item Links={SUPPORT} title='CONTACT US'/> 
        
    </div>
  );
}

export default ItemContainer;
