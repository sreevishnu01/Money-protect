import "./login.css";
import google from "../../../assets/images/google.png";
import uae from "../../../assets/images/uae.png";
import { Link } from "react-router-dom";
// import Otp from "../otp/otp";

export default function Login() {

    return (
        <div className="Login_signup">
            <div className="two_factor_page">
                <section className="login_account" id="login_account">
                    <div className="login_accounts">


                        <div className="login_account_content">
                            <div className="login_account_right_inner">
                                <div className="login_form">
                                    <div className="login_title">
                                        <h1>Login to your Account</h1>
                                        <p>See what is going on with your business</p>
                                    </div>

                                    <div className="login_right_login_options">
                                        <div className="login_with_email">
                                            <label for="login_account_email">Enter your User Name or your Email</label>
                                            <input type="email" id="login_account_email" placeholder="Email" />
                                            <label for="login_account_password">Password</label>
                                            <input type="password" placeholder="Password" />

                                            <div className="login_account_reminds">
                                                <div>
                                                    <input type="checkbox" id="login_account_remind" />
                                                    <label for="login_account_remind">Remember Me</label>
                                                </div>
                                                <span>Forget Password?</span>
                                            </div>
                                        </div>
                                        <div className="login_login"><Link to={"/otp"}>Login</Link></div>

                                        <div className="login_thirdparty">
                                            <div><img src={google} alt="" /> Login with Google</div>
                                            <div><img src={uae} alt="" /> Login with UAE Pass</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="login_signup">
                                    Not Registered Yet? <Link to={"/myapplication"}>Create an account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}