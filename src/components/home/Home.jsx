import React from "react";
import homeimg from "../../Assets/home page/sun.jpg";
import layer_one from "../../Assets/home page/layer1.jpg";
import layer_two from "../../Assets/home page/layer2.png";
import { HiOutlineLightBulb, HiCubeTransparent } from "react-icons/hi";
import { GiStarsStack } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import leaf from "../../Assets/home page/leaf.png";
// import farm from "../../Assets/home page/farm.png";
import live from "../../Assets/home page/live.jpg";
import transport  from "../../Assets/home page/transport.jpg";
import Offline  from "../../Assets/home page/offline.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="section-a">
        <img className="section-a-img" src={homeimg} alt="" />
        <div className="overlay">
          <img src={leaf} alt="" />
          <p>Welcome to Agrotrade</p>
          <img className="img-two" src={leaf} alt="" />
        </div>
      </div>
      <div className="section-b">
        <div className=" b-left-div">
          <div className="b-img">
            <div className="b-img-one">
              <img src={layer_one} alt="" />
            </div>
            <div className="b-img-two">
              <img src={layer_two} alt="" />
            </div>
          </div>
        </div>
        <div className="b-right-div">
          <div className="b-right-content">
            <div className="right-header">
              <h2> Why Choose Us?</h2>
            </div>
            <div className="right-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                iure quisquam rem nesciunt saepe sunt?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestiae, quo?
              </p>
            </div>
            <div className="right-feature">
              <div className="section-A">
                <div className="right-feature-header">
                  <HiOutlineLightBulb
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      height: "auto",
                    }}
                  />
                  <span className="feature-heading"> Excellent service</span>
                </div>
                <div className="feature-des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores repellendus blanditiis nobis numquam alias eveniet!
                  </p>
                </div>
              </div>

              <div className="section-A">
                <div className="right-feature-header">
                  <HiCubeTransparent
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      height: "auto",
                    }}
                  />
                  <span className="feature-heading">Clean working</span>
                </div>
                <div className="feature-des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores repellendus blanditiis nobis numquam alias eveniet!
                  </p>
                </div>
              </div>
              <div className="section-A">
                <div className="right-feature-header">
                  <GiStarsStack
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      height: "auto",
                    }}
                  />
                  <span className="feature-heading">
                    {" "}
                    Quality and reliability
                  </span>
                </div>
                <div className="feature-des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores repellendus blanditiis nobis numquam alias eveniet!
                  </p>
                </div>
              </div>
              <div className="section-A">
                <div className="right-feature-header">
                  <FiTruck
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      height: "auto",
                    }}
                  />
                  <span className="feature-heading"> transport</span>
                </div>
                <div className="feature-des">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores repellendus blanditiis nobis numquam alias eveniet!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="b-btn">Learn More</button>
        </div>
      </div>
      <div className="section-c">
        <div className="c-main">
          <div className="c-head">
            <p className="c-head-one">What We Do</p>
            <p className="c-head-two">Services We Offer</p>
          </div>
          <div className="c-middle">
            <div className="service-card">
              <img className="service-img" src={live} alt="" />
              <p className="card-head">Live auction</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, sunt. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque, quidem?
              </p>
            </div>
            <div className="service-card">
              <img className="service-img" src={transport} alt="" />
              <p className="card-head">Transport</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, sunt. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque, quidem?
              </p>
            </div>

            <div className="service-card">
              <img className="service-img" src={Offline} alt="" />
              <p className="card-head">Offline trade</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, sunt. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque, quidem?
              </p>
            </div>

            {/* <div className="service-card">
              <img className="service-img" src={live} alt="" />
              <p className="card-head">Live auction</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, sunt. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Atque, quidem?
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <footer>
        
      </footer>
    </div>
  );
}
export default Home;
