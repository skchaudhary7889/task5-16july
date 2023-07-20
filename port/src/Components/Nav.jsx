import React from 'react'
import {NavLink} from "react-router-dom";



const Nav = () => {
  return (
  <>


  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
     
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        {/* Navbar brand */}
       
        {/* Left links */}
        <ul className="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item me-5"> 
            <NavLink className="nav-link active" to="/">
            Home
        </NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/about">
              About
        </NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/todo">
            To-Do
        </NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/product">
            AddCart
        </NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/contact">
            Contact
        </NavLink>
          </li>
          <li className="nav-item me-5">
            <NavLink className="nav-link" to="/api">
            News
        </NavLink>
          </li>
        </ul>
        {/* Left links */}
      </div>
    
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>


  )
}

export default Nav