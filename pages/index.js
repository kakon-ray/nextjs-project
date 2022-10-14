import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Meta from "../component/Meta";


export default function Home({products}) {

  return (
    <>
      <Meta title="Home" description="This is a It complay" keywords="Web design,web development,logo design"/>

      <main>
        <Banner/>

        {
          products.map((product) => {
             
            return(
              <div key={product._id} className="mt-5 text-center bg-secondary p-5 m-5 rounded text-light">
                <h5 >{product.title}</h5>
                <Link href="/blog/[id]" as={`blog/${product.slug}`} >
                  <button className="btn btn-success">Read More</button>
                </Link>
              </div>
            )
          })
        }
      </main>
    </>
  );
}

export const getServerSideProps = async() => {
    
  const res = await fetch(`https://api.storerestapi.com/products`);
  let products = await res.json();

  products = products.data

  return{
    props:{
        products
    }
  }

}
