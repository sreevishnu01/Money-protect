import './success.css';
import { Link } from "react-router-dom";
import plus from "../../images/plus.png"
import pin from "../../images/pin-02.png"
import trash from "../../images/trash-03.png"
import more from "../../images/more.png"
import check from "../../images/check2.png"
import xmark from "../../images/x Frame.png"
import download from "../../images/chevron-down-double.png"
import more2 from "../../images/more2.png"

export default function Success() {
    window.scrollTo(0, 0);
    
    return (
        <div id="Income">
            <div className="Success">
                <div className="income_dash">
                    <ul>
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link to={"/profiledetail"}> <h3>Profile Details</h3> </Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link to={"/idverification"}><h3>My Applications</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i> <Link><h3>Inbox</h3></Link></li>
                        
                        <li><i class="fa fa-circle" aria-hidden="true"></i><Link> <h3>Settings</h3></Link></li>
                    </ul>
                </div>
                <div className="income_verify">
                <div class="status_container">
                    <div class="status_sect">
                            <div class="status_heading">
                                <h2>My Applications</h2>
                                <div class="new-Appli">
                                    <div>
                                        <img src={plus} alt=""/>
                                    </div>
                                <p>New Application</p>
                                </div>
                            </div>
                            <div class="name_sect_par">
                                <div class="name_sect">
                                    <div class="remot">
                                        <div class="appli">
                                            <div class="top_row">
                                                <h3>Application Name </h3>
                                                <div class="review_set">
                                                    <div>
                                                    <img src={more2} alt=""/>
                                                    </div>
                                                    <p>Review pending</p>
                                                </div>
                                            </div>
                                            <div class="refer">
                                                <div class="reference">
                                                    <h6>Reference Number:</h6>
                                                    <h6>55566689027</h6>
                                                </div>
                                                <div class="reference">
                                                    <h6>Submission Date:</h6>
                                                    <h6>23/07/2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="del_icon">
                                            <div class="del">
                                                <img src={trash} alt=""/>
                                            </div>
                                            <div class="pin">
                                                <img src={pin} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="view_more">
                                        <h5>View Application Details</h5>
                                        <span>
                                            <img src={download} alt=""/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="name_sect_par">
                                <div class="name_sect">
                                    <div class="remot">
                                        <div class="appli">
                                            <div class="top_row">
                                                <h3>Application Name </h3>
                                                <div class="review_set">
                                                    <div>
                                                    <img src={xmark} alt=""/>
                                                    </div>
                                                    <p class="red_clr">Rejected</p>
                                                </div>
                                                <p class="gold_clr">View Rejection Reasons</p>
                                            </div>
                                            <div class="refer">
                                                <div class="reference">
                                                    <h6>Reference Number:</h6>
                                                    <h6>55566689027</h6>
                                                </div>
                                                <div class="reference">
                                                    <h6>Submission Date:</h6>
                                                    <h6>23/07/2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="del_icon">
                                            <div class="del">
                                                <img src={trash} alt=""/>
                                            </div>
                                            <div class="pin">
                                                <img src={pin} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="view_more">
                                        <h5>View Application Details</h5>
                                        <span>
                                            <img src={download} alt=""/>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="name_sect_par">
                                <div class="name_sect">
                                    <div class="remot">
                                        <div class="appli">
                                            <div class="top_row">
                                                <h3>Application Name </h3>
                                                <div class="review_set">
                                                    <div>
                                                    <img src={more} alt=""/>
                                                    </div>
                                                    <p class="blue_clr">Extra requirement</p>
                                                </div>
                                                <p class="gold_clr">View & Upload</p>
                                            </div>
                                            <div class="refer">
                                                <div class="reference">
                                                    <h6>Reference Number:</h6>
                                                    <h6>55566689027</h6>
                                                </div>
                                                <div class="reference">
                                                    <h6>Submission Date:</h6>
                                                    <h6>23/07/2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="del_icon">
                                            <div class="del">
                                                <img src={trash} alt=""/>
                                            </div>
                                            <div class="pin">
                                                <img src={pin} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="view_more">
                                        <h5>View Application Details</h5>
                                        <span>
                                            <img src={download} alt=""/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                                
                            <div class="name_sect_par">
                                <div class="name_sect">
                                    <div class="remot">
                                        <div class="appli">
                                            <div class="top_row">
                                                <h3>Application Name </h3>
                                                <div class="review_set">
                                                    <div>
                                                    <img src={check} alt=""/>
                                                    </div>
                                                    <p class="green_clr">Approved</p>
                                                </div>
                                            </div>
                                            <div class="refer">
                                                <div class="reference">
                                                    <h6>Reference Number:</h6>
                                                    <h6>55566689027</h6>
                                                </div>
                                                <div class="reference">
                                                    <h6>Submission Date:</h6>
                                                    <h6>23/07/2023</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="del_icon">
                                            <div class="del">
                                                <img src={trash} alt=""/>
                                            </div>
                                            <div class="pin">
                                                <img src={pin} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="view_more">
                                        <h5>View Application Details</h5>
                                        <span>
                                            <img src={download} alt=""/>
                                        </span>
                                    </div>
                                    </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
} 