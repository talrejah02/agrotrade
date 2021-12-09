import React,{useEffect, useState} from "react";
import work from "../../Assets/login page/work.jpg";
import "./login.css";
// import msgsvg from "../../Assets/msg"
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom";
import {useUser} from '../../context/context'



  function  Login() {
   const[email,setemail]=useState("")
   const[pass,setpass]=useState("")
   const{setId,isLogin,setLogin}=useUser()
   const navigate = useNavigate()

   

   function valid(){
       fetch("https://national-api.hiteshtalreja.repl.co/api/register")
       .then(res=>res.json())
       .then(data=>{
         data.login.forEach((item)=>{
           if(email === item.username ){
             console.log(item.id)
             setId(item.id)
             setLogin(true)
             navigate('/')
            }
          })
          if(!isLogin){
            alert("please Enter correct email and password")
          }
        })
      
        
        
        //  if(email === "hitesh@gmail.com" && pass === "hitesh" )
        //  {
          //    alert("logged in")
          //    navigate('/')
          //  }else{
            //     alert("user does not exist")
            //  }
            
   }
  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="left-container">
          <img src={work} alt="" />
        </div>
        <div className="right-container">
          <div className="heading">
               <h2>national live agricultural market</h2>
          </div>
          <div className="right-btn">
            <Link to="/Register" className="register-btn" >login</Link>
            <Link to="/Register" className="register-btn" >Register</Link>
            {/* <button  className="head-btn">Register</button> */}
          </div>
          <div className="login-container">
            <div className="login-details">
              <p>Use your credentials to login into account.</p>
              <div className="input-fields">
                <FiMail style={{ verticalAlign:'middle', width: '1.5rem' , height: 'auto' }}/>
              <input type="text" placeholder="Username" name="" id="" onChange={(e)=>setemail(e.target.value)} />
              </div>
              <div className="input-fields">
                <RiLockPasswordLine style={{ verticalAlign:'middle', width: '1.5rem' , height: 'auto' }}/>
                <input type="password" placeholder="password" name="" id="" onChange={(e)=>setpass(e.target.value)}  />
              </div>
            <div class="form-btn"> 
            <button to="/" className="sell-btn" onClick={()=>valid()} >
            Login
          </button>
              <button className="sell-btn">forget password</button>
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
