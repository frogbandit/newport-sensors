import React from "react";
import './Products.css';
import bfaOscImage from "../assets/bfaOscImage.jpg";
import hazPakOscImage from "../assets/hazPakOscImage.png";
import doorSafeOscImage from "../assets/doorSafeOscImage.png";

const Products = () => {
    return (
        <div className="products-container">
            <h1 className="products-title">
            Onboard Sensing and Communication (OSC™) <span className="highlight">Products</span>
            </h1>
            <div className="product-category">
                <h2>Bearing Failure Alerts (BFA) <span className="highlight">OSC™</span></h2>
                <div className="image-container">
                    <img src={bfaOscImage} alt="BFA OSC" />
                </div>
                <div className="product-card">
                    <p>
                        The <strong>BFA OSC™</strong> is a compact, low-power wireless sensor that provides continuous monitoring of each bearing, including parameters such as temperature and vibration. Sensor data is transmitted to a server via an onboard control unit, enabling both onboard and remote monitoring.
                        Real-time alerts help detect bearing failures early, preventing train derailments and ensuring passenger and cargo safety.
                    </p>
                </div>
            </div>

            <div className="product-category">
                <h2>HazPak <span className="highlight">OSC™</span></h2>
                <div className="image-container">
                    <img src={hazPakOscImage} alt="HazPak OSC" />
                </div>
                <div className="product-card">
                    <p>
                        The <strong>HazPak OSC™</strong> system features small, wireless sensor tags that attach to hazardous material (HazMat) packages. These tags enable seamless retrieval of critical HazMat information, continuous remote monitoring, and real-time safety alerts, ensuring secure transportation by truck, train, plane, or vessel.
                        Designed to enhance HazMat transportation safety, the HazPak OSC™ system continuously tracks hazardous materials in transit, providing early warnings and immediate response capabilities for potential risks.
                    </p>
                </div>
            </div>

            <div className="product-category">
                <h2>DoorSafe <span className="highlight">OSC™</span></h2>
                <div className="image-container">
                    <img src={doorSafeOscImage} alt="DoorSafe OSC" />
                </div>
                <div className="product-card">
                    <p>
                        The <strong>DoorSafe OSC™</strong> system detects platform locations to prevent the accidental opening of train doors on the incorrect side.
                        It enhances passenger safety at stations by providing precise, real-time location detection.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Products;
