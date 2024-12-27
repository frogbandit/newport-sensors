import React from "react";
import "./Home.css";
import bridgeImage from '../assets/bridgeImage.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>
                    Welcome to <span className="highlight">Newport Sensors</span>
                </h1>
                <p className="tagline">Defining the Future of Transportation Safety</p>
                {/* <button className="cta-button">Learn More</button> */}
            </div>
            <div className="home-mission">
                <h2>Our Mission</h2>
                <p>
                    Newport Sensors, Inc. is a leading innovator in sensor and AI-driven data analytics,
                    dedicated to addressing complex transportation safety challenges. We design, develop,
                    and commercialize advanced technologies that enhance safety across the transportation
                    sector.
                </p>
            </div>
            <div className="home-image">
                <img src={bridgeImage} alt="Bridge showcasing transportation safety" />
            </div>
        </div>
    );
};

export default Home;
