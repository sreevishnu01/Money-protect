import { useState } from 'react';
import '../eligiblity/eligibility.css';
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {link} from 'react-router-dom';


export default function Eligibility(){

    const [isElement1Visible, setIsElement1Visible] = useState(true);
    const [isElement2Visible, setIsElement2Visible] = useState(false);
    // const [isElement1Color, setIsElement1Color] = useState(true);

    // const [isElement1Color, setIsElement1Color] = useState(false);
    const [isElement1Color, SetIsElement1Color] = useState(true);
    const [isElement2Color, SetIsElement2Color] = useState(false);
  
    const showElement1 = () => {
      setIsElement1Visible(true);
      setIsElement2Visible(false);
    };
  
    const showElement2 = () => {
      setIsElement1Visible(false);
      setIsElement2Visible(true);
    };
    const colorElement1 = () => {
        setIsElement1Visible(true);
        setIsElement2Visible(false);
      };
      const colorElement2 = () => {
        setIsElement1Visible(false);
        setIsElement2Visible(true);
      };
    const [customName, setCustomName] = useState(16);

    const handleChange2 = (event, newValue) => {
    setCustomName(newValue);
    };
    const [monthSalary, setMonthSalary] = useState(0)

    const [customBorrow, setCustomBorow] = useState();
    
    const handleBorrow = (event, newValue) =>{

        const monthlyIncome = event.target.value;
        
        setMonthSalary(monthlyIncome);

        const aed = monthlyIncome * loanAmount * customYear /5;

        setBorrowAround(aed);
        setMonthAmount(aed/loanAmount*0.45);
        setPropertyVal(aed+(monthlyIncome * 14.4))
        setYearAmount(aed/6)
    }
    const [customYear, setCustomYear] = useState(5);
    const handleYear1 = (event, newValue) =>{
        
        const aed = monthSalary * loanAmount * newValue/5;
        console.log(aed);
        
        setBorrowAround(aed);
        setMonthAmount(aed/24*0.45)
        setPropertyVal(aed/monthSalary * 14.4)
        setYearAmount(aed/4)
        setCustomYear(newValue);
    };
    
// 

    
    
    const loanAmount = 24;

    const [borrowAround, setBorrowAround] = useState(0);
    
    const [monthAmount, setMonthAmount] = useState(0);
    
    const [propertyVal, setPropertyVal] = useState(0);
    
    const [yearAround, setYearAmount] = useState(0);



    // 
    // 
    // 
    // 

    // mortgage calculate

    const [eligibileloanAmount, setEligibileLoanAmount] = useState();
    const [eligibileDownpay, setEligibleDownpay] = useState();
    const [eligibileDownpayPercent, setEligibleDownpayPercent] = useState(20);
    const [eligibileLength, setEligibleLength] = useState(1);

    const handleInc = () =>{
        const amount = parseInt(eligibileloanAmount);
        setEligibileLoanAmount(amount + 200000);
        const downPay = eligibileloanAmount * eligibileDownpayPercent / 100;
            setEligibleDownpay(downPay);
            setEligibleDownpay(downPay);
    }
    const handleDec = () =>{
        if(eligibileloanAmount > 0){
            setEligibileLoanAmount(eligibileloanAmount - 200000);
            const downPay = eligibileloanAmount * eligibileDownpayPercent / 100;
            setEligibleDownpay(downPay);
        }
        else if(eligibileloanAmount <= 0){
            setEligibileLoanAmount(0)
            
        }
    
    }  
    const handleEligibleAmount = (event) =>{
        setEligibileLoanAmount(event.target.value);
        const downPay = event.target.value * eligibileDownpayPercent /100;
        setEligibleDownpay(downPay)
    }
    
    const handleEligibleDownpay = (event) =>{
        setEligibleDownpay(event.target.value);
    }
  
    const handleDownpayPercent = (event, newValue) =>{
        setEligibleDownpayPercent(newValue)
        // console.log(newValue);
        const downPay = eligibileloanAmount * eligibileDownpayPercent / 100;
        setEligibleDownpay(downPay);
    }
    const handleEligibleLength = (event, newValue) => {
        setEligibleLength(newValue);
    }



    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };
    const [isContentVisible2, setIsContentVisible2] = useState(false);

    const toggleContent2 = () => {
        setIsContentVisible2(!isContentVisible2);
    };
    const [isContentVisible3, setIsContentVisible3] = useState(false);

    const toggleContent3 = () => {
        setIsContentVisible3(!isContentVisible3);
    };

    return(

    <div className='eligibility_calculator'>


        <div className="eligibility_calculator_inner">
            <div className="eligibility_tabs">


                <ul>
                    <li className='eligibility_tab' style={{background : isElement1Visible ? "#fff" : "#e9ecf3", boxShadow: isElement1Visible ? "2px -2px 5px #aca4a4" : 'none',}} ><h2 onClick={showElement1} >Eligibility Calculator</h2></li>
                    <li className='eligibility_tab' style={{background : isElement2Visible ? "#fff" : "#e9ecf3", boxShadow: isElement2Visible ? "-2px -2px 5px #aca4a4" : 'none',}}><h2 onClick={showElement2} >Mortgage Calculator</h2></li>
                </ul>
                <div className="eligibility_calculator_cont" id='ElegibilityPage' style={{display: isElement1Visible ? 'flex' : 'none'  }}>
                    <div className="eligibility_cal_left">
                        <p>Estimate how much you can borrow with our easy to use eligibility calculator</p>
                        <div className="eligibility_inputs">
                            <div>
                                <label htmlFor="">Residency Status</label>
                                <input type="text" placeholder='UAE National'/>
                            </div>
                            <div>
                                <label htmlFor="" className='two_inputs'>
                                    <span>Your Age</span>
                                    <span>{customName} Years</span>
                                </label>
                                <div className="input_range">
                                <Box >
                                    <Slider
                                        value={customName}
                                        onChange={handleChange2}
                                        min={16}
                                        max={64}

                                    />
                                </Box>
                                
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Monthly Income</label>
                                <input type="text" placeholder='12,000' onChange={handleBorrow} id='monthlyIncome' maxLength={10}/>
                            </div>
                            <div>
                                <label htmlFor="" className='two_inputs'>
                                    <span>Length of Loan</span>
                                    <span>{customYear} Years</span>
                                </label>
                                <div className="input_range">
                                <Box >
                                    <Slider
                                        value={customYear}
                                        onChange={handleYear1}
                                        min={5}
                                        max={25}

                                    />
                                    <div><span className='minvalue'>5</span>
                                    <span className='maxvalue'>25</span></div>
                                </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eligibility_cal_right">
                        <div className="home_img">
                            <div className='homeIcon'>
                               
                            </div>
                            <p>You could borrow around</p>
                            <h1>AED {borrowAround}</h1>
                        </div>
                        <div className='month_amount'>
                            <div>
                                <p>Monthly Installment</p>
                                <h2>AED {monthAmount}</h2>
                            </div>
                            <div>
                                <p>Property Worth</p>
                                <h2>AED {propertyVal}</h2>
                            </div>
                            <div>
                                <p>Yearly Installment</p>
                                <h2>AED {yearAround}</h2>
                            </div>
                        </div>
                        <div className="congralation">
                            <h2>Congratulations! you are eligible </h2>
                            <p>This value could get you a nice studio in the UAE</p>
                            {/* <Button><Link to={"/home"}>Get Started</Link></Button> */}
                            <Button>Get Started</Button>
                        </div>
                    </div>
                </div>


                <div className="eligibility_mortgage_cont calculator-form" id='CalculatorPage' style={{display: isElement1Visible ? 'none' : 'block'}}>
                    <div class="eligibility_title">
                        <h1>How much are you investing in this home?</h1>
                    </div>
                    <div class="eligibility_body">
                    <div class="eligibility_body_left">
                        <div class="eligibility_body_inner">

                            <div class="eligibility_property_price eligibility_conts">
                            <label for="eligibility_property_amount">Property Price</label>
                            <div>
                                <div class="eligibility_property_dec" id="eligibility_dec" onClick={handleDec}><i class="fa fa-minus" aria-hidden="true"></i></div>
                                <input type="number" id="eligibility_property_amount" placeholder="AED 20,000,000" min={0} onChange={handleEligibleAmount} value={eligibileloanAmount}/>
                                <div class="eligibility_property_dec" id="eligibility_inc" onClick={handleInc}><i class="fa fa-plus" aria-hidden="true"></i></div>
                            </div>
                            </div>

                            <div class="eligibility_downpayment eligibility_conts">
                            <div>
                                <label for="Property_downpayment">DOWN PAYMENT</label>
                                <input type="number" placeholder="AED 2,200,000" id="property_downpayment" onChange={handleEligibleDownpay} value={eligibileDownpay}/>
                            </div>
                            <div>
                                <label for="down_payment_percentage">Pay Up Front</label>
                                <input type="text" class="" id="down_payment_percentage" readonly value={eligibileDownpayPercent+".00%"}/>
                            </div>
                            <p>A percentage of the home price paid up front and in cash. Usually at least 20%</p>
                            </div>

                            <div class="intrest_percentage eligibility_conts">
                                <div>
                                    <div className="input_range">
                                        <Box >
                                            <Slider
                                                value={eligibileDownpayPercent}
                                                onChange={handleDownpayPercent}
                                                min={20}
                                                max={100}
                                                defaultValue={20}
                                            />
                                            <div className='range_values'><span className='minvalue'>20%</span>
                                            <span className='maxvalue'>100%</span></div>
                                        </Box>
                                </div>
                                </div>
                            </div>

                            <div class="mortgage_length eligibility_conts">
                            <label for="">Mortgage Length</label>
                            <input type="text" placeholder="20years" value={eligibileLength + " years"} readonly/>
                            </div>

                            <div class="range_length_year eligibility_conts">
                            
                                <Box >
                                    <Slider
                                        value={eligibileLength}
                                        onChange={handleEligibleLength}
                                        min={1}
                                        max={25}
                                    />
                                    <div className='range_values'><span className='minvalue'>1 Year</span>
                                    <span className='maxvalue'>25 Year</span></div>
                                </Box>

                            </div>
                        </div>

                    </div>
                    <div class="eligibility_body_right">
                        <h3>Our Popular Mortgage Products</h3>

                        <div class="mortgage_products_models">
                            <div>
                                <div class="year_3_mortgage">
                                <div class="mortgage_intrest">
                                    <span>3 year fixed</span>
                                    <p>4.69%</p>
                                </div>
                                <div class="mortgage_type">
                                    <span>Mortgage Type</span>
                                    <p>3 Years Fixed</p>
                                </div>
                                <div class="mortgage_payment">
                                    <span>Monthly Payment</span>
                                    <p>AED 444,444</p>
                                </div>
                                <div class="mortgage_button">
                                    <h4 onClick={toggleContent}>{isContentVisible ?  'Hide Breakdown' : 'View Breakdown'}</h4>
                                    {isContentVisible && (
                                        <div className='breakdown'>
                                            <h3>Costs breakdown</h3>
                                            <div>
                                                <span>Land Department Fee</span>
                                                <span>AED 40,580.00</span>
                                            </div>
                                            <div>
                                                <span>Trustee Fee</span>
                                                <span>AED 4,410.00</span>
                                            </div>
                                            <div>
                                                <span>Mortgage Registration Fee</span>
                                                <span>AED 2,790.00</span>
                                            </div>
                                            <div>
                                                <span>Bank Processing Fee</span>
                                                <span>AED 2,100.00</span>
                                            </div>
                                            <div>
                                                <span>Valuation Fee</span>
                                                <span>AED 3,150.00</span>
                                            </div>
                                            <br />
                                            <h3>Loan breakdown</h3>
                                            <div>
                                                <span>Product type</span>
                                                <span>3 years fixed</span>
                                            </div>
                                            <div>
                                                <span>Interest Rate</span>
                                                <span>4.69%</span>
                                            </div>
                                            <div>
                                                <span>Bank processing fee</span>
                                                <span>0.525%</span>
                                            </div>
                                            <div>
                                                <span>Life insurance</span>
                                                <span>0.0227%</span>
                                            </div>
                                            <div>
                                                <span>Property insurance</span>
                                                <span>0.04%</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                </div>
                            </div>

                            <div>
                                <div class="year_5_mortgage">
                                    <div class="mortgage_intrest">
                                    <span>5 year fixed</span>
                                    <p>4.69%</p>
                                </div>
                                <div class="mortgage_type">
                                    <span>Mortgage Type</span>
                                    <p>5 Years Fixed</p>
                                </div>
                                <div class="mortgage_payment">
                                    <span>Monthly Payment</span>
                                    <p>AED 444,444</p>
                                </div>
                                <div class="mortgage_button">
                                <h4 onClick={toggleContent2}>{isContentVisible2 ? 'Hide Breakdown' : 'View Breakdown'}</h4>
                                    {isContentVisible2 && (
                                        <div className='breakdown'>
                                            <h3>Costs breakdown</h3>
                                            <div>
                                                <span>Land Department Fee</span>
                                                <span>AED 40,580.00</span>
                                            </div>
                                            <div>
                                                <span>Trustee Fee</span>
                                                <span>AED 4,410.00</span>
                                            </div>
                                            <div>
                                                <span>Mortgage Registration Fee</span>
                                                <span>AED 2,790.00</span>
                                            </div>
                                            <div>
                                                <span>Bank Processing Fee</span>
                                                <span>AED 2,100.00</span>
                                            </div>
                                            <div>
                                                <span>Valuation Fee</span>
                                                <span>AED 3,150.00</span>
                                            </div>
                                            <br />
                                            <h3>Loan breakdown</h3>
                                            <div>
                                                <span>Product type</span>
                                                <span>5 years fixed</span>
                                            </div>
                                            <div>
                                                <span>Interest Rate</span>
                                                <span>5.29%</span>
                                            </div>
                                            <div>
                                                <span>Bank processing fee</span>
                                                <span>0.525%</span>
                                            </div>
                                            <div>
                                                <span>Life insurance</span>
                                                <span>0.0227%</span>
                                            </div>
                                            <div>
                                                <span>Property insurance</span>
                                                <span>0.04%</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="variable_mortgage">
                            <div class="mortgage_intrest">
                            <span>Variable Rate</span>
                            <p>6.00%</p>
                            </div>
                            <div class="mortgage_type">
                            <span>Mortgage Type</span>
                            <p>Variable Rate</p>
                            </div>
                            <div class="mortgage_payment">
                            <span>Monthly Payment</span>
                            <p>AED 444,444</p>
                            </div>
                            <div class="mortgage_button">
                            <h4 onClick={toggleContent3}>{isContentVisible3 ? 'Hide Breakdown' : 'View Breakdown'}</h4>
                                    {isContentVisible3 && (
                                        <div className='breakdown'>
                                            <h3>Costs breakdown</h3>
                                            <div>
                                                <span>Land Department Fee</span>
                                                <span>AED 40,580.00</span>
                                            </div>
                                            <div>
                                                <span>Trustee Fee</span>
                                                <span>AED 4,410.00</span>
                                            </div>
                                            <div>
                                                <span>Mortgage Registration Fee</span>
                                                <span>AED 2,790.00</span>
                                            </div>
                                            <div>
                                                <span>Bank Processing Fee</span>
                                                <span>AED 2,100.00</span>
                                            </div>
                                            <div>
                                                <span>Valuation Fee</span>
                                                <span>AED 3,150.00</span>
                                            </div>
                                            <br />
                                            <h3>Loan breakdown</h3>
                                            <div>
                                                <span>Product type</span>
                                                <span>Variable Fixed</span>
                                            </div>
                                            <div>
                                                <span>Interest Rate</span>
                                                <span>6.00%</span>
                                            </div>
                                            <div>
                                                <span>Bank processing fee</span>
                                                <span>0.525%</span>
                                            </div>
                                            <div>
                                                <span>Life insurance</span>
                                                <span>0.0227%</span>
                                            </div>
                                            <div>
                                                <span>Property insurance</span>
                                                <span>0.04%</span>
                                            </div>
                                        </div>
                                    )}
                            </div>
                            </div>
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