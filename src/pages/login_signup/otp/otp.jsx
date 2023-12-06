import "./otp.css";
import React, { useState, useEffect, useRef } from 'react';
// import logo from '../../util/login_logo.png'
// import login_banner1 from '../../util/login_banner1.png';
import OtpInput from "react-otp-input"
import { Link } from "react-router-dom";

export default function Otp(){
    // const [otp, setOtp] = useState("");

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([...Array(6)].map(() => React.createRef()));
  
    const handleChange = (index, value) => {
      if (value.match(/^\d$/) || value === '') {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        if (index < 5 && value.match(/^\d$/)) {
          inputRefs.current[index + 1].current.focus();
        }
      }
    };
  
    useEffect(() => {
      inputRefs.current[0].current.focus(); // Automatically focus the first input on mount
    }, []);
  
    const handleBackspace = (index, event) => {
      if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
        // Automatically focus the previous input when Backspace is pressed and the current input is empty
        inputRefs.current[index - 1].current.focus();
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const otpValue = otp.join('');
      console.log(otpValue);
    };


    return(
        <div class="Otp">
            <div class="otp_page">
            <section class="login_otp" id="login_otp">

            <div class="otp_right">
                <div class="otp_form">
                    <div class="otp_title">
                        <h1>OTP Verification</h1>
                        <p>Enter the verification code we just sent to your number +056*******53.</p>
                    </div>
                    <div className="two_otp_codes">
                        <form onSubmit={handleSubmit}>
                                <div className="otpContainer">
                                    {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        autoComplete="off"
                                        className="otpInput"
                                        value={value}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleBackspace(index, e)}
                                        ref={inputRefs.current[index]}
                                        maxLength="1"
                                    />
                                    ))}
                                </div>
                        </form>
                    </div>

                    <div class="otp_resend">
                        <p>Didn’t receive code? <span>Resend</span></p>
                    </div>
                    <div class="otp_verify"><Link to={'/idverification'}>Verify</Link></div>
                </div>
            </div>
        </section>
    </div>
        </div>
    )
}