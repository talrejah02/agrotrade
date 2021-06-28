import React, { useState } from "react";
import "./trade.css";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";
import axios from "axios";

function Card(props) {
  const { prod, stock } = props;
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
  const [orders, setorder] = useState({
    userId: "60d8e5da5a6ac20768d8c69a",
    stockId: prod.id,
    sellerId: prod.userId,
    date: "29/06/21",
    transportationId: "null",
    transactionMode: "NEFT",
    paymentStatus: "Not done",
    deliveryDate: "9/07/21",
  });

  function Update() {
    axios
      .put(
        `https://national-api.hiteshtalreja.repl.co/api/stock/${prod.id}`,
        products
      )
      .then((response) => {
        console.log(response);
      })
      .then(alert("product updated"))
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
      .then(alert("product deleted"))
      .catch((error) => {
        console.log(error);
      });
  }

  function order_prod() {
    axios
    .post(
      `https://national-api.hiteshtalreja.repl.co/api/order`,orders
    )
    .then((response) => {
      console.log(response);
    })
    .then(alert("product purchased"))
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <div className="card">
      <div className="inner-card">
        <div className="card-img">
          <img src={prod.image} alt="" />
        </div>
        <div className="card-content">
          <span>Name: {prod.product}</span>
          <input
            type="text"
            value={products.quantity}
            onChange={(e) =>
              setproduct({ ...products, quantity: e.target.value })
            }
            placeholder="quantity"
          />
          <input
            type="text"
            value={products.price}
            placeholder="Bid Price"
            onChange={(e) => setproduct({ ...products, price: e.target.value })}
          />
          <span>Grade: {prod.grade}</span>
        </div>

        {stock ? (
          <button className="card-btn" onClick={() => Update()}>
            update
          </button>
        ) : (
          <button className="card-btn" onClick={() => order_prod()}>
            buy now
          </button>
        )}

        {stock && (
          <button onClick={() => delete_prod()}>
            {" "}
            <RiDeleteBin2Line />{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
