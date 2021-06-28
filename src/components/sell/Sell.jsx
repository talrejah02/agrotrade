import React, { useState} from "react";
import sell from "../../Assets/Sell/sell.jpg";
import "./sell.css";
import { projectStorage } from "../../firebase/config";
import axios from "axios";

function Sell() {
  const [products, setproduct] = useState({
    userId: "60d8e5c35a6ac20768d8c699",
    product: "",
    grade: "",
    image: "",
    quantity: 0,
    price: "",
    description: "this is a crop",
    status: "unsold",
  });
  const [error, seterror] = useState(null);
  function imageUpload(e) {
    let selected = e.target.files[0];
    console.log(selected.name);
    const storageRef = projectStorage.ref(selected.name);
    storageRef.put(selected).on(
      "state.changed",
      (snap) => {
        let percenatge = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percenatge);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setproduct({ ...products, image: url });
        console.log(url);
      }
    );
  }
  function Upload() {
    axios
      .post("https://national-api.hiteshtalreja.repl.co/api/stock", products)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(products);
  }

  return (
    <div className="sell">
      <div className="sell-img">
        <img src={sell} alt={error} />
        <div className="sell-head">
          <span>Sell</span>
        </div>
        <h1>Upload Product</h1>
      </div>
      <div className="sell-main">
        <div className="sell-left">
          <div>
            {products.image ? (
              <img src={products.image} alt="" />
            ) : (
              <label className="img-label" for="img_up">
                Upload image
              </label>
            )}
            <input
              className="img-input"
              id="img_up"
              type="file"
              onChange={imageUpload}
            />
          </div>
        </div>
        <div className="sell-right">
          <div className="sell-input">
            <label for="list">Select product</label>
            <select id="list" vlaue={products.product} onChange={ (e)=>  setproduct({...products,product: e.target.value})}  >
              <option
                value="Wheat"
                // onClick={(e) =>
                //   setproduct({ ...products, product: e.target.value })
                // }
              >
                Wheat
              </option>
              <option
                value="Bajra"
                // onClick={(e) =>
                //   setproduct({ ...products, product: e.target.value })
                // }
              >
                Bajra`
              </option>
              <option
                value="Rice"
                // onClick={(e) =>
                //   setproduct({ ...products, product: e.target.value })
                // }
              >
                Rice
              </option>
            </select>
          </div>
          <div className="sell-input">
            <span>Grade:</span>
            <input
              type="radio"
              name="Grade"
              id="Grade"
              value="A"
              onClick={(e) =>
                setproduct({ ...products, grade: e.target.value })
              }
            />
            <label for="A">
              <strong>A</strong>
            </label>
            <input
              type="radio"
              name="Grade"
              id="Grade"
              value="B"
              onClick={(e) =>
                setproduct({ ...products, grade: e.target.value })
              }
            />
            <label for="B">
              <strong>B</strong>
            </label>
            <input
              type="radio"
              name="Grade"
              id="Grade"
              value="C"
              onClick={(e) =>
                setproduct({ ...products, grade: e.target.value })
              }
            />
            <label for="C">
              <strong>C</strong>
            </label>
          </div>

          <div className="sell-input">
            <label for="quantity">Enter Quantity</label>
            <input
              type="text"
              id="quantity"
              onChange={(e) =>
                setproduct({ ...products, quantity: e.target.value })
              }
            />
          </div>
          <div className="sell-input">
            <label for="price">Enter price</label>
            <input
              type="text"
              name=""
              id="price"
              onChange={(e) =>
                setproduct({ ...products, price: e.target.value })
              }
            />
          </div>

          <p style={{ color: "#1E1E1E" }}>
            description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse eos deleniti nihil facilis quidem hic?
          </p>
          <button className="sell-btn" onClick={Upload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sell;
