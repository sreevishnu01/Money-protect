import { useEffect, useRef } from 'react';
import Header from '../header/header';
import banner from '../images/home-banner.png'
import './home.css';
import { Button } from '@mui/material';
import { CChartLine } from '@coreui/react-chartjs';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import line from "../images/line-chart-up-01.png";
import bar from '../images/bar-chart-square-down.png';
import trade from '../images/trend-up-01.png';

import emi1 from '../images/emi1.png';
import emi2 from '../images/emi2.png';
import emi3 from '../images/emi3.png';
import Eligibility from '../eligiblity/eligibility';

import { Link } from 'react-router-dom';


export default function Home() {
   
    const data = {
        labels: ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'Downtown',
            data: [10,15,11,16,12,17,13,18,14,19,15,13,10],
            backgroundColor: '#fd1111',
            borderColor: '#fd1111',
            pointRadius: 0, 
          },
          {
            label: 'Business Bay ',
            data: [11,16,12,17,14,18,15,20,16,21,19,14],
            backgroundColor: '#022cb7',
            borderColor: '#022cb7',
            // cubicInterpolationMode: 'monotone',
            pointRadius: 0, 
          },
          {
            label: 'Al Jadaf',
            data: [12,17,13,18,16,19,16,21,17,22,20,15],
            backgroundColor: '#fee50a',
            borderColor: '#fee50a',
            // cubicInterpolationMode: 'monotone',
            pointRadius: 0, 
          },
          {
            label: 'Marina',
            data: [13,18,14,19,17,20,17,22,18,23,21,16],
            backgroundColor: '#6de50e',
            borderColor: '#6de50e',
            // cubicInterpolationMode: 'monotone',
            pointRadius: 0, 
          },
          {
            label: 'Others',
            data: [14,19,15,20,18,21,18,23,19,24,22,17],
            backgroundColor: '#000',
            borderColor: '#000',
            // cubicInterpolationMode: 'monotone',
            pointRadius: 0, 
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            display: true,
            align: 'end',
          },
          y: {
            display: false,
            beginAtZero: true,
            align: 'end',
          },
        },
      };



    return(
        <div id="Home">
            {/* <Header/> */}
            <div className="Home">
                <div className="home_container">
                    <div className="home_banner">
                        <div className='banner_image'>
                            <img src={banner} alt="" />
                            <div className="banner_shade"></div>
                        </div>
                        <div className="banner_text">
                            <h1>We care for Inclusive & Sustainable Financial Freedom</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Button>Learn More</Button>
                        </div>
                    </div>
                    <div className="home_chart">
                        <CChartLine data={data} options={options} />
                    </div>
                    <div className="financial">
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={{xs: 1, sm: 2, md: 3, lg:6}} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:6}}>
                                <Grid className='financial_conts' item lg={4} md={6} sm={6} >
                                    <div>
                                        <div className="finance_img">
                                            <img src={line} alt="" />
                                        </div>
                                        <div className="finance_desc">
                                            <h2 className="finance_title">Financial Freedom</h2>
                                            <p>Our freedom solutions will help you get rid of your debt.</p>
                                        </div>
                                        <div className='finance_btn'>
                                            <Button size="small">Learn More</Button>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid className='financial_conts' item lg={4} md={6} sm={6}>
                                    <div>
                                        <div className="finance_img">
                                            <img src={trade} alt="" />
                                        </div>
                                        <div className="finance_desc">
                                            <h2 className="finance_title">Financial Freedom</h2>
                                            <p>Our freedom solutions will help you get rid of your debt.</p>
                                        </div>
                                        <div className='finance_btn'> 
                                            <Button size="small">Learn More</Button>
                                        </div>
                                    </div>
                                    
                                </Grid>

                                <Grid className='financial_conts' item lg={4} md={6} sm={6}>
                                <div>
                                        <div className="finance_img">
                                            <img src={bar} alt="" />
                                        </div>
                                        <div className="finance_desc">
                                            <h2 className="finance_title">Financial Freedom</h2>
                                            <p>Our freedom solutions will help you get rid of your debt.</p>
                                        </div>
                                        <div className='finance_btn'>
                                            <Button size='medium'>Learn More</Button>
                                        </div>
                                </div>
                                </Grid>

                            </Grid>
                        </Box>
                    </div>
                    <div className="eligibile">
                        <Eligibility/>
                    </div>
                    <div className="enroll">
                        <div className="enroll_title">
                            <h1>Enroll in our innovative products with just four simple steps.</h1>
                        </div>
                        <Box sx={{width:"100%"}}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:6}}>
                                <Grid className='enroll_conts' item lg={3} md={6} sm={6}>
                                    <div className="enroll_title_number">
                                        <h4>01</h4>
                                    </div>
                                    <div className="enroll_cont_title">
                                        <h2>Profile Creation</h2>
                                    </div>
                                    <div className="enroll_desc">
                                        <p>Fill in the online form which automatically creates a customer account in the portal</p>
                                    </div>
                                </Grid>
                                <Grid className='enroll_conts' item lg={3} md={6} sm={6}>
                                    <div className="enroll_title_number">
                                        <h4>02</h4>
                                    </div>
                                    <div className="enroll_cont_title">
                                        <h2>Profile Creation</h2>
                                    </div>
                                    <div className="enroll_desc">
                                        <p>Fill in the online form which automatically creates a customer account in the portal</p>
                                    </div>
                                </Grid>
                                <Grid className='enroll_conts' item lg={3} md={6} sm={6}>
                                    <div className="enroll_title_number">
                                        <h4>03</h4>
                                    </div>
                                    <div className="enroll_cont_title">
                                        <h2>Profile Creation</h2>
                                    </div>
                                    <div className="enroll_desc">
                                        <p>Fill in the online form which automatically creates a customer account in the portal</p>
                                    </div>
                                </Grid>
                                <Grid className='enroll_conts' item lg={3} md={6} sm={6}>
                                    <div className="enroll_title_number">
                                        <h4>04</h4>
                                    </div>
                                    <div className="enroll_cont_title">
                                        <h2>Profile Creation</h2>
                                    </div>
                                    <div className="enroll_desc">
                                        <p>Fill in the online form which automatically creates a customer account in the portal</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        <div className="enroll_today">
                            <div className='enroll_today_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,tempor incididunt ut labore et dolore magna aliqua.</div>
                            <div className='enroll_today_btn'><Button >Enroll Today</Button></div>
                        </div>


                    </div>
                    <div className="emi">
                        <div className="emi_cont">
                            <div className="emi1">
                                <div className="emi1_cont">
                                    <div className='emi_image'><img src={emi1} alt="" /></div>
                                    <div className="emi_content">
                                        <h2>Fixed EMI For Life</h2>
                                        <ul>
                                            <li>Protection from a rising trend in interest and inflation rates</li>
                                            <li>Enjoy constant EMI throughout the mortgage.</li>
                                            <li>Ability to save for the future increases.</li>
                                        </ul>
                                        <div className="emi_btn">
                                            <Link>View more information <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emi2">
                                <div className="emi2_cont">
                                    <div className='emi_image'><img src={emi2} alt="" /></div>
                                    <div className="emi_content">
                                        <h2>Mortgage EMI Sleeping Period</h2>
                                        <ul>
                                            <li>Increases saving ability.</li>
                                            <li>Offers flexibility in EMI payment structure.</li>
                                            <li>EMI payment funds can be used for emergencies</li>
                                        </ul>
                                        <div className="emi_btn">
                                            <Link>View more information <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="emi3">
                                <div className="emi3_cont">
                                    <div className='emi_image'><img src={emi3} alt="" /></div>
                                    <div className="emi_content">
                                        <h2>Fixed EMI For Life</h2>
                                        <ul>
                                            <li>Suitable for all including senior citizens.</li>
                                            <li>Double stream of income – rental & equity re-invested income.</li>
                                            <li>Mortgage-free home/Cash purchase of the home.</li>
                                        </ul>
                                        <div className="emi_btn">
                                            <Link>View more information <i class="fa fa-chevron-right" aria-hidden="true"></i></Link>
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