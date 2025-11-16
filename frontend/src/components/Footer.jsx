import React from 'react';

import logo from "../assets/img/interior-logo-shorted.jpeg";
import footerImg from "../assets/img/footer-shape.png"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="footer-section section-bg-2">
                <div className="shape-img">
                    <img src={footerImg} alt="shape-img"/>
                </div>

                <div className="container">
                    <div className="footer-widgets-wrapper style-2">
                        <div className="row">

                            {/* Logo + Social */}
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp " data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head w-40 md:ml-10 mx-auto">
                                        <Link to="/">
                                            <img src={logo} alt="logo-img" width={300}/>
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p className='md:mx-0 mx-auto'>It is a long established fact that a reader will be distracted</p>
                                        <div className="social-icon d-flex align-items-center md:mx-0 mx-[30%]">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* What We Offer */}
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>What We Offers</h3>
                                    </div>
                                    <ul className="list-items">
                                        {[
                                            "Architecture Plus",
                                            "Urban Oasis",
                                            "The Design Studio",
                                            "Blueprint Builders",
                                            "Renovation Nation"
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <a href="service-details.html">
                                                    <i className="fas fa-chevron-right"></i> {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* More Services */}
                            <div className="col-xl-3 col-lg-4 ps-lg-5 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>More Service</h3>
                                    </div>
                                    <ul className="list-items">
                                        {[
                                            "SpaceCraft Studio",
                                            "Interiorscape Design",
                                            "Architecture Plus",
                                            "Dream Home Designs",
                                            "Interior Perfection"
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <a href="service-details.html">
                                                    <i className="fas fa-chevron-right"></i> {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact</h3>
                                    </div>

                                    <div className="footer-content">

                                        {/* Email */}
                                        <div className="footer-input style-two mb-4">
                                            <input type="email" id="email2" placeholder="Your mail address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </div>

                                        {/* Address */}
                                        <div className="contact-info-area">
                                            <div className="contact-items">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Address</p>
                                                    <h4>LG/48A, Orbit Mall, A.B.Road vijay nagar, Indore, India</h4>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="contact-items">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Phone Number</p>
                                                    <h4>
                                                        <a href="tel:0123456789101">+91 810 956 1993</a>
                                                    </h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">

                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © <a href="/">Modinatheme</a> 2024 | All Rights Reserved
                            </p>

                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li><a href="/contact">Terms & Condition</a></li>
                                <li><a href="/contact">Privacy Policy</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </footer>

        </div>
    )
}
