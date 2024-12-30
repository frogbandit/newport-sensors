import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/newportSensorsLogo.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo">
                <Link to="/">
                    <img src={logoImage} alt="Newport Sensors logo" />
                </Link>
            </div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About Us</Link>
                {/* <Link to="/contact">Contact Us</Link> */}
            </nav>
        </header>
    );
};

export default Header;
