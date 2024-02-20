import React, { useState } from 'react'


export default function About() {
    const [mystyle, setMYStyle] = useState({
        color: 'black',

        border: '1px solid white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const switchMode = () => {

        if (mystyle.color == 'black') {
            setMYStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else {
            setMYStyle({
                color: 'black',
                //  backgroundColor:'black',
                border: '1px solid white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <div className="container mt-3" style={mystyle}>
            <div className="accordion" id="accordionExample">
                <div className="card" style={mystyle}>
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button style={mystyle} className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim .
                        </div>
                    </div>
                </div>
                <div className="card" style={mystyle}>
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button style={mystyle} className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit,
                        </div>
                    </div>
                    <div className="card" style={mystyle}>
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button style={mystyle} className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit,     </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button onClick={switchMode} className='btn btn-primary my-3'>{btnText}</button>
                </div>
            </div>
        </div>
    )
}
