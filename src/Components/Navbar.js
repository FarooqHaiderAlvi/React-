import React from 'react'
import '../App.css'

export default function Navbar(props) {
 
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="text-wrap" href="#" style={{fontSize:"20px"}}>Self Assessment and Career Counselling</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="#">
                  About Us
                </a> 
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Contact Us</a>
              </li>
            </ul>
            <div>
              <button className='btn'>login/SignUp</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  
  
  );
}
