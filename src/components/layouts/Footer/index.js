// dependencies:
import React from "react";

// ---- files:
import './style.css';


function Footer () {
    return (


        <div className="footer-container">
            <div className="footer-column">
                <h4>About</h4>
                <p>Short description about your company.</p>
            </div>
            <div className="footer-column">
                <h4>Products</h4>
                <ul>
                    <li><a href="#">Product 1</a></li>
                    <li><a href="#">Product 2</a></li>
                    <li><a href="#">Product 3</a></li>
                    <li><a href="#">Product 4</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contact</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <p>Address: 123 Street, City, Country</p>
                <p>Email: example@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
        </div>


    );
}

export default Footer;