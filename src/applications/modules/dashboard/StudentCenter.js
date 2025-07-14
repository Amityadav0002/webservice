import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { Mycardlist } from '../../controls/Cardcontrol';

export default function StudentCenter() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-center">
                <div className="d-flex align-items-center">
                    <FaChevronDown style={{ marginRight: '8px' }} />
                    <span className="navbar-brand mb-0 h1">Student Center</span>
                </div>
            </nav>
            <div className="container animate__animated animate__fadeInUp">
                <div className="row">
                    {Mycardlist.map((d) => {
                        return (

                            <div className="p-2 col-md-3 mb-2 col-ms-6 d-flex justify-content-center border">
                                <div>
                                    
                                        {d.icon}
                                        <div class="card-body bg-success">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                            <Link to={"Viewproduct/"+d.id} class="btn btn-primary">viewmore</Link>
                                        </div>
                                    </div>
                                
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}
