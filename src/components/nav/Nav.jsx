import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="header">
        <p>Agrotrade</p>
      </div>
      <div className="nav-links">
        <div className="nav-element">
          <Link className="link" to="/Home">
            Home
          </Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="">Trade</Link>
          <div className="element-content">
            <ul className="demo">
              <li>
                <Link className="link" to="/Trade">
                  Live Trade
                </Link>
              </li>
              <li>
                <Link className="link" to="/Trade">
                  Offline Trade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-element">
          <Link className="link" to="/Sell">
            Sell
          </Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="Transport">
            Transport
          </Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="">Orders</Link>
          <div className="element-content">
            <ul className="demo">
              <li>
                <Link className="link" to="/Orders">
                  All orders
                </Link>
              </li>
              <li>
                <Link className="link" to="/Orders">
                  Pending
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-element">
          <Link className="link" to="">Dashboard</Link>
          <div className="element-content">
            <ul className="demo">
              <li>
               
                <Link className="link" to="/StakeHolders">
                  Stake holders
                </Link>
              </li>
              <li>
                <Link className="link" to="/Transaction">
                  Transaction
                </Link>
              </li>
              <li>
                <Link className="link" to="/Complaints">
                  Complaints
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-element">
        <Link className="link" to="/Login">login/register</Link>
      </div>
      </div>

      
    </div>
  );
}

export default Nav;
