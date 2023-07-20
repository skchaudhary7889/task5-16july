import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./allstyle.css";
import slider1 from "../images/slider1.svg";
import slider2 from "../images/slider2.svg";
import slider3 from "../images/slider3.svg";
import slider4 from "../images/slider4.svg";
import slider5 from "../images/slider5.svg";
import slider6 from "../images/slider6.svg";
import slider8 from "../images/slider8.svg";
import slider10 from "../images/slider10.jpg";
import aboutImage1 from '../images/abouthome1.jpg'
import Contact from "./Contact";

const Home = () => {

  // this state for switching the tab and inital value is 1 
  const [activeTab, setActiveTab] = useState(1);
// this is function for switch tab and take parameter index,when click on tab its update the index and chnage the tab
  const ngoHandler = (index) => {
    setActiveTab(index);
  };

  return (
    <>
{/* this intro part */}
<div className="row">
        <div className="text-column">
          <h1>Welcome to Abh<span style={{color:"orange"}}>idan</span></h1>
          <p style={{marginTop: "0.5rem", 
marginLeft: "1.25rem", 
fontSize: "1.125rem",
lineHeight: "1.75rem", 
fontWeight: "700", 
alignSelf: "flex-start", }}>Pleged to Support</p>
          <p className="inner-para"> We believe that everyone deserves access to basic human needs like
              food, water, shelter, and healthcare. Our purpose is to connect
              generous donors with reputable charities and non-profit
              organizations that are working to make the world a better place.
          </p>
          <Link to={"/about"}>
          <button className="btn">Read More</button></Link>
        </div>
        <div className="image-column">
          <img src={aboutImage1} alt="Example" />
        </div>
      </div>
      {/* end */}

    {/* this simple design code of circle  */}
      <div className="container bg-white pt-4">
        <div className="rowCircle">
          <h2 className="social-head">
            small donations make bigger impact on <br />
            someone's life, act today!
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2>
                    Greater <span style={{ color: "#eb9309" }}> Impact </span>
                  </h2>
                  <p>
                    Make a positive impact on individuals' lives with each
                    contribution, saving one person at a time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2>
                    Regular
                    <span className="circle-txt" style={{ color: "#eb9309" }}>
                      Updates
                    </span>
                  </h2>
                  <p>
                    Stay informed about the ongoing influence you've made by
                    receiving consistent updates on the impact you've created.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Circle">
                <div className="inner-circle">
                  <h2>
                    Hassle-
                    <span style={{ color: "#eb9309" }}>free contribution.</span>
                  </h2>
                  <p>We gladly receive contributions through various way</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nextrow">
            <div className="Circle">
              <div className="inner-circle">
                <h2>
                  100%{" "}
                  <span className="circle-txt" style={{ color: "#eb9309" }}>
                    verified Ngo's
                  </span>
                </h2>
                <p>
                  Thorough and rigorous protocols for conducting due diligence
                  with utmost precision.
                </p>
              </div>
            </div>

            <div className="Circle m-1">
              <div className="inner-circle">
                <h2>
                  Reliable
                  <span style={{ color: "#eb9309" }}>and Fortified.</span>
                </h2>
                <p>
                  Ngo's and donor's data is completely secure and encrypted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}

      {/*  how its work code and this is telling about how website work   */}
      <div className="how-it-works bg-white">
        <div className="subcontainer">
          <div className=" subcontainer-title_heading mb-3">
            <div className="subcontainer-section-headingWrapper">
              <div className="header   ">
                <h2 className="  font-bold">How it Works</h2>
                <div className="w-[70%] h-1 bg-yellow-400 rounded-md mt-1"></div>
              </div>
            </div>
          </div>

          <div className="subcontainer-buttons ">
            {/* here call function in inclick event and apply inline css using ternary operator for change the color */}
            <h2
              onClick={() => ngoHandler(1)}
              style={{ backgroundColor: activeTab === 1 ? "orange" : "white" }}
              className="switch"
            >
              For Donor's
            </h2>
            <h2
              onClick={() => ngoHandler(2)}
              style={{ backgroundColor: activeTab === 2 ? "orange" : "white" }}
              className="switch-1"
            >
              For NGO's
            </h2>
          </div>
{/* here when activetab state have index value is 1 ,its show donor part and if 2, show ngo  */}
          {activeTab === 1 && (
            <div className="subcontainer-donor ">
              <div className="donor-section">
                <div className=" content">
                  <div className="subcontainer-card">
                    <img className="images" src={slider1} alt="slider1" />
                    <h1 className=" details">LOGIN AND SIGNUP</h1>
                    <p className=" description">
                      "Browse different campaigns and select a cause".
                    </p>
                  </div>
                </div>
                <div className="content">
                  {" "}
                  <div className="subcontainer-card">
                    <img className="images" src={slider2} alt="slider2" />
                    <h1 className=" details">SELECT PRODUCTS AND NGO'S</h1>
                    <p className=" description">
                      "Select products And NGO'S you wish to donate".
                    </p>
                  </div>
                </div>
                <div className="content">
                  {" "}
                  <div className="subcontainer-card">
                    <img className="images" src={slider3} alt="slider3" />
                    <h1 className=" details">
                      RAISE REQUEST AND WAIT FOR CONFIRMATION.
                    </h1>

                    <p className=" description">
                      "Fill the donation form and wait for response from the
                      NGO's".
                    </p>
                  </div>
                </div>
                <div className="content">
                  {" "}
                  <div className="subcontainer-card">
                    <img className="images" src={slider4} alt="slider4" />
                    <h1 className=" details">DONATION EXECUTED</h1>
                    <p className=" description">
                      "After verifying the donation , give your donation".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="subcontainer-ngo">
              <div className="ngo-section">
                <div className=" content">
                  <div className="subcontainer-card">
                    <img className="images" src={slider5} alt="slider5" />
                    <h1 className=" details">FILL THE FORM</h1>
                    <p className=" description">
                      "Fill Request form TO GET CONNCTED WITH US".
                    </p>
                  </div>
                </div>

                <div className=" content">
                  <div className="subcontainer-card">
                    <img className="images" src={slider10} alt="slider10" />
                    <h1 className=" details">WAIT FOR VERIFICATION</h1>
                    <p className=" description">
                      "Our campaign manager will reach out based on the
                      enquiry".
                    </p>
                  </div>
                </div>

                <div className=" content">
                  <div className="subcontainer-card">
                    <img className="images" src={slider6} alt="slider7" />
                    <h1 className=" details">GET LISTED</h1>
                    <p className=" description">
                      "After verification from our side get listed in our NGO's
                      list" .
                    </p>
                  </div>
                </div>

                <div className=" content">
                  <div className="subcontainer-card">
                    <img className="images" src={slider8} alt="slider8" />
                    <h1 className=" details">Wait for the request</h1>
                    <p className=" description">
                      "Wait for a donor to get requested for donation".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Contact/>
      {/* end */}
    </>
  );
};

export default Home;
