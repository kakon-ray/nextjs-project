import React, { useEffect, useState } from 'react';


const SingleProduct = ({product}) => {
 

console.log(product)

    return (
        <div className='text-center p-5 bg-secondary rounded m-5'>
            <h1>{product?.title}</h1>
        </div>
    );
};


export const getServerSideProps = async(context) => {
    
  const res = await fetch(`https://api.storerestapi.com/products/${context.params.id}`);
  let product = await res.json();

  product = product.data

  return{
    props:{
        product
    }
  }

}
export default SingleProduct;