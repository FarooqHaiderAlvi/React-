import React from 'react'
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';


export default function DarkModeNavbar(props) {

    return (

        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-white `}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${(props.mode === 'light' ? 'black' : 'white')}`} href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link active text-${props.color}`} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link text-${props.color}`} to="/About">About</NavLink>
                        </li>
                       

                        
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault">{`${(props.mode === 'light' ? "Enable" : "Disable")}`}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}



// we write proptypes to verify that props are of the types that we mention here
// suppose color must be string, so if by mistake i sent number here
//then this will help to catch errors
// In summary, DarkModeNavbar.propTypes is a way to specify the expected types of props
DarkModeNavbar.propTypes = {
    mode: PropTypes.any,
    color: PropTypes.any,
    toggle: PropTypes.any
};

//this will be used when i donot pass any props
DarkModeNavbar.defaultProps = {
    mode: 'light',
    color: 'dark'
}