import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

    const [btnName,setbtnName] = useState("login");
    // console.log(btnName);

    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src= {LOGO_URL} alt="app logo" />
            </div>

            <div className="title">
                <h1>OnlyFood!</h1>
            </div>
            
            <div className="nav-items">
            
                <ul>
                    <li>  Status : {onlineStatus ? "🟢" : "🔴" } </li>
                    <li><Link to = "/"> Home</Link></li>
                    <li><Link to = "/about"> About</Link></li>
                    <li><Link to = "/contact"> Contact </Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>  btnName === "login" ? setbtnName("logout") : setbtnName("login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;