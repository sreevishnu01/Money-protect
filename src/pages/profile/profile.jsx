
import './profile.css';
import edit from '../../assets/images/edit.png';
import profile_image from '../../assets/images/profile_image.png';
import edit2 from '../../assets/images/edit2.png';
import gps from '../../assets/images/gps.png';
import cake from '../../assets/images/cake.png';
import { Button } from '@mui/material';
import scaner from '../../assets/images/scaner.png';
import download from '../../assets/images/download.png';
import plus from '../../assets/images/plus.png';
import mypay1 from '../../assets/images/mypay1.png';
import mypay2 from '../../assets/images/mypay2.png';
import mypay3 from '../../assets/images/mypay3.png';
import BarChart from './bar';
import PieChartWithCenterLabel from './pie';
import { Link } from 'react-router-dom';
// import { CChartBar } from '@coreui/react-chartjs/dist/CCharts';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';




export default function ProfileDetail({ data }) {



    return (

        <div id="Profile">
            <div className="Profile_page">
                <div className="profile_page">
                    <div className="profile_dash">
                        <ul>
                            <li><i class="fa fa-circle" aria-hidden="true"></i><Link to={"/profiledetail"}> <h3>Profile Details</h3> </Link></li>

                            <li><i class="fa fa-circle" aria-hidden="true"></i> <Link to={"/idverification"}><h3>My Applications</h3></Link></li>

                            <li><i class="fa fa-circle" aria-hidden="true"></i> <Link><h3>Inbox</h3></Link></li>

                            <li><i class="fa fa-circle" aria-hidden="true"></i><Link> <h3>Settings</h3></Link></li>
                        </ul>
                    </div>
                    <div className="profile_cont">
                        <div className="personal_info">
                            <div className="personal_information">
                                <div className='personal_info_title'>
                                    <h1>Personal Information</h1>
                                    <h3 className="personal_edit">
                                        <img src={edit} alt="" /> Edit
                                    </h3>
                                </div>
                                <div className="personal_inputs">
                                    <div>
                                        <label htmlFor="Profile_Name">Name: </label>
                                        <input type="text" placeholder='Fatima Badr' />
                                    </div>
                                    <div>
                                        <label htmlFor="DOB">Date Of Birth</label>
                                        <input type="date" placeholder='15/03/1997' />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone_Number">Phone Number</label>
                                        <input type="number" />
                                    </div>
                                    <div>
                                        <label htmlFor="Profile_Address">Address</label>
                                        <input type="text" placeholder='Gothenburg' />
                                    </div>
                                    <div>
                                        <label htmlFor="Profile_Email">Email</label>
                                        <input type="email" placeholder='fatimab@gmail.com' />
                                    </div>
                                </div>
                            </div>
                            <div className="personal_profile">
                                <div className="presonal_profile_image">
                                    <div >
                                        <img src={profile_image} alt="" />
                                    </div>
                                    <div className='personal_profile_edit'>
                                        <img src={edit2} alt="" />
                                    </div>
                                </div>
                                <h1>Fatima Badr</h1>
                                <div className='personal_profile_city'>
                                    <p><img src={gps} alt="" /> Motor City</p>
                                    <span>|</span>
                                    <p><img src={cake} alt="" /> 15th February</p>
                                </div>
                                <div className="personal_profile_btn">
                                    <Button>Profile Informations</Button>
                                    <p>Payments</p>
                                    <p>Requests & Information</p>
                                </div>
                            </div>

                        </div>
                        <div className="profile_charts">
                            <div>
                                <div className="personal_bar_chart">
                                    <div className='bar_chart_title'>
                                        <h3>Money Earend</h3>
                                        <div>
                                            <p>Last 6 Months <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                                            <img src={scaner} alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <BarChart />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="personal_pie_chart">
                                    <div className='pie_chart_title'>
                                        <h3>Overall Payment</h3>
                                        <p>This Week <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                                    </div>
                                    <div className='chart'>
                                        <PieChartWithCenterLabel />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pending">
                            <div className="pending_inner">
                                <div className='pending_cont'>
                                    <div className='pending_circle'></div>
                                    <div className='pending_content'>
                                        <h1>2.46 M</h1>
                                        <p>Total Due</p>
                                    </div>
                                </div>
                                <div className='pending_cont'>
                                    <div className='pending_circle'></div>
                                    <div className='pending_content'>
                                        <h1>2.46 M</h1>
                                        <p>Total Due</p>
                                    </div>
                                </div>
                                <div className='pending_cont'>
                                    <div className='pending_circle'></div>
                                    <div className='pending_content'>
                                        <h1>2.46 M</h1>
                                        <p>Total Due</p>
                                    </div>
                                </div>
                                <div className='pending_cont'>
                                    <div className='pending_circle'></div>
                                    <div className='pending_content'>
                                        <h1>2.46 M</h1>
                                        <p>Total Due</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mypayment">
                            <div className="mypayment_inner">
                                <div className="mypayment_title">
                                    <div className='mypayment_title1'>
                                        <h1>My Payment</h1>
                                        <p>Manage your billing and payment details</p>
                                    </div>
                                    <div className='mypayment_title2'>
                                        <Button><img src={download} alt="" /> Download PDF Report</Button>
                                        <Button className='add_btn'><img src={plus} alt="" /> Add New</Button>
                                    </div>

                                </div>
                                <div className="mypayment_years">
                                    <div className='mypayment_cont'>
                                        <div className='mypayment_circle'>
                                            <img src={mypay1} alt="" />
                                        </div>
                                        <div className='mypayment_content'>
                                            <h2>23</h2>
                                            <p>Total Due</p>
                                        </div>
                                    </div>
                                    <div className='mypayment_cont'>
                                        <div className='mypayment_circle'>
                                            <img src={mypay2} alt="" />
                                        </div>
                                        <div className='mypayment_content'>
                                            <h2>12</h2>
                                            <p>Total Due</p>
                                        </div>
                                    </div>
                                    <div className='mypayment_cont'>
                                        <div className='mypayment_circle'>
                                            <img src={mypay3} alt="" />
                                        </div>
                                        <div className='mypayment_content'>
                                            <h2>2,567,456.00</h2>
                                            <p>Total Due</p>
                                        </div>
                                    </div>
                                    <div className='mypayment_cont'>
                                        <div className='mypayment_circle'>
                                            <img src={mypay3} alt="" />
                                        </div>
                                        <div className='mypayment_content'>
                                            <h2>3400.00</h2>
                                            <p>Total Due</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mypayment_search">
                                    <div>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                        <input type="text" placeholder='Search by Payment' />
                                    </div>
                                    <div>
                                        <i class="fa fa-filter" aria-hidden="true"></i>
                                        Filter
                                    </div>
                                </div>
                                <div className="mypayment_table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>INVOICE NUMBER</th>
                                                <th>Payment Date</th>
                                                <th>Due Date</th>
                                                <th>Payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Button className='unpay'>Pay</Button>
                                                    <Link className='unpay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='unpay'>Pay</Button>
                                                    <Link className='unpay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='pay'>Pay</Button>
                                                    <Link className='pay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='unpay'>Pay</Button>
                                                    <Link className='unpay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='pay'>Pay</Button>
                                                    <Link className='pay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='pay'>Pay</Button>
                                                    <Link className='pay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='unpay'>Pay</Button>
                                                    <Link className='pay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button className='pay'>Pay</Button>
                                                    <Link className='pay'>Pay</Link>
                                                </td>
                                                <td><input type="checkbox" /> 5146846548465</td>
                                                <td>11-Nov-2023</td>
                                                <td>11-Nov-2023</td>
                                                <td>AED 22,403.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

