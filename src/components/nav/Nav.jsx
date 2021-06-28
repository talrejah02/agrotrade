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
          <Link className="link" to="/">
            Home
          </Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="/Trade">Trade</Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="/Sell">
            Sell
          </Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="/Stock">Stock</Link>
          <div className="element-content">
          </div>
        </div>
        
        <div className="nav-element">
          <Link className="link" to="/Order">Orders</Link>
        </div>

        <div className="nav-element">
          <Link className="link" to="Transport">
            Transport
          </Link>
        </div>

        <div className="nav-element">
        <Link className="link" to="/Login">login/register</Link>
      </div>
      </div>

      
    </div>
  );
}

export default Nav;
