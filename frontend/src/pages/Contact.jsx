import React from 'react'
import { motion } from "framer-motion";

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
                                                            <a href="tel:0123456789101" className="me-3">
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
                                                        <h6>www.example.com</h6>
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
            <motion.section
                className="w-full bg-grey py-16 px-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    {/* GRID FIXED → 2 Columns always on large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl shadow-lg">
                        {/* LEFT SIDE FORM */}
                        <motion.div
                            className="p-8 sm:p-12 flex flex-col justify-start"
                            variants={fadeUp}
                            custom={0.2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h6
                                className="text-gray-500 font-semibold"
                                variants={fadeUp}
                                custom={0.3}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                Contact Us
                            </motion.h6>

                            <motion.h2
                                className="text-4xl font-bold mt-2 mb-6"
                                variants={fadeUp}
                                custom={0.4}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                Get In Touch
                            </motion.h2>

                            <motion.form
                                className="space-y-5"
                                variants={fadeUp}
                                custom={0.5}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.input
                                        className="border border-gray-300 rounded-md px-4 py-3"
                                        placeholder="Your Name"
                                        variants={fadeUp}
                                        custom={0.6}
                                    />
                                    <motion.input
                                        className="border border-gray-300 rounded-md px-4 py-3"
                                        placeholder="Your Email"
                                        variants={fadeUp}
                                        custom={0.7}
                                    />
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.input
                                        className="border border-gray-300 rounded-md px-4 py-3"
                                        placeholder="Phone Number"
                                        variants={fadeUp}
                                        custom={0.8}
                                    />
                                    <motion.input
                                        className="border border-gray-300 rounded-md px-4 py-3"
                                        placeholder="Subject"
                                        variants={fadeUp}
                                        custom={0.9}
                                    />
                                </div>

                                {/* Message */}
                                <motion.textarea
                                    className="border border-gray-300 rounded-md px-4 py-3 h-32 resize-none"
                                    placeholder="Message here.."
                                    variants={fadeUp}
                                    custom={1.0}
                                />

                                {/* THE BUTTON */}
                                <motion.div
                                    className="pt-4"
                                    variants={fadeUp}
                                    custom={1.1}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <a
                                        className="theme-btn bg-grey padding-style wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        Submit Now
                                        <i className="fas fa-long-arrow-right"></i>
                                    </a>
                                </motion.div>
                            </motion.form>
                        </motion.div>

                        {/* RIGHT SIDE IMAGE */}
                        <motion.div
                            className="hidden lg:block h-full"
                            variants={fadeUp}
                            custom={0.3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://modinatheme.com/oraxis/wp-content/uploads/2024/11/contact-1.jpg"
                                className="w-full h-full object-cover"
                                alt="Contact"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>


            {/* Cta Section Start */}
            <CtaSection />

        </div>
    )
}
