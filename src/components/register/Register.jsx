import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaRegAddressCard, FaCity } from "react-icons/fa";
import  leave from "../../Assets/Sell/cart.jpg"
import "../buy/buy.css";
import { Link } from "react-router-dom";

function Register() {


  return (
    <div className="buy">
      <img src={leave} alt="" />
      <div className="buy-main">
        <div className="details">
          <div className="details-input">
            <div className="details-first">
              <BsFillPersonFill
                style={{
                  verticalAlign: "middle",
                  width: "1.5rem",
                  height: "auto",
                }}
              />
              <span>Full name</span>
            </div>
            <input type="text" />
          </div>
          <div className="details-input">
            <div className="details-first">
              <FiMail
                style={{
                  verticalAlign: "middle",
                  width: "1.5rem",
                  height: "auto",
                }}
              />
              <span> Email </span>
            </div>
            <input type="text" />
          </div>

          <div className="details-input">
            <div className="details-first">
              <FaRegAddressCard
                style={{
                  verticalAlign: "middle",
                  width: "1.5rem",
                  height: "auto",
                }}
              />
              <span>Adress</span>
            </div>
            <input type="text" />
          </div>
          <div className="details-input">
            <div className="details-first">
              <FaCity
                style={{
                  verticalAlign: "middle",
                  width: "1.5rem",
                  height: "auto",
                }}
              />
              <span>city</span>
            </div>
            <input type="text" />
          </div>
          <div className="details-input">
              <div className="details-first">
                <span>State</span>
              </div>
            <input type="text" />
          </div>
          <div className="details-input">
            <div className="details-first">
              <span>Pin Code</span>
            </div>
            <input type="text" />
          </div>
          <div className="">
            <Link to="/" className="card-btn" type="button"  >Proceed</Link> <br/>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
