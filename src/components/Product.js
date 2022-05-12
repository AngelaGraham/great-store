import React from 'react';


const Product = ({product}) => {

  console.log(product)
  return (
   
    <div className ="card">
      <img src = {product.image} alt ="product"/>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{product.id}</div>
      <div>{product.category}</div>
    </div>
  );
};

export default Product;