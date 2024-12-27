import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Located in Irvine, California, and founded in 2002, Newport Sensors, Inc. strives to be a leader in
                innovative sensor and AI-driven data analytics. We specialize in designing advanced technologies for
                improving transportation safety.
            </p>
            <div className="about-details">
                <h2>Our Mission</h2>
                <ul>
                    <li>Develop advanced sensors and structural health monitoring solutions.</li>
                    <li>Deliver integrated systems for diagnostics and prognostics.</li>
                    <li>Enhance safety across transportation sectors worldwide.</li>
                </ul>
                <h2>Our Clients</h2>
                <p>
                    Our clientele includes highway infrastructure owners, utility companies, inspection and rehabilitation firms, and defense contractors.
                </p>
            </div>
        </div>
    );
};

export default About;
