import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Employeelist() {

  const [mydata, setmydate] = useState([])

  const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      console.log(d.data.products);
      setmydate(d.data.products);
    })
  }

  useEffect(()=>{
    myapi();
  },[])




  return (
    // <div>Employeelist <button type='button' onClick={myapi}> get api</button></div>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <button type='button' className='btn btn-success' onClick={myapi}> get api</button>
        </div>
        {mydata.map((c)=>{
          return(
            <div className='col-md-3' key={c.id}>
          <div className="card">
            <img src={c.thumbnail} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link to={"Viewproduct/"+c.id} className="btn btn-primary">view Details</Link>
              </div>
          </div>
        </div>
          )
        })}

        

      </div>
    </div>

  )
}

export default Employeelist