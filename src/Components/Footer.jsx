import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {

    return (
        <section className="footer">
            <footer>
            <div className="left-down">
                <img src="/image/logo.jpg" alt="logo" width="170px" height="60px" />
            </div>
            <div className="sign">
                <h1><b>Sign up for new</b></h1>
                <h2><b>stories and offers</b></h2>
            </div>
            <div className="last1">
                <h3>Products</h3>
                <ul>
                    <li><a href="model.html">Phone Cases</a></li>
                    <li><a href="hoodies.html">Hoodies & Sweatshirts</a></li>
                </ul>
            </div>

            <div className="last2">
                <h3>Information & Support</h3>
                <ul>
                    <li><a href="aboutus.html">About us</a></li>
                    <li><a href="track.html">Track Order</a></li>
                    <li><a href="faq.html">FAQ's</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="refund.html">Refund Policy</a></li>
                    <li><a href="cancellation.html">Cancellation Policy</a></li>
                    <li><a href="#">Reviews</a></li>
                    
                </ul>
            </div>

            <div className="last3">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="model.html">Shop</a></li>
                    <li><a href="index.html">Official Merch</a></li>
                    <li><a href="customise.html">Customise</a></li>
                </ul>
            </div>

            <div className="last4">
                <h3>Do you have any</h3>
                <h1>question?</h1>
                <ul>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>

            <div className="email-container">
                <input type="email" placeholder="Your Email" />
                <button className="email-button">
                </button>
            </div>
            
            <div className="who">.
                <h1><b>Who we are? </b></h1>
            </div>
            <button id="showContentBtn22">🔽</button>
            <div id="content" className="content"  style={{display: "none"}}>
                
                <p><ul><li>With unique strategies and a notion to think outside the box, <b>Not Your Regular Cover</b> is a leading shopping portal in India. Tied up with all the major franchises, we look to bring the best of all worlds, with a dash of our own style. With a penchant for creativity, and a simple idea with big dreams,NYRC was started in 2024. Realizing the difficulty in getting our hands on premium merch in India, NYRC was established to change this for the better. We have worked really hard to build a platform to make sure the ever-present Pop Culture shares the same limelight in India just as much as anywhere else. More than hard work and perseverance, this can be attributed to something much more basic- love and adoring the figures we grew up with and wanting to make them a part of our everyday lives. Our biggest strength is our team. A lovely group of enigmatic people who share a collective love for Pop Culture, our team finds pleasure in devising both innovative and creative ideas to help us realize our dream of giving the Indian market merchandise from their favourite franchises, while making sure the signature of NYRC is not lost on them.</li></ul></p>
            </div>

            <div className="line"></div>

            <div className="bottom">
                <img src="/image/download (3).png" alt="social_handles" width="180px" height="50px" />
            </div>

            <div className="bottom1">
                <img src="/image/last.jpeg" alt="c-logo" width="30px" height="30px" />
                <p>2024,Not Your Regular Cover. Powered by NYRC Studios.</p>
            </div>
            </footer>
        </section>
    );
}

export default Footer;
