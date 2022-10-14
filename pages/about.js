import React from 'react';
import Head from "next/head";
import style from "../styles/About.module.css"
import Header from '../component/Header';
import Meta from '../component/Meta';

const About = () => {
    return (
        <>
      
      <Meta title="About" description="This is a It company" keywords="Web design,web development,logo design"/>
  
        <main>
          <div>
            <h1 className="text-secondary text-center">This is About Page</h1>
             <p className="text-success text-center">Amr sonar bangla ami tomay valobasi</p>

          </div>

          
        </main>
      </>
    );
};

export default About;