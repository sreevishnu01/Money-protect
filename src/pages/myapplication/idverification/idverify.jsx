import './idverify.css';

import { Link } from 'react-router-dom';
import upload from '../../images/upload.png';
import scan from '../../images/scan.png';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function Idverification() {

    // const [scroll, useScroll] = useState("");

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id="idverfication">
            <div className="Idverification">
                <div className="verify_dash">
                    <ul>
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link to={"/profiledetail"}> <h3>Profile Details</h3> </Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link to={"/idverification"}><h3>My Applications</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link><h3>Inbox</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link> <h3>Settings</h3></Link></li>
                    </ul>
                </div>
                <div class="container">
                    <h1>New Application</h1>
                    <ul class="Verifications">
                        <li>
                            <div className='verify_image'>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div className='verify_text'>
                                <p>STEP 01</p>
                                <h3>ID Verification</h3>
                            </div>
                        </li>
                        <li>
                            <div className='income_image'>
                                {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                            </div>
                            <div className='income_text'>
                                <p>STEP 02</p>
                                <h3>Income</h3>
                            </div>
                        </li>
                        <li>
                            <div className='loan_image'>
                                {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                            </div>
                            <div className='loan_text'>
                                <p>STEP 03</p>
                                <h3>Loan Details</h3>
                            </div>
                        </li>
                        <li>
                            <div className='agree_image'>
                                {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                            </div>
                            <div className='agree_text'>
                                <p>STEP 04</p>
                                <h3>Agreement & Service Fees</h3>
                            </div>
                        </li>
                    </ul>
                    <div class="income verify_chart">
                        <div className='income_title idverify' >
                            <h3>In order to fitch your information</h3>
                                <div className='verify_scan'>
                                    <div>
                                        <input type="file" name="" id="scan" />
                                        <label htmlFor="scan"><img src={scan} alt="" /> <h4><span>Scan</span> Your ID</h4></label>
                                    </div>
                                </div>

                                <h3>OR</h3>

                                <div className="verify_upload">
                                    <div>
                                        <input type="file" id='upload'/>
                                        <label htmlFor="upload"><img src={upload} alt="" /> <h4><span>Upload</span> Your ID</h4></label>
                                    </div>
                                </div>
                        </div>
                        
                    </div>


                    <div class="chart">
                        <div class="employment-status">
                            <label class="inbild-head">First Name</label>
                            <div class="title">
                                <input type="email" placeholder="Peter" class="first-input" />
                            </div>
                        </div>
                        <div class="job-title">
                            <label class="inbild-head">last Name</label>
                            <div class="title">
                                <input type="text" placeholder="DSouza" class="first-input" />
                            </div>
                        </div>
                        <div class="employment-status">
                            <label class="inbild-head">Residency Status <sub></sub> </label>
                            <div class="title">
                                <select>
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                </select>
                            </div>
                        </div>

                        <div class="date-joining">
                            <label class="inbild-head">Emirates ID Number</label>
                            <div class="input-parent">

                                <input placeholder="12345678" type="number" class="sec-input" />
                            </div>
                        </div>
                        <div class="job-title">
                            <label class="inbild-head">Nationality</label>
                            <div class="title">
                                <input type="text" placeholder="MyEmirates.png" class="first-input" />
                            </div>
                        </div>
                        
                        <div class="employment-status">
                            <label class="inbild-head">Phone Number</label>
                            <div class="title">
                                <input type="email" placeholder="(123) 456 - 7890 " class="first-input" />
                            </div>
                        </div>
                        <div class="job-title">
                            <label class="inbild-head">Date of Birth</label>
                            <div class="title">
                                <input type="date" placeholder="15-January-2026" class="first-input" />
                            </div>
                        </div>
                        <div class="date-joining">
                            <label class="inbild-head">Email</label>
                            <div class="input-parent">
                                <input placeholder="abc@xyz.com" type="email" class="sec-input" />
                            </div>
                        </div>
                    </div>



                    <div class="check-box igree">
                        <input type="checkbox" />
                        <p>By continuing you accept our <a href="">Terms of Service</a>. Also learn how we process your data in our <a href="">Privacy Policy</a> and <a href="">Cookies policy</a>.</p>
                    </div>
                    <div class="btn-parent">
                        
                    </div>
                    <div class="input_sect submit_btn">
                        <Button onClick={handleScroll}>
                            <Link to={"/income"}>Submit & Next</Link>
                        </Button>           
                    </div>
                </div>
            </div>
        </div>
    )
} 