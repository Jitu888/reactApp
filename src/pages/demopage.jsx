import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import '../styles/demopage.css';
import Header from '../components/header';
import { useLocation } from 'react-router-dom';
import person from '../images/person.jpg'
import { AuthContext } from '../context/AuthContext';


const Demopage = () => {

    const [data, setData] = useState([])
    const [pic ,setPic] = useState(" ")
  const {user} = useContext(AuthContext)
   
//    console.log(location.state.email)
   
  
   

    // useEffect(() => {
    //     const fetchData = async () => {




    //         const output = await axios.get(`http://localhost:1111/user?email=${user.email}`);
    //         let res = output.data
    //         // console.log(output.data)
    //         setData(res)
           
    //     }

        

    //     fetchData();
    // });
    
  


  return (<>
    <Header />
    <div>
       
        <div className="container emp-profile">
            <form >
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={pic?pic:user.pic} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input  onChange ={(e) =>{setPic(URL.createObjectURL(e.target.files[0]))}} type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {user.fullname}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <p className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</p>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="button" className="profile-edit-btn" name="" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            
                            <h5 style={{marginBottom:"0",padding:"5px"}}>SKILLS</h5>
                            <p style={{margin:"0",padding:"5px"}}>Web Designer</p>
                            <p style={{margin:"0",padding:"5px"}} >Web Developer</p>
                            <p style={{margin:"0",padding:"5px"}}>WordPress</p>
                            <p style={{margin:"0",padding:"5px"}}>WooCommerce</p>
                            <p style={{margin:"0",padding:"5px"}}>PHP, .Net</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>UserId</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.userId}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.fullname}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                            {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    </div>
    </>
  )
}

export default Demopage;