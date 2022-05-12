import React from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';


const ProductList = ({allProducts}) => {
// console.log(allProducts)
  return ( 
  <>
    {allProducts.map((product)=>{
    <Product product={product}/>
    })}
 </>
  )
};
export default ProductList;