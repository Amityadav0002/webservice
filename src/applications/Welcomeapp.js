import React from 'react';
import { Link } from 'react-router-dom';
import { Myapplist } from './controls/Appcontrol';

function Welcomeapp() {
    return (
        <div className='container py-5'> 
            <div className='row mb-4'>
                <div className='col-12 text-center'>
                    <h1 className='display-4 fw-bold text-primary'>Welcome to Our Application Portal</h1>
                    
                    <hr className='my-4' /> 
                </div>
            </div>

            <div className='row justify-content-center g-4'> 

                {Myapplist.map((app) => {
                    return (
                        <div className='col-2'>
                            <Link
                                to={app.applink}
                                className='app-card d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark p-3 rounded-3 shadow-sm transition-hover'
                            >
                                <div className="app-icon mb-2"> 
                            
                                    {/* {app.icon ? app.icon : (app.image && <img src={app.image} alt={app.appName} className="img-fluid app-image" />)} */}
                                    {app.icon}
                                </div>
                                <h5 className="app-name text-center mt-2 mb-0 fw-semibold">{app.appName}</h5> 
                            </Link>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Welcomeapp;