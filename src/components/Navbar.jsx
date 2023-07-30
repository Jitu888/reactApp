import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const sign = {
    border: "1px solid brown",
    borderRadius: "20px",
    textAlign: "center",
    width: "6rem"
  }
  return (
    <>
      <div style={{display:"flex",gap:"10rem"}}>
        <div style={sign}>

          <a href="/signin" style={{ textAlign: "center", textDecoration: "none", color: "brown", fontWeight: "500" }}>login</a>

        </div>


        <div style={sign}>

          <a href="/signup" style={{ textAlign: "center", textDecoration: "none", color: "brown", fontWeight: "500" }}>register</a>

        </div>
      </div>

    </>
  )
}

export default Navbar