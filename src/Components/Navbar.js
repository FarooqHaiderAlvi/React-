import React from 'react'
import '../App.css'

export default function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container-fluid">
      <a className="text-wrap text-break fw-bold" href="#" style={{fontSize:"20px"}}>Self Assessment and Career Counselling</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link">About Us</a>
            </li>
          </ul>
          <div className='btn'>
            <button className='noStyle'>login /</button>
            <button className='noStyle'>SignUp</button>
          </div>
        </div>
      </div>
    </nav>

  );
}
