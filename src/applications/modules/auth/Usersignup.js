import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Usersignup() {
   

    const { register, handleSubmit }= useForm();
    const mysignup=(s)=>{
        console.log(s);
    }


  return (
     <form onSubmit={handleSubmit(mysignup)}>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-lg rounded-4" style={{ maxWidth: '450px', width: '100%', border: 'none' }}>
        <h1 className="card-title text-center mb-5 bg-primary text-white rounded-top p-3 fs-3 fw-bold">
          Create Your Account
        </h1>
        
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstNameInput" className="form-label fw-semibold">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                name="firstName"
               {...register("firstName", { required: "first name required is required" })}
                
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastNameInput" className="form-label fw-semibold">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                name="lastName"
                 {...register("lastName", { required: "lastname is required" })}
                
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
             {...register("email", { required: "email is required" })}
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contactInput" className="form-label fw-semibold">Contact Number</label>
            <input
              type="text" 
              className="form-control"
              id="contactInput"
              name="contact"
               {...register("contact", { required: "contact is required" })}
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
         {...register("password", { required: "password is required" })}
              
            />
          </div>

          <div className="mb-4"> 
            <label htmlFor="rePasswordInput" className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="rePasswordInput"
              name="rePassword"
               {...register("rePassword", { required: "repassword is required" })}
            />
          </div>

          <div className="d-grid gap-2"> 
            <button type="submit" className="btn btn-primary btn-lg fw-bold">Sign Up</button>
            <p className="text-center mt-3 mb-0">
              Already have an account? <Link to="Userlogin" className="text-primary fw-bold text-decoration-none">Log In</Link>
            </p>
          </div>
        
      </div>
    </div>
    </form>
    
  );
}