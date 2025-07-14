import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './applications/css/global.css';
import 'animate.css';

import StudentCenter from './applications/modules/dashboard/StudentCenter';

import Welcomeapp from './applications/Welcomeapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlogin from './applications/modules/auth/Userlogin';
import Mydashboard from './applications/modules/dashboard/Mydashboard';
import Error from './applications/shares/Error';
import'./applications/css/Header.css';
import Detailpage from './applications/modules/dashboard/Detailpage';
import Viewproduct from './applications/modules/dashboard/Viewproduct';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
         <Route path='' element={<Mydashboard/>}/>
         <Route path='Userlogin'element={<Userlogin/>}/> 
         <Route path='StudentCenter'element={<StudentCenter/>}/>
         <Route path='Studentcenter/Viewproduct/:id'element={<Viewproduct/>}/>
         
         <Route path='Welcomeapp' element={<Welcomeapp/>}/>
         <Route path='Welcomeapp/Detailpage' element={<Detailpage/>}/>
         <Route path='Welcomeapp/Detailpage/Viewproduct/:id'element={<Viewproduct/>}/>
      
         
         <Route path="/usersignup/Userlogin" element={<Userlogin />} />
         <Route path="Mydashboard" element={<Mydashboard/>}/> 
         <Route path="*"element={<Error/>}/>      
      </Routes>
  
  </BrowserRouter>


  </React.StrictMode>
);

