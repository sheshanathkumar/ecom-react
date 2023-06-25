import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import { productdata } from '../asset/productdata'
import "../component/style.css"
import { Fragment } from 'react'

export default function Dashboard() {
  const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
  return (

    <>
      <Navbar />
      <div className='container' >

        <div className="container">
          <div className="row row-cols-3">

            {productdata.map((p1) => {
              return (
              <div className='col my-3' key={p1.id} >
                <div className="card" style={{ "width": "100%" }} >
                  <img src={p1.image} className="card-img-top" alt="..." style={ {"border" : "1px solid #31cbb89c"  } } />
                  <div className="card-body" style={ {"backgroundColor" : "#31cbb89c"  } }>
                    <h5 className="card-title"> {p1.shortName} </h5>
                    <p className="card-text"> {p1.shortDescr} </p>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item" style={ {"backgroundColor" : "#31cbb89c"  } }>{p1.specification.processorInfo}</li>
                    <li className="list-group-item" style={ {"backgroundColor" : "#31cbb89c", display:"flex" } }> 
                    {p1.specification.size} {space}
                    {p1.colour.map ( (x) => {
                      return (
                        // <span>{x}{' '}</span>
                        <div className='color-box mx-1 my-1' style={ {"backgroundColor" : `${x}` } }   ></div> 
                        
                      )})}
                    </li>
                    <li className="list-group-item" style={ {"backgroundColor" : "#31cbb89c"  } }> {p1.specification.osInfo} </li>
                  </ul>
                </div>
              </div>
            )})}


          </div>
        </div>

      </div>



    </>


  )
}
