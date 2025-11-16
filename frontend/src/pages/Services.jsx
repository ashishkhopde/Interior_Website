import React from 'react'
import { motion } from "framer-motion";

import Footer from '../components/Footer'
import CtaSection from '../components/CtaSection'
import BreadcrumbContact from '../components/BreadcrumbSection'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut", delay },
    }),
};


export default function Services() {
    return (
        <div class="ScrollSmoother-content">

            {/* Breadcrumb Section Start */}
            <BreadcrumbContact name="Services" />

            {/* Service Section Start */}
            <motion.section
                className="service-section fix section-padding"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="row g-4">
                        {/* Service Item 1 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-bed-1"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Architecture Plus</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 2 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.5}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-floor-plan-1"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Urban Oasis</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 3 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".7s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.7}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-balcony"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Blueprint Builders</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 4 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".9s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.9}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-room"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Room Layout</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 5 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1.0}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-skyline"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Textile Design</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 6 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1.2}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-plan"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Lighting Fixtures</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 7 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".7s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1.4}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-floor-plan"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Wallpaper Install</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Item 8 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".9s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1.6}
                        >
                            <div className="service-items style-2">
                                <div className="icon">
                                    <i className="flaticon-patio"></i>
                                </div>
                                <div className="content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="service-details.html">Custom Shelving</a>
                                    </h3>
                                    <p>This category focuses on the design and man</p>
                                    <a href="service-details.html" className="link-btn">
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section Start */}
            <motion.section
                className="contact-section fix section-bg section-padding"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="contact-wrapper-2">
                        <div className="section-title">
                            <motion.h2
                                className="splt-txt wow"
                                data-splitting
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                            >
                                Leave a Comment
                            </motion.h2>
                        </div>

                        <form
                            action="#"
                            id="contact-form"
                            method="POST"
                            className="contact-form-items mt-4 mt-md-0"
                        >
                            <div className="row g-4">
                                {/* Name */}
                                <motion.div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".3s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.3}
                                >
                                    <div className="form-clt">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                        <div className="icon">
                                            <i className="far fa-user"></i>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".5s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.5}
                                >
                                    <div className="form-clt">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                        />
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".7s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.7}
                                >
                                    <div className="form-clt">
                                        <input
                                            type="text"
                                            name="number"
                                            id="number"
                                            placeholder="Phone Number"
                                        />
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Choose Services */}
                                <motion.div
                                    className="col-lg-6 wow fadeInUp"
                                    data-wow-delay=".8s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.8}
                                >
                                    <div className="form-clt">
                                        <div className="nice-select" tabIndex="0">
                                            <span className="current">Choose Services</span>
                                            <ul className="list">
                                                <li
                                                    data-value="1"
                                                    className="option selected focus"
                                                >
                                                    Default sorting
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by popularity
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by average rating
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by latest
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    className="col-lg-12 wow fadeInUp"
                                    data-wow-delay=".9s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.9}
                                >
                                    <div className="form-clt">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message here.."
                                        ></textarea>
                                        <div className="icon">
                                            <i className="fas fa-paper-plane"></i>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    className="col-lg-7 wow fadeInUp"
                                    data-wow-delay="1.1s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={1.1}
                                >
                                    <button type="submit" className="theme-btn padding-style">
                                        Appointment Now <i className="fas fa-long-arrow-right"></i>
                                    </button>
                                </motion.div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.section>

            {/* Cta Section Start */}
            <CtaSection />

        </div>
    )
}
