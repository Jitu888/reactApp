import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/p.css'
import'../styles/profile.css';

import Header from '../components/header';
import Footer from '../components/footer';



const ProfileDetails = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        const fetchData = async () => {




            const output = await axios.get('https://reqres.in/api/users');
            let res = output.data.data
            
            setData(res)
        }



        fetchData();
    });
   

    const styleDiv = {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "2rem",
        backgroundColor: 'whitesmoke',
        border: "2px black solid"
    }

    const styleDiv1 = {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "1rem",
        marginTop:"2rem",
        marginLeft:"4rem"

    }






    return (
        <>
            

            <h1 style={{ textAlign: "center" }}>Profile Details</h1>
            {data.map((m) => {
                const {id,first_name ,last_name,avatar,email  } = m
                console.log(m)
                return (
                        
                    <div class="setting-manu">
                    <h1>User Profile</h1>
                    <strong>
                        <hr/>
                    </strong>
                    <div>
                         <span class="mobile-text">Enter the code we just send on your mobile phone&nbsp;
                                <b class="text-danger">+</b></span> 
                        <div>
                            <label for="bankName" class="class">Name:</label>
                            <input type="text" class="form-control" placeholder="Enter your Name" />
                             <input for="favorite-animal" />
                        </div>
                        <div>
                            <label for="bankName" class="class">New Email:</label>
                            <input type="text" class="form-control" placeholder="Enter your email"/>

                             <input for="favorite-animal" />
                        </div>
                        <div>
                            <div id="img">
                                <img src="../../../assets/images/unnamed.webp" alt="hugenerd" width="90"
                                    height="90" class="rounded-circle"/>
                            </div>
                            <div id="button">
                                <button class="button-group" onClick="onSave(otp.value)">Save</button>
                                 <button onClick="dialogRef.close()">Cancel</button> 
                            </div>
                        </div>
                    </div>
                </div>


                   









                
                
                // <div classNameName='container-fluid w-75'>
                //     <div style={styleDiv}>

                //         <div>

                //             <img src={avatar} alt="" style={{height:"40vh"}}/>


                //         </div>

                //         <div style={styleDiv1}>
                //             <div>

                //                 <p>id</p>
                //                 <p>name</p>
                //                 <p>email</p>
                //                 <p>city</p>
                //                 <p>dob</p>

                //             </div>
                //             <div>
                //                 <p>:</p>
                //                 <p>:</p>
                //                 <p>:</p>
                //                 <p>:</p>
                //                 <p>:</p>
                //             </div>
                //             <div>

                //                 <p>{id}</p>
                //                 <p>{`${first_name} ${last_name}`}</p>
                //                 <p>{email}</p>
                //                 <p>noida</p>
                //                 <p>13/03/1999</p>

                //             </div>


                //         </div>








                //     </div>

                //     <br /> 
                // </div>
                

                )
            })}












            






            {/* <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                   
                                    <th scope="col">Email</th>
                                </tr>
               </thead>

            {data.map((emp) => {
                const { id, first_name,last_name,email, role, dateOfBirth, profilePic } = emp
                return (
                    <>
                       
                            <tbody>
                                <tr>
                                    <th scope="row">{id}</th>
                                    <td>{first_name}</td>
                                    <td>{last_name}</td>
                                    <td>{email}</td>
                                </tr>
                               
                            </tbody>
                        

                       
                    </>
                
                )

                })}
         </table> */}
        </>
    )
}

export default ProfileDetails