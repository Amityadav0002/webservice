import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Userlogin() {

  const [eml, seteml] = useState("Amit@gmail.com");
  const [pass, setpass] = useState("123456")


  const updateeml = (data) => {
    seteml(data.target.value);
  };
  const updatepass = (pasd) => {
    setpass(pasd.target.value)
  }
   const mynav = useNavigate()
  const validationl = () => {
    if (eml === "" || pass === "") {

      toast.warning("your email and password is blank", { position: "top-left", theme: "dark", autoClose: 2000 });
    }
    else{
      toast.success("successfull");
      setTimeout(() => {
       mynav("/Mydashboard");
        
      },2000);
    }
  }


    return (

      <Fragment>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
            <h1 className="card-title text-center mb-4">Login Form</h1>

            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="usernameInput"
                name="username"
                value={eml}
                onInput={updateeml}

              />

              <ToastContainer />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                name="password"
                value={pass}
                onInput={updatepass}

              />


            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary w-50" onClick={validationl}>Login</button>

              <Link to="Usersignup" className="btn btn-secondary w-50 ms-2">Signup</Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }