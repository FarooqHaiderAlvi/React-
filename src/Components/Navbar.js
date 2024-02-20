import { useState } from "react"
import React  from 'react'

export default function Navbar() {
    const [mode, setMode] = useState("light");
    const [color, setColor] = useState("dark");
    
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark');
            setColor('light');
        }
        else{
            setMode('light');
            setColor('dark');
        }
    }

    return (
        <>

            <nav className={`navbar navbar-expand-lg bg-${mode} text-${color}`}>
                <div className="container-fluid text-white">
                    <a className={`navbar-brand text-${color}`} href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${color}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${color}`} href="/">Link</a>
                            </li>
                          
                        </ul>
                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-light`} htmlFor="flexSwitchCheckDefault">{`${(props.mode === 'light' ? "Enable" : "Disable")}`}</label>
                        </div> */}

                        <div className="form-check form-switch">
                            <input className="form-check-input "  onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className={`form-check-label text-${color}`} htmlFor="flexSwitchCheckChecked">{`${mode==='light'? "Enable" :"Disable"}`} Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
