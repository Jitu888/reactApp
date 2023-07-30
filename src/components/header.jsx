import React from 'react';
import Navbar from './Navbar';
import {NavLink,Link} from 'react-router-dom';
import Login from '../pages/login';

const Header = () => {

     const mainDiv = {
      padding:"0 4.8rem",
      height: "5rem",
      backgroundColor:"whitesmoke",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
     }
   
     const logo = {
      height:'4rem',
      width:'5rem'
     }



  return (
    <>
  
  <div style={mainDiv}>
    <div className="head">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKCmbZglMFkkEP2-HSfc0c0OKWOrr3XPfKw&usqp=CAU" style={logo}/>

    </div>
    {/* <Navbar/> */}
    {/* <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginLeft: "75rem" ,gap:"10px"}}> */}
      {/* <div>  
        <div className="sign">

        <a href="/signin" style={{textAlign:"right",textDecoration: "none",color:"brown",fontWeight:"500"}}>signin</a>

        </div>
    </div> */}
</div>
    
    
    
    </>
  )
}

export default Header