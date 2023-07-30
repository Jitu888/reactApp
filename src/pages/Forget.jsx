import React from 'react'

const Forget = () => {
  return (
    <>
    <div className="forget">
    <div className="card login-form" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"auto",height:"25rem"}}>
        <div className="card-body" >
            <h3 className="card-title text-center mb-5" style={{fontWeight:"900",fontSize: "30px"}}>Reset password</h3>
            
            <div className="card-text">
                <div className="mydiv" >
                    <label htmlFor="exampleInputEmail1">Enter your email address and we will send you a link to reset your password</label>
                </div>
                
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="" style={{marginLeft:"5px"}}>Email address</label>
                        <input type="email" className="form-control form-control-sm" placeholder="Enter your email address"/>
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block ">Send password reset email</button>&nbsp;
                    <a className="btn btn-danger" type="submit" href="/signin">Back to Login</a>
                </form>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Forget