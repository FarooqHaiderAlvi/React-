import React from 'react'

import pucitLogo from '../Images/pucitLogo.png'
import fim2 from '../Images/fim2.jpeg'
import fim3 from '../Images/fim3.jpeg'
import fim1 from '../Images/fim1.jpeg'
import fcitEligibility from '../Images/fcitEligibility.png'


import '../UniPage.css'
export default function FcitUni() {
    let imgStyle = {
        width: "350px",
        height: "200px"
    }
    return (

        <div className="container-fluid back" style={{ fontFamily: "MyCustomFont" }}>

            <div className="container pt-4">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={pucitLogo} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


            <div className="container pt-4">
                <div className="row justify-content-evenly gy-4">
                    <div className="col-auto">
                        <img src={fim1} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={fim2} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={fim3} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <div className="row">
                    <div className="col">
                        <h5 className="text-center">Faculty of Computing & Information Technology was established on
                            January, 2021. Faculty comprised of Department of Computer Science, Department of Software
                            Engineer, Department of Information Technology and Department of Data Science. Before that
                            it was Punjab University of College of Information (PUCIT) working under Faculty of Science.
                            The College took a modest start with the Center for Computer Science, established
                            in the Center for Solid State Physics, Quaid-e-Azam (New) Campus, Lahore, in 1988.
                            The first degree program offered by the Center was a one-year Post Graduate Diploma (PGD)
                            in Computer Science. 24 students were registered in this program during the first year.
                            The Center was upgraded to Department of Computer Science in 1991.
                            The Department started 2-year (4-semesters) PGD
                            leading to MSc in Computer Science under the annual system.
                            In its first batch, the 15 students were admitted to this program.
                            The number doubled the following year.</h5>
                    </div>
                </div>
            </div>




            <div className="container mb-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">Fee Structure</h2>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='text-wrap text-truncate fw-bold'>

                            BS (Computer Science,Software Engineering &
                            Information Technology, Data Science)
                            Morning
                        </p>
                    </div>
                </div>

                <div className="row my-5 border border-2 border-dark bg-white">
                    <div className="col-6 text-center  border-2 border-dark border-bottom">Semester</div>
                    <div className="col-6 text-center border-2 border-dark border-bottom">Fee</div>
                    <div className="col-6 text-center border-0 border-dark">Per Semester</div>
                    <div className="col-6 text-center border border-0 border-start border-dark fw-bold">(40000-500000) PKR</div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='text-wrap text-truncate fw-bold'>

                            BS (Computer Science,Software Engineering &
                            Information Technology, Data Science)
                            Afternoon
                        </p>
                    </div>
                </div>

                <div className="row my-5 border border-2 border-dark bg-white">
                    <div className="col-6 text-center  border-2 border-dark border-bottom">Semester</div>
                    <div className="col-6 text-center border-2 border-dark border-bottom">Fee</div>
                    <div className="col-6 text-center border-0 border-dark">Per Semester</div>
                    <div className="col-6 text-center border border-0 border-start border-dark fw-bold">(50000-600000) PKR</div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">BS Required Documents</h2>

                    </div>
                </div>
            </div>




            <div className="container-fluid">


                <div className="row mt-1 mt-3 ">
                    <div className="col-auto ">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Matric
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto ">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Intermediate
                            </div>
                        </div>
                    </div>

                </div>


                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Undertaking Form (Take a Print out of this form on Rs 50/- Stamp paper, duly attested by Magistrate /  Grade-1 civil judge)
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                NOC for candidates of all boards other then Lahore.Rawalpindi, Sargodha,Faislabad, Gujranwala, and Federal Board. (Aspirant students are advised to start the process of taking NOC)
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Medical Certificate ( on letter head of Registered medical Physician)
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Please bring your Signed Original Admission Form for Submission.
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                4 Pictures with blue background
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <div className="col-auto">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                Hafiz Quran Certificate (if candidate is Hafiz-e-Quran)
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container mb-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">Eligibility Criteria</h2>

                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row  ">
                    <div className="col-12 d-flex justify-content-center">

                        <img src={fcitEligibility} className="img-fluid" style={{ height: '700px', width: '700px' }} alt="" />

                    </div>
                </div>
            </div>







            <div className="container mt-5 my-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">Merti Calculator</h2>

                    </div>
                </div>
            </div>


            <div className="container pb-5">
                <div className="row my-2">
                    <div className="offset-md-1 col-3 ">Your Intermediate Makrs:</div>
                    <div className="col-md-1 col-2  mx-5 merit-border bg-white text-center">990</div>
                    <div className="col-2  text-center">Out of 1100</div>
                </div>
                <div className="row  my-2">
                    <div className="offset-md-1 col-3 ">Your Matric Marks:</div>
                    <div className="col-md-1 col-2 mx-5 merit-border bg-white text-center">990</div>
                    <div className="col-2  text-center">Out of 1100</div>
                </div>
                <div className="row  mb-5">
                    <div className="offset-md-1 col-3 ">Average of Quizzes:</div>
                    <div className="col-md-1 col-2  mx-5 merit-border bg-white text-center">78</div>
                    <div className="col-2  text-center">Out of 100</div>
                </div>

                <div className="row align-items-center">
                    <div className="offset-md-1 col-4 col-md-auto bg-danger">
                        <p className="text-wrap text-truncate">[((990/1100)*50%)+((78/100)*50%)]</p>
                    </div>
                    <div className="col-md-1 col-2 mx-3   text-center">
                        {/* <svg style="color: rgb(0, 0, 0);" xmlns="http://www.w3.org/2000/svg" width="46" height="46"
                        fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                            fill="#000000"></path>
                    </svg> */}
                    </div>
                    <div className="col-md-1 col-2 d-flex align-items-center justify-content-center text-center oval-border">84%</div>
                    <div className="col-2 ">
                        <p className="text-center">is Your Merit</p>
                    </div>
                </div>

            </div>





        </div>



    )
}
