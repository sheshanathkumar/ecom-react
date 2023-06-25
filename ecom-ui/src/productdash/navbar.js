import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg " style={ {"backdropFilter" : "blur(10px)"  } }>
          <div className="container-fluid">
            <Link className="navbar-brand" to="#"> E-Kart </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">ALL</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">LAPTOP</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">MOBILE</Link>
                </li>
              </ul>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
              
            </form>
            <button className="btn btn-info mx-2" type="submit">Log out</button>
          </div>
        </nav>
  )
}
