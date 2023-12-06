import './loan.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import upload from '../../images/Upload-icon.png';
import circle from '../../images/add-circle.png';


export default function Loan() {
    const [contentList, setContentList] = useState([
        {
          id: 1,
          isVisible: true,
        },
      ]);
    
      const addContent = () => {
        if (contentList.length < 3) {
          const newId = contentList.length + 1;
          setContentList((prevContentList) => [
            ...prevContentList,
            { id: newId, isVisible: true },
          ]);
        }
      };

      const removeContent = (id) => {
        if (contentList.length > 1) {
             const newArray = [...contentList];
            newArray.pop()
            setContentList(newArray)
        }
      };
      const handleScroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div id="Income ">
            <div className=" Loan">
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
                                        <i class="fa fa-check" aria-hidden="true"></i>
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
                                    <p>What Product do you apply for?<sup>*</sup> </p>
                                    <input type="text" placeholder="Mortgage EMI Sleeping Period"/>
                                </div>
                                <div class="input_sect">
                                    <p>Sleeping Period Duration <sup>*</sup> </p>
                                    <input type="text" placeholder="11 Months"/>
                                </div>
                            </div>
                        </div>
                        <div class="general_info">
                            <h1>Current Loan & Mortgage Details</h1>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Purchase Price <sup>*</sup> </p>
                                <div class="input_icons">
                                        <input type="text" placeholder="Enter the Number"/>
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                </div>
                                </div>
                                <div class="input_sect">
                                    <p>Mortgage Amount<sup>*</sup> </p>
                                    <input type="text" placeholder="Enter the Number"/>
                                </div>
                            </div>
                            <div class="general_input_sect">
                                <div class="input_sect">
                                    <p>Duration of Loan (in months)<sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="24"/>
                                    </div>
                                </div>
                                <div class="input_sect">
                                    <p>Loan Amount <sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="Enter the Number"/>
                                    </div>
                                </div>
                                <div class="input_sect">
                                    <p>Loan Paid Till Date<sup>*</sup> </p>
                                    <div class="input_icons">
                                        <input type="text" placeholder="15/01/2026"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="loan_docs" id="loan_docs">
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
                        <div className="added igree" >
                            <div className="added_button" onClick={addContent}>
                                <div><img src={circle} alt=""/></div>
                                <h2>Add</h2>
                            </div>
                            {contentList.length > 1 && (
                                <div className="remove_button">
                                    <Button onClick={() => removeContent(contentList[contentList.length - 1].id)}>Remove</Button>
                                </div> 
                            )}
                        </div>
                        <div class="general_input_sect button_sec">
                            <div class="input_sect previous_btn">
                                <Button onClick={handleScroll}>
                                    <Link to={'/income'}>Previous</Link>
                                </Button>
                            </div>
                            <div class="input_sect submit_btn">
                                <Button onClick={handleScroll}>
                                    <Link to={"/agreement"}>Submit & Next</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 