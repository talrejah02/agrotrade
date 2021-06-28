import React,{ useState} from "react";
import "./trade.css";
import { Link } from "react-router-dom";
import {RiDeleteBin2Line} from "react-icons/ri" 
import axios from "axios"

function Card(props) {
  
  const{prod,stock}=props
  const [products, setproduct] = useState({
    id: prod.id,
    product: prod.product,
    grade: prod.grade,
    image: prod.image,
    quantity: prod.quantity,
    price: prod.price,
    description: prod.description,
    status: prod.status,
  });
   
  function Update() {
    axios
      .put(`https://national-api.hiteshtalreja.repl.co/api/stock/${prod.id}`, products)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(products);
  }

  function delete_prod() {
    axios
      .delete(`https://national-api.hiteshtalreja.repl.co/api/stock/${prod.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
   

  }


  
  return (
    <div className="card">
      <div className="inner-card">
        <div className="card-img">
            <img src={prod.image} alt=""/>
        </div>
        <div className="card-content">
         <span>Name: {prod.product}</span>
         <input type="text" value={products.quantity} onChange={(e)=>setproduct({...products, quantity: e.target.value })}  placeholder="quantity"/>
         <input type="text" value={products.price} placeholder="Bid Price" onChange={(e)=>setproduct({...products, price: e.target.value })} />
         <span>Grade: {prod.grade}</span>
        </div>
        
          {stock ? 
        <button className="card-btn"  onClick={()=>Update()}  >
           update
          </button> :
          <Link className="card-btn" to="/Buy"    >
          buy now
         </Link> 
            }
          
          { stock && <button onClick={()=>delete_prod()} > <RiDeleteBin2Line/> </button>}
        

          
       
      </div>
    </div>
  );
}

export default Card;
