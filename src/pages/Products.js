import React from "react";
import './Products.css';

const Products = () => {
    return (
        <div className="products-container">
            <h1>Our Products</h1>
            <div className="product-category">
                <h2>Onboard Sensing and Communication (OSC™)</h2>
                <p>
                    The OSC™ line offers a low-power, compact wireless sensor network that is easily deployable
                    on any vehicle. This system continuously monitors key safety parameters and provides instant
                    alerts to both local and remote personnel, preventing accidents and enhancing overall train safety.
                </p>
                <div className="product-grid">
                    <div className="product-card">
                        <h3>OSC-B™</h3>
                        <p>
                            Provides continuous monitoring and early warnings of axle bearing failures. By surpassing the limitations of intermittent wayside monitoring systems, the OSC-B™ system effectively prevents train derailments, ensuring the safety of passengers and cargo.
                        </p>
                    </div>
                    <div className="product-card">
                        <h3>OSC-P™</h3>
                        <p>
                            Detects platform locations to prevent the accidental opening of train doors on the incorrect side. This enhances passenger safety at stations by providing precise, real-time location detection.
                        </p>
                    </div>
                </div>
            </div>
            <div className="product-category ehazid">
                <h2>E-HazID™ for HazMat Transportation Safety</h2>
                <p>
                    The E-HazID™ system features small, wireless sensor tags that attach to hazardous material (HazMat) packages.
                    These tags enable seamless retrieval of critical HazMat information, continuous remote monitoring, and real-time safety alerts,
                    ensuring secure transportation by truck, train, plane, or vessel.
                </p>
                <div className="product-card">
                    <h3>E-HazID™ System</h3>
                    <p>
                        Designed to enhance HazMat transportation safety, the E-HazID™ system continuously tracks hazardous materials in transit,
                        providing early warnings and immediate response capabilities for potential risks.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Products;
