import React from "react";
import work from "../../Assets/login page/work.jpg";
import "./login.css";
// import msgsvg from "../../Assets/msg"
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"



function Login() {
  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="left-container">
          <img src={work} alt="" />
        </div>
        <div className="right-container">
          <div className="heading">
               <p>national live agricultural market</p>
          </div>
          <div className="right-btn">
            <button  className="head-btn">login</button>
            <button  className="head-btn">Register</button>
          </div>
          <div className="login-container">
            <div className="login-details">
              <p>Use your credentials to login into account.</p>
              <div className="input-fields">
                <FiMail style={{ verticalAlign:'middle', width: '1.5rem' , height: 'auto' }}/>
              <input type="text" placeholder="Username" name="" id="" />
              </div>
              <div className="input-fields">
                <RiLockPasswordLine style={{ verticalAlign:'middle', width: '1.5rem' , height: 'auto' }}/>
                <input type="password" placeholder="password" name="" id="" />
              </div>
            <div class="form-btn"> 
              <button>LOGIN</button>
              <button>forget password</button>
            </div>
            </div>
          </div>

          <div className="register-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
