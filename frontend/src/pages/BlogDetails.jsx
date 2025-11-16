import React from "react";
import { motion } from "framer-motion";
import BreadcrumbContact from "../components/BreadcrumbSection";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", delay },
    }),
};

export default function BlogDetails() {
    return (
        <div className="ScrollSmoother-content">

            {/* Breadcrumb */}
            <BreadcrumbContact name="Service Details" />

            <section className="blog-wrapper news-wrapper section-padding">
                <div className="container">
                    <div className="news-area">
                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details border-wrap mt-0">
                                    <div className="single-blog-post post-details mt-0">

                                        <div className="post-content pt-0">

                                            <motion.h2
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={fadeUp}
                                            >
                                                Crafting spaces that the <br /> reflect your style
                                            </motion.h2>

                                            <div className="post-meta mt-3">
                                                <span><i className="fal fa-user"></i>Shikhon .Ha</span>
                                                <span><i className="fal fa-comments"></i>15 Comments</span>
                                                <span><i className="fal fa-calendar-alt"></i>4th February 2024</span>
                                            </div>

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing, from how it works 
                                                to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance 
                                                marketing and how it can affect your company’s long-term success and profitability. 
                                            </p>

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing, from how it works 
                                                to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance 
                                                marketing and how it can affect your company’s long-term success and profitability. 
                                            </p>

                                            <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/post-4.jpg" alt="blog__img" className="single-post-image" />

                                            <h2>Creating Masterpieces One <br /> Room At A Time</h2>

                                            <p>
                                                Performance marketing is an approach to digital marketing or advertising where businesses only pay when a 
                                                specific result occurs. This result could be a new lead, sale, or other outcome agreed upon by the advertiser 
                                                and business. Performance marketing involves channels such as affiliate marketing, online advertising.
                                            </p>

                                            <blockquote>
                                                Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis
                                                eros. Cursus libero viverra tempus netus diam vestibulum
                                            </blockquote>

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing
                                            </p>

                                            <ul className="checked-list mb-4">
                                                <li>Cooking is love made visible</li>
                                                <li>We’re an open book</li>
                                                <li>100% goes to the field</li>
                                                <li>Received the highest grades</li>
                                            </ul>

                                            <h4>Easy & Most Powerful Server Platform.</h4>

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing, from how it works 
                                                to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance 
                                                marketing and how it can affect your company’s long-term success and profitability.
                                            </p>

                                            <img className="alignleft" src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/post-5.jpg" alt="blog__img" />

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing
                                            </p>

                                            <p>
                                                With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise that different 
                                                approaches to online marketing are becoming available. One of these new approaches is performance marketing 
                                                or digital performance marketing. Keep reading to learn all about performance marketing
                                            </p>

                                        </div>
                                    </div>

                                    {/* Removed Comment Section Completely */}

                                </div>
                            </div>

                            {/* RIGHT SIDEBAR */}
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar">

                                    {/* SEARCH */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="search_widget">
                                            <form action="#">
                                                <input type="text" placeholder="Keywords here...." />
                                                <button type="submit"><i className="fal fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* POPULAR FEEDS (with real images) */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Popular Feeds</h3>
                                        </div>

                                        <div className="popular-posts">

                                            <motion.div className="single-post-item" whileHover={{ scale: 1.05 }}>
                                                <div className="thumb">
                                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-2-150x150.jpg" alt="img" />
                                                </div>
                                                <div className="post-content">
                                                    <h5><a href="news-details.html">Crafting spaces that reflect your style</a></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>24th March 2024
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className="single-post-item" whileHover={{ scale: 1.05 }}>
                                                <div className="thumb">
                                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02-2-150x150.jpg" alt="img" />
                                                </div>
                                                <div className="post-content">
                                                    <h5><a href="news-details.html">Redefining the concept of the most living</a></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>25th March 2024
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className="single-post-item" whileHover={{ scale: 1.05 }}>
                                                <div className="thumb">
                                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/06-2-150x150.jpg" alt="img" />
                                                </div>
                                                <div className="post-content">
                                                    <h5><a href="news-details.html">Building dreams, one room at a the time</a></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>26th March 2024
                                                    </div>
                                                </div>
                                            </motion.div>

                                        </div>
                                    </div>

                                    {/* CATEGORIES */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget_categories">
                                            <ul>
                                                <li><a href="news.html">Space Craft Studio <span>02</span></a></li>
                                                <li><a href="news.html">Architecture Plus <span>05</span></a></li>
                                                <li><a href="news.html">Dream Home Designs <span>10</span></a></li>
                                                <li><a href="news.html">Urban Oasis <span>03</span></a></li>
                                                <li><a href="news.html">Interior Perfection <span>10</span></a></li>
                                                <li><a href="news.html">Blueprint Builders <span>03</span></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* SOCIAL */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Never Miss News</h3>
                                        </div>
                                        <div className="social-link">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-banner-section-2">
                <div className="container">
                    <div className="cta-banner-wrapper-2">
                        <div className="cta-image">
                            <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/cta-img.png" alt="cta-img" />
                            <div className="circle-shape">
                                <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/circle-border.png" alt="shape-img" />
                            </div>
                        </div>

                        <div className="section-title-area">
                            <div className="section-title mb-0">
                                <h2 className="text-white">
                                    Crafting spaces that <br /> the reflect style
                                </h2>
                            </div>

                            <a href="about.html" className="theme-btn bg-white padding-style">
                                Get In Touch
                                <i className="fas fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
