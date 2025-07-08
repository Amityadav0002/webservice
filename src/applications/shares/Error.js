import React, { Fragment } from 'react'

export default function Error() {
  return (
    <Fragment>
       <div className='container-fluid bg-danger' style={{height:'90vh'}}>
        <div className='row'>
            <div className='col mt-5 p-3'>
                <h1 className='text-center'>404</h1>
                <p className='text-center'>Page not found</p>
            </div>
        </div>
       </div>
    </Fragment>
  )
}
