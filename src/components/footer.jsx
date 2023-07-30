import React from 'react'

const Footer = () => {

    const mainDiv = {
        position:"absolute",
        backgroundColor:"black",
        color:"white",
        
        width:'100%',
        bottom:"0"
        


        
        
         
         
        
    }

  return (
    <>
    <div style={mainDiv}>
     <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>



          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer