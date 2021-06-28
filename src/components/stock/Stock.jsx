import React,{useState,useEffect} from 'react'
import sell from "../../Assets/Sell/sell.jpg"
import "./stock.css"
import axios from "axios";
import Card from "../trade/Card"
function Stock() {
  const[product,setproducts]=useState([])
  const userId="60d8e5c35a6ac20768d8c699"

  useEffect(()=>{
    fetch(`https://national-api.hiteshtalreja.repl.co/api/stock/${userId}`)
    .then((res)=> res.json())
    .then((data)=>setproducts(data.product))
    .catch((err)=>console.log(err))
  },[])
  
  
    return (
        <div className="stock">
            <div className="sell-img">
        <img src={sell} alt="" />
        <div className="sell-head">
          <span>Stock</span>
        </div>
        <h1>Update Product</h1>
      </div> 
      <div className="trade-container">
        <div className="card-container">
           
          {product.map(prod =>{

            
          return  <Card prod={prod} key={prod.id} stock="true"  />
          })

          }  
           
           
        </div>
      </div>
        </div>
    )
}

export default Stock
