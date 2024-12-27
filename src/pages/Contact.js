import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Feel free to reach out to us:</p>
            <div className="contact-details">
                <p>Email: <a href="mailto:info@newportsensors.com">info@newportsensors.com</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Blvd, Irvine, CA 92618</p>
            </div>
        </div>
    );
};

export default Contact;
