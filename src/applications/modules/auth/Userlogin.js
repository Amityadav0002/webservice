import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Userlogin() {
  const [eml, seteml] = useState("Amit@gmail.com");
  const [pass, setpass] = useState("123456");

  const navigate = useNavigate();

  const updateeml = (e) => seteml(e.target.value);
  const updatepass = (e) => setpass(e.target.value);

  const validation = () => {
    if (eml.trim() === "" || pass.trim() === "") {
      toast.warning("Your email and password cannot be blank.", {
        position: "top-left",
        theme: "dark",
        autoClose: 2000
      });
    } else {
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 1500
      });
      setTimeout(() => {
        navigate("/Studentcenter");
      }, 1800);
    }
  };

  return (
    <Fragment>
      <div className="login-container ">
        <div className="card login-card shadow">
          <h2 className="text-center mb-4">🎓 Student Login</h2>

          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="usernameInput"
              placeholder="Enter your email"
              value={eml}
              onChange={updateeml}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter your password"
              value={pass}
              onChange={updatepass}
            />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary w-50 me-2" onClick={validation}>
              Login
            </button>
            <Link to="/Usersignup" className="btn btn-outline-secondary w-50">
              Signup
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Fragment>
  );
}
