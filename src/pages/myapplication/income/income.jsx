import './income.css';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';



export default function Income() {
    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id="Income">
            <div className="Income">
                <div className="income_dash">
                    <ul>
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link to={"/profiledetail"}> <h3>Profile Details</h3> </Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link to={"/idverification"}><h3>My Applications</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link><h3>Inbox</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link> <h3>Settings</h3></Link></li>
                    </ul>
                </div>
                <div className="income_verify">
                    <div class="general_container">
                        <div class="general_info">
                            <h1>general information</h1>
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
                                        <i class="fa fa-check" aria-hidden="true"></i>
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
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>company <sup>*</sup> </p>
                                    <input type="text" placeholder="nurtur spark digital"/>
                                </div>
                                <div class="input_sect">
                                    <p>job title<sup>*</sup> </p>
                                    <input type="text" placeholder="doctor phd"/>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>industry <sup>*</sup></p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="ERP solutions"/>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="input_sect">
                                    <p>employment status<sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="employee at a company"/>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>joining date <sup>*</sup> </p>
                                    <input type="date"/>
                                </div>
                            </div>
                        </div>
                        <div class="general_info">
                            <h1>civil status</h1>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>merital status <sup>*</sup> </p>
                                <div class="input_icons">
                                        <input type="text" placeholder="married"/>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>
                                </div>
                                <div class="input_sect">
                                    <p>spouse name<sup>*</sup> </p>
                                    <input type="text" placeholder="sai vishnu"/>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Number of Dependents <sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="0"/>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="general_info">
                            <h1>Income</h1>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Monthly Income<sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text"  placeholder=" AED 30,000 " />
                                    </div>
                                </div>
                                <div class="input_sect">
                                    <p>Monthly Expense<sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text"  placeholder=" AED 15,000 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="general_info">
                            <h1>Beneficiary Details</h1>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <div class="radio_sect">
                                        <input type="radio" name="checked" id="radio"/>
                                        <label for="radio">
                                            <h4>Individual Client</h4>
                                            <p>Lorem opsmep bsnjsui, snm</p>
                                        </label>
                                    </div>
                                </div>
                                <div class="input_sect">
                                    <div class="radio_sect">
                                        <input type="radio" name="checked" id="radio"/>
                                        <label for="radio">
                                            <h4>Corporate Client</h4>
                                            <p>Lorem opsmep bsnjsui, snm</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Trade License<sup>*</sup> </p>
                                    <input type="text" placeholder="122332232322323"/>
                                </div>
                                <div class="input_sect">
                                    <p>Trade Expiry Date<sup>*</sup> </p>
                                    <input type="text" placeholder="15/01/2026"/>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Work Email<sup>*</sup> </p>
                                    <input type="text" placeholder="garyp@example.com"/>
                                </div>
                                <div class="input_sect">
                                    <p>Work Phone Numbe<sup>*</sup> </p>
                                    <input type="text" placeholder="(123) 456 - 7890"/>
                                </div>
                            </div>
                            <div class="general_input_sect button_sec">
                                <div class="input_sect previous_btn">
                                    <Button onClick={handleScroll}><Link to={"/idverification"}>Previous</Link></Button>
                                </div>
                                <div class="input_sect submit_btn">
                                    <Button onClick={handleScroll}>
                                        <Link to={'/loan'}>Submit & Next</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 