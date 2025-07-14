import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Mycardlist } from '../../controls/Cardcontrol'

function Viewproduct() {
    const { id } = useParams()
    const [studentData, setStudentData] = useState({})

    useEffect(() => {
        const data = Mycardlist.find(student => student.id === parseInt(id))
        setStudentData(data || {})
    }, [id])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={studentData.thumbnail} alt="thumbnail" className="img-fluid" />
                </div>
                <div className='col-md-8'>
                    <Link to="/Studentcenter" className='btn btn-success mb-3'>Back</Link>
                    <p className='h1'>{studentData.cardName}</p>
                    <p className='h4'>{studentData.icon}</p>
                    <p className='h5'>{studentData.icon}</p>
                    <p className='h5'>{studentData.address}</p>
                    <p>{studentData.description}</p>
                     
                </div>
            </div>
        </div>
    )
}

export default Viewproduct
