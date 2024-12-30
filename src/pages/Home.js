import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImage from "../assets/homeImage.jpg";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1 className="home-title">
                    Introducing OSC™ Technology for <span className="highlight">Transportation Safety</span>
                </h1>
            </div>

            <div className="home-image">
                <div className="image-container">
                    <img src={homeImage} alt="Showcasing transportation" />
                    <p className="image-credit">
                        Image by <a href="https://www.istockphoto.com/portfolio/Tryaging?mediatype=photography" target="_blank" rel="noopener noreferrer">Tryaging</a>, from iStockPhoto.com
                    </p>
                </div>
            </div>

            <div className="home-details">
                <p>

                    Newport Sensors' cutting-edge wireless <strong>Onboard Sensing and Communication (OSC™)</strong> technology platform provides continuous monitoring and real-time alerts, addressing critical transportation safety challenges such as hazardous material tracking, package integrity breaches, and train axle bearing failures.
                </p>
            </div>

            <div className="cta-button-container">
                <Link to="/products" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
                    Learn More About Our Products
                </Link>
            </div>
        </div>
    );
};

export default Home;
