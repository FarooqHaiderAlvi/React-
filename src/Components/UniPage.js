import React from 'react'
import fim1 from '../Images/fim1.jpeg'
import fim2 from '../Images/fim2.jpeg'
import fim3 from '../Images/fim3.jpeg'
import fast from '../Images/fast.png'
import '../UniPage.css'
export default function UniPage() {
    let imgStyle = {
        width: "350px",
        height: "200px"
    }
    return (

        <div className="container-fluid back" style={{ fontFamily: "MyCustomFont" }}>

            <div className="container pt-4">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={fast} className="img-fluid" alt="" />
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
                        <h5 className="text-center">Founded as a Federally Chartered University in July 2000, the National
                            University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for
                            quality and impact of its students in the development of local software and other industries.
                            The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot
                            Faisalabad. These campuses provide world className educational environment and recreational
                            facilities to about over 11,000 students, around one quarter are female and over 500 skilled
                            faculty members.
                            Research wings of the university are well recognized, nationally and internationally. They are
                            embarked upon cutting edge research having direct impact on the social, economic and
                            technological needs of Pakistan. Our vision is to become a globally recognized research
                            university of Pakistan within the next decade.</h5>
                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">Admission Schedule</h2>

                    </div>
                </div>
            </div>




            <div className="container  m-auto">
                <table className="table table-bordered table-striped table-hover">

                    <thead>
                        <tr className="table-head">

                            <th scope="col " className="text-center">Admission Schedule 2023</th>
                            <th scope="col" className="text-center">BBA & BS</th>
                            <th scope="col" className="text-center">MBA , MS & PHD</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>

                            <td className="">Admission Application Submission</td>
                            <td>jun 3- july 15</td>
                            <td>july 15</td>
                        </tr>
                        <tr>

                            <td>Admission Test</td>
                            <td>july 15-22</td>
                            <td>jun 25</td>
                        </tr>
                        <tr>

                            <td>Declaration of Selected Candidates</td>
                            <td>july 20</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>

                            <td>Interviews</td>
                            <td>-</td>
                            <td>Aug 1-12</td>
                        </tr>
                        <tr>

                            <td>Admission Formalities</td>
                            <td>July15-22</td>
                            <td>july 25</td>
                        </tr>
                        <tr>

                            <td>Commencement of classNamees</td>
                            <td>Aug 25</td>
                            <td>Aug 25</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container mb-3">
                <div className="row">
                    <div className="col">

                        <h2 className="text-center pb-1 borders ">Fee Structure</h2>

                    </div>
                </div>
            </div>


            {/* <ul className="">
                <li className="main-list">

                </li>
                <li className="main-list">A refundable security of Rs 20,000/- is also payable on the of admission</li>
                <li className="main-list">University shall collect advance tax from a person not appearing
                    on the active taxpayers list (ATL) at 5% on the entire amount of fee paid,
                    provided that annual fee paid exceeds Rs.2,00,000/-
                </li>
                <li className="main-list">BS Degree contains 135 Total Credit
                    Hours= 135*8500 = Rs 11,74,500/- and per semester fee comes out approx Rs 1,50,000/-
                        after adding funds and Miscellaneous Fees </li>
            </ul> */}

            <div className="container-fluid">
                <div className="row  align-items-center">
                    <div className="col-auto">

                        <span className="dot"></span>
                    </div>

                    <div className="col-5 ">
                        <div className="row" >
                            <div className="col-6 d-flex align-items-center bg-warning justify-content-center ">
                                <p className="line-height text-center my-1 fw-bold">Program</p>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-center bg-warning ">
                                <p className="text-center my-1">FEE</p>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-6">BBA BS</div>
                            <div className="col-5 border-start">Rs. 8500</div>
                        </div>
                    </div>

                    <div className="col-5 ">
                        <i className="fa fa-arrow-left pe-3" style={{fontSize:'24px'}}></i>
                        8500/- per credit hour
                    </div>
                </div>

                <div className="row mt-1 mt-3 ">
                    <div className="col-auto ">
                        <span className="dot"></span>
                    </div>
                    <div className="col-10 col-md-11">
                        <div className="row">
                            <div className="col-auto">
                                A refundable security
                                deposit of Rs. <span className="fw-bold">20000/-</span>
                                is also payable
                                at the time of admission
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
                                BS Degree contains 135 Total Credit
                                Hours= 135*8500 = <span>Rs 11,74,500/-</span> and per semester fee comes out approx Rs 1,50,000/-
                                    after adding funds and Miscellaneous Fees
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
                                BS Degree contains 135 Total Credit
                                Hours= 135*8500 = Rs 11,74,500/- and per semester fee comes out approx Rs 1,50,000/-
                                after adding funds and Miscellaneous Fees
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



            <ul className="circle">

                <li className=""><span className="fw-bold">BS Engineering</span>
                    <ul>Eligibility
                        <li>At least 60% makrs in SSC (Matric) or an equivalent examination
                            (such as O-levels) And</li>
                        <li>Should have studied for HSSC or an equivalent qualification, for atleast
                            two years AND</li>
                        <li>At least 60% marks in the Pre-Engineering or an equivalent examination
                        </li>
                    </ul>
                    <ul>Selection Criteria
                        <li>50% weight to higher percent score of SSC OR HSSC (or and equivalent exam) AND</li>
                        <li>50% weight to marks obtained in Admission Test</li>

                    </ul>
                </li>
                <li className=""><span className="fw-bold">BS (Computer Programs)</span>
                    <ul>Eligibility
                        <li>At least 60% makrs in SSC (Matric) or an equivalent examination
                            (such as O-levels) And</li>
                        <li>Should have studied for HSSC or an equivalent qualification, for atleast
                            two years AND</li>
                        <li>At least 60% marks in the Pre-Engineering or an equivalent examination
                        </li>
                    </ul>
                    <ul>Selection Criteria
                        <li>50% weight to higher percent score of SSC OR HSSC (or and equivalent exam) AND</li>
                        <li>50% weight to marks obtained in Admission Test</li>

                    </ul>
                    <ul>Candidates having taken NTS-NAT IE or NAT ICS exam
                        <li>Cut-off marks in the NTS-NAT IE exam to be determined by the University</li>

                    </ul>
                </li>
            </ul>






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
