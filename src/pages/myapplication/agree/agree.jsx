import './agree.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Modal } from '@mui/material';
import upload from '../../images/Upload-icon.png';
import download from '../../images/doc_download.png';
import SignatureCanvas from 'react-signature-canvas'
import wallet from '../../images/wallet.png';
import card from '../../images/card-icons.png';
import Status from '../../images/Status icon.png'
import applepay from '../../images/ApplePay.png'
import check from '../../images/checks.png'
      

export default function Agreement() {
    
    const [contentList, setContentList] = useState([
        {
          id: 1,
          isVisible: true,
        },
      ]);
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        window.location.href = 'profiledetail';
      };

      const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div id="Income">
            <div className="Agree">
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
                            <div className="agreement_page">
                                <h2>general information</h2>
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
                                            <i class="fa fa-check" aria-hidden="true"></i>
                                        </div>
                                        <div className='loan_text'>
                                            <p>STEP 03</p>
                                            <h3>Loan Details</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='agree_image'>
                                            <i class="fa fa-check" aria-hidden="true"></i>
                                        </div>
                                        <div className='agree_text'>
                                            <p>STEP 04</p>
                                            <h3>Agreement & Service Fees</h3>
                                        </div>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit consectetur elit nibh faucibus morbi. Sed sit eget est lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi morbi sit </p>
                                <div className="download_agree">
                                    <Link> <img src={download} alt="" /> Download</Link> The Master Agreement
                                </div>
                            </div>
                        </div>
                        <div className="signpad">
                            <div className="signpad_inner">
                                <h2>Signature</h2>
                                <SignatureCanvas />
                            </div>
                            <h2>OR</h2>
                            {contentList.map((content) => (
                                content.isVisible && (
                                <div key={content.id} className="loan_doc1">
                                    <div className="loan_docs1">
                                    <input type="file" id={`doc${content.id}`} />
                                    <div>
                                        <label htmlFor={`doc${content.id}`}>
                                        <h2>Upload Document {content.id}</h2>
                                        <img src={upload} alt="" />
                                        <h3>
                                            Drag & drop files or <span>Browser</span>
                                        </h3>
                                        <p>
                                            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                                        </p>
                                        <div>UPLOAD FILES</div>
                                        </label>
                                    </div>

                                    </div>
                                </div>
                                 )
                            ))} 
                        </div>
                        <div class="service_container">
                            <div class="services_cont">
                                <h2>SERVICE FEES</h2>
                                <div class="service_fees">
                                    <ul class="service">
                                        <li>Convenance</li>
                                        <li>Broker Commission</li>
                                        <li>Dubai land department fee</li>
                                        <li>Mortgage Processing  </li>
                                        <li>Registration Fee</li>
                                        <li>Valuation</li>
                                    </ul>
                                    <ul class="service">
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                    </ul>
                                </div>
                                <div class="service_fees">
                                    <ul class="service">
                                        <li>Down Payment</li>
                                        <li>Total Extra</li>
                                    </ul>
                                    <ul class="service">
                                        <li><b>AED</b> 8,000</li>
                                        <li><b>AED</b> 8,000</li>
                                    </ul>
                                </div>
                                <div class="service_fees">
                                    <ul class="service">
                                        <li>Total Payment</li>
                                    </ul>
                                    <ul class="service">
                                        <li><b>AED</b> 8,000</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="payment_cont">
                                <h2>Payment methods</h2>
                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio"/>
                                        <div><img src={wallet} alt=""/></div>
                                        <p>wallet</p>
                                    </div>
                                    <p>12,076.63 AED</p>
                                </div>
                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio"/>
                                        <div><img src={card} alt=""/></div>
                                        <p>xxxx-4455</p>-
                                    </div>
                                    <input type="text" placeholder="CVV"/>
                                </div>
                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio"/>
                                        <div><img src={card} alt=""/></div>
                                        <p>xxxx-5672</p>
                                    </div>
                                    <span><img src={Status} alt=""/></span>
                                </div>
                                <div class="payment_sect">
                                    <div class="wallet">
                                        <input type="radio" name="pay_radio"/>
                                        <div><img src={applepay} alt=""/></div>
                                        <p>Apple Pay</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="general_input_sect button_sec">
                            <div class="input_sect previous_btn">
                                <Button onClick={handleScroll}>
                                    <Link to={'/loan'}>Previous</Link>
                                </Button>
                            </div>
                            <div class="input_sect submit_btn">
                                <Button onClick={handleOpen}>Submit & Next</Button>
                            </div>
                        </div>

                        <Modal open={open} >
                            <div className='success_submit'>
                                <div className="success_submit_inner">
                                    <div>
                                        <img src={check} alt="" />
                                    </div>
                                    <div className='success_submit_text'>
                                        <h2>Successfully Submitted</h2>
                                        <p>
                                            Your application is successfully submitted, you can track your application status from your dashboard.
                                        </p>
                                    </div>
                                    <div>
                                        <i onClick={handleClose} class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
} 