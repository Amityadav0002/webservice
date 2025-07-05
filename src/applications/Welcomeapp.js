import React from 'react';
import { FcManager } from 'react-icons/fc';
import { GiWorld } from "react-icons/gi";
import { Link } from 'react-router-dom';

import { Myapplist } from './controls/Appcontrol';

function Mydashboard() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Welcome to Application</h1>
                    <hr />
                </div>
            </div>
            <div className='row'>

                {Myapplist.map((app) => {
                    return (
                        <div className='col-sm-2 text-center'>
                            <Link to={app.applink} className='border myapp bg-info shadow pt-5'>
                               { <img src={app.images} alt="World Wide Web"className="app-image" />}
                                
                                
                                <p>{app.applink}</p>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Mydashboard