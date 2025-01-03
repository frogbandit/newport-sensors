import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="overlay"></div> {/* Mask overlay */}
            <div className="home-content">
                <h1 className="home-title">
                    Introducing OSC™ Technology for Transportation Safety
                </h1>
                <p className="home-details">
                    Newport Sensors' cutting-edge wireless <strong>Onboard Sensing and Communication (OSC™)</strong> platform provides continuous monitoring and real-time alerts for problems such as hazardous material tracking, package integrity breaches, and train axle bearing failures.
                </p>
                <p className="home-footer">
                    Newport Sensors, Inc. develops innovative sensor technologies to tackle critical safety challenges.
                </p>
                <div className="cta-button-container">
                    <Link to="/products" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
