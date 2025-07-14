import React, { Fragment } from 'react'
import Nav from './Nav'
import Header from '../../shares/Header'

export default function Mydashboard() {
  return (
    <Fragment>
    <Header></Header>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Nav></Nav>
        </div>
      </div>
    </div>
    
    </Fragment>
  )
}
