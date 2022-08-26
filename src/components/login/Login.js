import React from "react";
import Auth from "./auth/auth";
import './login.css';
import technologytree from '../../images/technologytree.png';
import schoolloglogo from '../../images/schoolloglogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    return (
        <React.Fragment>
            <div className="page1">
                <div className="login_page">
                    <div className="schoollog">
                        <img src={schoolloglogo} id="logo" alt="school log logo" />
                        <h5>Best School ERP and LMS</h5>
                        <img src={technologytree} id="technology-tree" alt="technology tree" />
                    </div>
                    <div className="sign_in">
                        <div className="alerts">
                            <p>Update Alerts: &nbsp; <span><FontAwesomeIcon icon={faBell}/></span></p>
                            <h4>Sign in to Schoollog</h4>
                        </div>
                        <Auth />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;