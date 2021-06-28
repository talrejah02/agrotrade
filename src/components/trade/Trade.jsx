import React, { useEffect, useState } from "react";
import "./trade.css";
import sell from "../../Assets/Sell/sell.jpg";
import Card from "./Card"
function Trade() {

   const[products,setproducts]=useState([])
   const product_api = "https://national-api.hiteshtalreja.repl.co/api/stock" 

  useEffect(()=>{

    fetch(product_api)
    .then((res)=>res.json())
    .then((data)=>setproducts(data.product))
    .catch((err)=>console.log(err))
  },[])
  
  console.log(products)

  return (
    <div className="trade">
      <div className="trade-img">
        <img src={sell} alt="" />
      </div>
      <div className="sell-head">
        <span>Shop</span>
      </div>
      <div className="trade-choice">
        <span>Select options: </span>
        <select id="state">
          <option value="1">madhya pradesh</option>
          <option value="1">uttar pradesh</option>
          <option value="1">chathis garh</option>
          <option value="1">uttrakhand</option>
        </select>
        <select id="City">
          <option value="1">bhopal</option>
          <option value="1">betul</option>
          <option value="1">indore</option>
          <option value="1">sagar</option>
        </select>
        <select id="commodity">
          <option value="1">wheat</option>
          <option value="1">rice</option>
          <option value="1">bajra</option>
        </select>
        <select id="trade type">
          <option value="1">Auction</option>
          <option value="1">Offline</option>
        </select>
        <button className="trade-btn">Search</button>
      </div>
      <div className="trade-container">
        <div className="card-container">
           
          {products.map(prod =>{

            
          return  <Card prod={prod} key={prod.id}  />
          })

          } 
            
            
          
        </div>
      </div>
    </div>
  );
}

export default Trade;
