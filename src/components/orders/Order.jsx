import React,{ useState,useEffect} from 'react'
import sell from "../../Assets/Sell/sell.jpg"
import "./order.css"
import {useUser} from "../../context/context"

function Order() {
    
   const[order,setorder]=useState([])
   const {userId}=useUser()
   
    useEffect(()=>{
        fetch(`https://national-api.hiteshtalreja.repl.co/api/order/${userId}`)
        .then((res)=> res.json())
        .then((data)=>setorder(data.result))
        .catch((err)=>console.log(err))
      },[])

    return (
        <div class="order">
            <div className="sell-img">
        <img src={sell} alt="" />
        <div className="sell-head">
          <span>Orders</span>
        </div>
        <h1>Order history</h1>
      </div> 
      <div className="table">
            <div className="order-table">
                <table className="og-table">
                    <tr>
                        <th>product name</th>
                        <th>quanlity</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>date</th>
                        <th>seller name</th>
                        <th>transport</th>
                        <th>transaction</th>
                        <th>payment status</th>
                        <th>delivery date</th>
                    </tr>
                   {order.map(orders =>{
                       return (
                           <>
                              <tr>
                                  <td>{orders.stockId.product}</td>
                                  <td>{orders.stockId.grade}</td>
                                  <td>{orders.stockId.quantity}</td>
                                  <td>{orders.stockId.price}</td>
                                  <td>{orders.date}</td>
                                  <td>ashish</td>
                                  <td>{orders.transportationId}</td>
                                  <td>{orders.transactionMode}</td>
                                  <td>{orders.paymentStatus}</td>
                                  <td>{orders.deliveryDate}</td>
                              </tr>
                           </>
                       )
                   })
                   
                   }
                    
                </table>
            </div>
      </div>
        </div>
    )
}

export default Order
