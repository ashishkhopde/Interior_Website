import React from "react";
import { motion } from "framer-motion";
import CtaSection from "../components/CtaSection";
import BreadcrumbContact from "../components/BreadcrumbSection";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", delay },
    }),
};

const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.4 } },
};

export default function ServiceDetails() {
    return (
        <div className="ScrollSmoother-content">

            {/* Breadcrumb Section Start */}
            <BreadcrumbContact name="Service Details" />

            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-5">

                            {/* Left Content */}
                            <div className="col-12 col-lg-8">
                                <motion.div
                                    className="service-details-items"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >

                                    {/* Main Image */}
                                    <motion.div
                                        className="service-image"
                                        variants={fadeUp}
                                        custom={0.2}
                                        whileHover="hover"
                                    >
                                        <motion.img
                                            src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/details-1.jpg"
                                            alt="img"
                                            variants={hoverScale}
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        className="details-content"
                                        variants={fadeUp}
                                        custom={0.4}
                                    >
                                        <h3 className="splt-txt wow" data-splitting>
                                            Redefining the concept of living
                                        </h3>

                                        <motion.p variants={fadeUp} custom={0.5} className="mt-3">
                                            There are many variations passages a This category focariatio of deign Redefining the an  concept of living This category focuses on the design and construction of bu and the arrangement furniture and decorative elements within them focariatio of deign
                                        </motion.p>

                                        <motion.p variants={fadeUp} custom={0.6} className="mt-4">
                                            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orr posu ere viverra .A eros jlobor Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliuam eros justo, posue lobortis non, viverra laoreet augue mattis. Aliquam eros justo, posuere loborti
                                        </motion.p>

                                        <ul className="list">
                                            {[
                                                "We are starting some laoreet matti ullamcorper mat ulla posue viverra",
                                                " Here is the biggest loborti vivea laoreet matti statemat ullamcorper posue ",
                                                "Starting some laoreetmat ullamcorper posue viverra .Aliquam eros",
                                            ].map((text, i) => (
                                                <motion.li
                                                    key={i}
                                                    variants={fadeUp}
                                                    custom={0.7 + i * 0.1}
                                                >
                                                    {text}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <h4 className="splt-txt wow" data-splitting>
                                            Service all details
                                        </h4>

                                        <motion.p variants={fadeUp} custom={1}>
                                            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                                        </motion.p>

                                        <div className="list-items">
                                            <ul className="d-list">
                                                {[
                                                    " Transform your space, transform your life",
                                                    "  Elevate your interior, elevate your lifestyle",
                                                    " Discover the beauty within your walls",
                                                    "Design your dream space, one room at a time",
                                                ].map((text, i) => (
                                                    <motion.li
                                                        key={i}
                                                        variants={fadeUp}
                                                        custom={1.1 + i * 0.1}
                                                        whileHover={{ x: 6 }}
                                                    >
                                                        <i className="far fa-chevron-double-right"></i>{text}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <motion.div
                                                className="icon-box"
                                                variants={fadeUp}
                                                custom={1.5}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <i className="flaticon-balcony"></i>
                                                <h4>Design Haven</h4>
                                                <p>Interior Harmony</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar">

                                    {/* Categories */}
                                    <motion.div
                                        className="single-sidebar-widget"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="widget-categories">
                                            <ul>
                                                {[
                                                    "Business Planning",
                                                    "Interior Harmony",
                                                    "The Style Studio",
                                                    "Ambiance Interiors",
                                                    "Inner Sanctum Designs",
                                                    "The Design Collective",
                                                ].map((text, i) => (
                                                    <motion.li
                                                        key={i}
                                                        variants={fadeUp}
                                                        custom={0.2 + i * 0.1}
                                                        whileHover={{ x: 6 }}
                                                    >
                                                        <i className="fas fa-chevron-circle-right me-3"></i>
                                                        <a href="service-details.html">{text}</a>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Contact Box */}
                                    <motion.div
                                        className="single-sidebar-widget bg-image bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/details-1.jpg')",
                                        }}
                                        variants={fadeUp}
                                        custom={1}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="contact-text">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <p>Need help?</p>
                                            <h3>
                                                <a href="tel:+8085550111">+(808) 555-0111</a>
                                            </h3>
                                            <p className="mt-3">
                                            Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply is ou our o dummy text
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Buttons */}
                                    <motion.div
                                        className="single-sidebar-widget mb-0"
                                        variants={fadeUp}
                                        custom={1.2}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <div className="download-service-doc">
                                            <a className="theme-btn text-center w-100 mb-3">Brochure</a>
                                            <a className="theme-btn style-2 w-100 mb-3">
                                                <i className="fal fa-file-pdf"></i> Download Brochure
                                            </a>
                                            <a className="theme-btn style-2 w-100">
                                                <i className="fal fa-file-pdf"></i> Company Details
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-banner-section-2">
                <div className="container">
                    <div className="cta-banner-wrapper-2">

                        <motion.div
                            className="cta-image"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/cta-img.png"
                                alt="cta-img"
                            />
                        </motion.div>

                        <motion.div
                            className="section-title-area"
                            initial="hidden"
                            whileInView="visible"
                        >
                            <motion.h2
                                className="text-white"
                                variants={fadeUp}
                                custom={0.3}
                            >
                                Crafting spaces that <br /> reflect style
                            </motion.h2>

                            <motion.a
                                href="about.html"
                                className="theme-btn bg-white padding-style"
                                variants={fadeUp}
                                custom={0.5}
                                whileHover={{ scale: 1.05 }}
                            >
                                Get In Touch
                                <i className="fas fa-long-arrow-right"></i>
                            </motion.a>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
}
