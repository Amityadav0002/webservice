import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './applications/css/global.css';
import Welcomeapp from './applications/Welcomeapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlogin from './applications/modules/auth/Userlogin';
import Usersignup from './applications/modules/auth/Usersignup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
         <Route path='' element={<Welcomeapp/>}/>
         <Route path='Userlogin' element={<Userlogin/>}/>
         <Route path='Usersignup'element={<Usersignup/>}/>        
      </Routes>
  
  </BrowserRouter>


  </React.StrictMode>
);

