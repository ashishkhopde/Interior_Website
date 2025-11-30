import React from 'react'
import { motion } from "framer-motion";

import CtaSection from '../components/CtaSection'
import BreadcrumbContact from '../components/BreadcrumbSection'
import ContactForm from '../components/contact/ContactForm';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut", delay },
    }),
};

export default function Contact() {
    return (
        <div class="ScrollSmoother-content">

            {/* Breadcrumb Section Start */}
            <BreadcrumbContact name="Contact" />

            {/* Contact Info Section Start  */}
            <motion.section
                className="contact-Info-section section-padding pb-80 fix"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="contact-info-wrapper">
                        <div className="row g-0">

                            {/* Left Side - Google Map */}
                            <motion.div
                                className="col-xl-6 col-lg-6"
                                variants={fadeUp}
                                custom={0.2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7359.074193257688!2d75.88464809357912!3d22.745440700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd68ae1e6cdb%3A0x989c4e84caf4b82a!2sOrbit%20mall!5e0!3m2!1sen!2sin!4v1763295332084!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Map"></iframe>
                                </div>
                            </motion.div>

                            {/* Right Side - Contact Info */}
                            <motion.div
                                className="col-xl-6 col-lg-6"
                                variants={fadeUp}
                                custom={0.4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <div className="contact-info-content">
                                    <motion.h2
                                        className="splt-txt wow"
                                        data-splitting
                                        variants={fadeUp}
                                        custom={0.5}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        Contact Info
                                    </motion.h2>

                                    <motion.p
                                        className="wow fadeInUp"
                                        data-wow-delay=".5s"
                                        variants={fadeUp}
                                        custom={0.7}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        Cloud computing is a model for delivering on-demand computing
                                        resources over the internet. It can benefit your business.
                                    </motion.p>

                                    <div className="contact-info-area">
                                        <div className="row g-4">
                                            {/* Phone */}
                                            <motion.div
                                                className="col-lg-6 wow fadeInUp"
                                                variants={fadeUp}
                                                custom={0.8}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <div className="contact-info-items">
                                                    <div className="icon">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="splt-txt wow" data-splitting>
                                                            Phone
                                                        </h3>
                                                        <h6>
                                                            <a href="tel:+918109561993" className="me-3">
                                                                +91 810 956 1993
                                                            </a>

                                                        </h6>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Email */}
                                            <motion.div
                                                className="col-lg-6 wow fadeInUp"
                                                variants={fadeUp}
                                                custom={1.0}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <div className="contact-info-items">
                                                    <div className="icon">
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="splt-txt wow" data-splitting>
                                                            Email
                                                        </h3>
                                                        <h6>
                                                            <a href="mailto:nweaverarchitect@gmail.com" className="link lowercase">
                                                                {"nweaverarchitect@gmail.com"}
                                                            </a>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Location */}
                                            <motion.div
                                                className="col-lg-6 wow fadeInUp"
                                                variants={fadeUp}
                                                custom={1.2}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <div className="contact-info-items">
                                                    <div className="icon">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="splt-txt wow" data-splitting>
                                                            Location
                                                        </h3>
                                                        <h6>
                                                            LG/48A, Orbit Mall, A.B.Road vijay nagar, Indore, India, 452010
                                                        </h6>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Website */}
                                            <motion.div
                                                className="col-lg-6 wow fadeInUp"
                                                variants={fadeUp}
                                                custom={1.4}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                <div className="contact-info-items">
                                                    <div className="icon">
                                                        <i className="fas fa-link"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="splt-txt wow" data-splitting>
                                                            Website
                                                        </h3>
                                                        <h6>https://www.nweaverarchitect.in/</h6>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section Start */}
            <ContactForm />


            {/* Cta Section Start */}
            <CtaSection />

        </div>
    )
}
