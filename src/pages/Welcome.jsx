import React from 'react';
import image from '../images/home.jpg';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/Navbar'


const Welcome = () => {
  return (
    <>
    <Header/>
     <div className="container grid grid-two-column">
         <div className="section-hero-data">
          <p className="hero-top-data"></p>
          <h3 className="hero-heading">Welcome to technical Rockstar</h3>
          <p className="hero-para">
            I'm jitendra, A MERN stack developer and my age is .I'm Jitendra Vishwakarma,
             A MERN stack developer. I'm Jitendra Vishwakarma,
              A MERN stack developer.  
          </p>
          
          
            <Navbar/>
           </div>
             
           

          <div className="section-hero-image">
            <img src={image} alt="no" className='hero-img'/>
          </div>
        </div>
    
    <Footer/>
    
    </>
  )
}

export default Welcome