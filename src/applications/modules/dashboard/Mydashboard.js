import React, { Fragment } from 'react'
import Header from '../../shares/Header'
import Sidebar from '../../shares/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Mydashboard() {
  return (
    <Fragment>
    <Header></Header>
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-2 border'>
          <Sidebar></Sidebar>
        </div>
          <div className='col-md-10 border' style={{height:'90vh'}}>
          <Outlet></Outlet>
        </div>
        

      </div>
    </div>
    
    </Fragment>
  )
}
