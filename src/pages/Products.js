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
                        In the United States, approximately 1,705 train derailments occur annually, with axle bearing failures being a major contributing factor. Current wayside monitoring stations, typically placed 30 miles apart, often fail to detect bearing failures in time to prevent derailments.
                        The <strong>BFA OSC™</strong> system addresses this issue with compact, easy-to-install wireless sensors that provide continuous, real-time monitoring of each bearing. When a bearing begins to fail, the system instantly alerts users via their mobile devices, enabling prompt action to prevent accidents.
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
