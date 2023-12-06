
import './header.css';
import logo from '../images/header-logo.png';
import { Button } from '@mui/material';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

export default function(){

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };


    return(
        <div id="Header">
            <div className="Header">
                <div className="header_logo">
                    <img src={logo} alt="" />
                </div>
                <nav className={`header_menu ${isToggled ? 'active' : ""}`} >
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link>What We Do <i class="fa fa-angle-down" aria-hidden="true"></i></Link></li>
                        <li><Link>Who We Are <i class="fa fa-angle-down" aria-hidden="true"></i></Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="header_btn">
                    <Button className='login'><div><Link to={"/login"}>Login</Link></div></Button>
                    
                    <Button className='demo'>Request Demo</Button>
                </div>
                <div className="header_menu_btn" onClick={handleToggle}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}