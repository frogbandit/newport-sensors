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
                        In the United States, approximately 1,705 train derailments occur annually, with axle bearing failures being a major contributing factor.
                        Current wayside monitoring stations, typically placed 30 miles apart, often fail to detect bearing failures in time to prevent derailments.
                        The <strong>BFA OSC™</strong> system addresses this issue with compact, easy-to-install wireless sensors that provide continuous, real-time monitoring of each bearing.
                        When a bearing begins to fail, the system instantly alerts users via their mobile devices, enabling prompt action to prevent accidents.
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
                        The <strong>HazPak OSC™</strong> tackles two critical safety challenges in the transportation of hazardous materials (Hazmat): the limitations of physical labels and the absence of real-time incident alerts.
                        Physical labels are susceptible to damage and mislabeling, which can significantly impede emergency response efforts and result in environmental disasters.
                        HazPak OSC introduces compact, wireless sensor tags that integrate electronic ID and sensors, designed to be easily attached to Hazmat packages.
                        This innovative system dramatically improves the accuracy of Hazmat labeling while enabling, for the first time, timely detection of package failures and real-time incident alerts. By addressing these vulnerabilities, HazPak OSC effectively prevents mishaps and ensures safer handling of hazardous materials.
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
                        Accidents occur when passengers fall onto live tracks due to train doors opening on the wrong side at stations.
                        <strong>DoorSafe OSC™</strong> addresses this critical safety issue by introducing compact wireless sensors that are easily attachable to any train.
                        These sensors detect the presence of platforms and prevent the accidental opening of doors that do not face a platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Products;
