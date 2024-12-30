import React from "react";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">
                About <span className="highlight">Us</span>
            </h1>
            <p className="about-description">
                Headquartered in California and New York, Newport Sensors Inc. was founded in 2002 by visionary researchers and skilled engineers.
                The company has established itself as a leader in the research, development, and production of advanced sensor and wireless communication technologies as well as AI-powered data analytics.
                Our products address some of the most pressing safety challenges in transportation.
                With extensive in-house capabilities including hardware manufacturing and software development for embedded systems and cloud computing we deliver innovative solutions tailored to meet critical industry needs.
            </p>

            {/* <div className="about-section">
                <h2>Our <span className="highlight">Mission</span></h2>
                <ul className="about-list">
                    <li>Develop advanced sensors and structural health monitoring solutions.</li>
                    <li>Deliver integrated systems for diagnostics and prognostics.</li>
                    <li>Enhance safety across transportation sectors worldwide.</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Our <span className="highlight">Clients</span></h2>
                <p className="about-description">
                    Our clientele includes highway infrastructure owners, utility companies, inspection and rehabilitation firms, and defense contractors.
                </p>
            </div> */}

            <div className="contact-section">
                <h2>Contact <span className="highlight">Us</span></h2>
                <div className="contact-details">
                    <p>We’d love to hear from you! Feel free to reach out to us at <a href="mailto:info@newportsensors.com">info@newportsensors.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
