import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import {  fab} from '@fortawesome/free-solid-svg-icons'
const Auth = () => {
    return (
        <>
            <form className="authentication">
                <div>
                    <h6><FontAwesomeIcon icon={faUser}/></h6>
                    <input placeholder="Username" id="username" type="text" />
                </div>
                <div>
                    <h6><FontAwesomeIcon icon={faKey}/></h6>
                    <input placeholder="Password" id="password" type="password" />
                </div>
                <button>LOGIN</button>
            </form>
            <a className="forgot">Forgot Password?</a>
            <div className="student">
                <span>Are you a Student? </span>
                <a href="">Login Here</a>
            </div>
            <div className="contact_info">
                <h6>Need Help?</h6>
                <h6>Call: <span className="green">+91-8448443326</span></h6>
                <h6>Email: <span className="green">info@schoollog.in</span></h6>
                <h6>Website: <span className="green">https://schoollog.in</span></h6>
            </div>
            <div className="social_networks">
            </div>
        </>
    )
}
export default Auth;