import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData,responsive } from "./dataItem";


export default function Category(){

const product = productData.map((item) => (
  <Product 
  name={item.name} 
  url={item.imageurl} 
  price={item.price} 
  description= {item.description} 
  /> 
));

return(
  <div className="font-bold">
    <h1 className="text-center text-4xl mb-5">Our <span className="text-orange-500">Popular</span> Cusines</h1>
<Carousel showDots={true} transitionDuration={500} swipeable={true} 
 responsive={responsive}> 
{product} 
</Carousel>

</div>
);
}
























