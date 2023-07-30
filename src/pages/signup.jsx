import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'





const Signup = () => {


   
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate = useNavigate()

  // const FetchApi = async () => {
  //   console.log(date, phone)
  //   const data = {
  //     fullname: name,
  //     email: email,
  //     password: pass,
  //     dateOfBirth: date,
  //     phone: phone
  //   }
  //   try {
  //     const res = await axios.post("http://localhost:1111/register", data)
  //     console.log(res)
  //     if (res.status == "200") {
  //       toast.success("Registartion successfull! please login")
  //       setName("")
  //       setEmail("")
  //       setPass("")
  //       setDate("")
  //       setPhone("")
  //     }

  //   }
  //   catch (err) {
  //     console.log(err)
  //     if (err.response.data.keyPattern.email) {
  //       toast.warning("email already exist")
  //     }
  //     else {
  //       toast.warning("username already exist")
  //     }
  //   }
  // }

  // const validate = () =>{
  //   return name.length && email.length && pass.length && date.length && phone.length;
  // }


  // useEffect(()=>{
  //    const isValid = validate();
  //    setValid(isValid);
  // },[name,email,pass,phone,date])


  const handleSubmit = async(e) => {
    e.preventDefault();
    const user =  {
            fullname: name,
            email: email,
            password: pass,
            dateOfBirth: date,
            phone: phone
          }
          try{
            await axios.post("http://localhost:1111/register",user);
             navigate("/signin")
          }
          catch(err){
           
          }
  }



  return (
    <>
      <Header />

      <div style={{ marginTop: ".7rem" }}>
        <section className="vh-50 bg-image">
          <div className="mask d-flex align-items-center h-70 gradient-custom-3">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "10px", backgroundColor: "whitesmoke" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-2" style={{ fontSize: "30px" }}>Create an account</h2>

                      <form onSubmit={handleSubmit}>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form3Example1cg">Fullname</label>
                          <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" id="form3Example1cg" className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form3Example3cg" aria-placeholder='abc@example.com'>Email</label>
                          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="form3Example3cg" className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" id="form3Example4cg" className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form3Example4cg">Date of Birth</label>
                          <input value={date} onChange={(e) => { setDate(e.target.value) }} type="date" id="form3Example4cg" className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-2">
                          <label className="form-label" htmlFor="form3Example4cg">Phone</label>
                          <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="phone" id="form3Example4cg" className="form-control form-control-lg" />

                        </div>





                        <div className="d-flex justify-content-center">
                          <button type="submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>

                        <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="/signin"
                          className="fw-bold text-body"><u>Login here</u></a></p>

                      </form>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />

    </>
  )
}

export default Signup;