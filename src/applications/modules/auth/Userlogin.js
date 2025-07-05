import React from 'react';
import { Link } from 'react-router-dom';
export default function Userlogin() {
  return (
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="card-title text-center mb-4">Login Form</h1>
        <form> 
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="usernameInput" 
              name="username" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="passwordInput" 
              name="password" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-50 pl=2">Login</button>
          <Link to="Usersignup" className="btn btn-primary w-50">signup</Link>
        </form>
      </div>
    </div>
  );
}