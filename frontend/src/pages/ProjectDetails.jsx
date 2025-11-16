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

export default function ProjectDetails() {
    return (
        <div className="ScrollSmoother-content">

            {/* Breadcrumb Section */}
            <BreadcrumbContact name="Project Details" />

            {/* Fragment Start */}
            <>

                {/* Service Details Section Start */}
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row g-4">

                                {/* Sidebar */}
                                <div className="col-12 col-lg-4 order-2 order-md-1">
                                    <div className="main-sidebar">
                                        <motion.div
                                            className="single-sidebar-widget"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            custom={0.2}
                                        >
                                            <div className="project-catagory">
                                                <h3 className="splt-txt wow" data-splitting>
                                                    Architecture Plus
                                                </h3>
                                                <p>
                                                    There are many variations passages a This category focariations of deign
                                                </p>

                                                <ul>
                                                    <li>
                                                        Client
                                                        <span>Interior Design</span>
                                                    </li>
                                                    <li>
                                                        Year 
                                                        <span>December,2024</span>
                                                    </li>
                                                    <li>
                                                        Author
                                                        <span>Shikhon Islam</span>
                                                    </li>
                                                </ul>

                                                <div className="social-icon d-flex align-items-center">
                                                    <motion.a href="#" whileHover={{ scale: 1.2 }}>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </motion.a>
                                                    <motion.a href="#" whileHover={{ scale: 1.2 }}>
                                                        <i className="fab fa-twitter"></i>
                                                    </motion.a>
                                                    <motion.a href="#" whileHover={{ scale: 1.2 }}>
                                                        <i className="fab fa-vimeo-v"></i>
                                                    </motion.a>
                                                    <motion.a href="#" whileHover={{ scale: 1.2 }}>
                                                        <i className="fab fa-pinterest-p"></i>
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="project-details-items">

                                        {/* Main Image */}
                                        <motion.div
                                            className="project-image"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            custom={0.3}
                                            whileHover="hover"
                                        >
                                            <motion.img
                                                src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/details-1.jpg"
                                                alt="img"
                                                variants={hoverScale}
                                            />
                                        </motion.div>

                                        {/* Title + Text */}
                                        <motion.div
                                            className="project-details-content"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            custom={0.5}
                                        >
                                            <h2 className="splt-txt wow" data-splitting>
                                                Redefining the concept of living
                                            </h2>
                                            <p>
                                                There are many variations psages a This category focariations of deign Redefining the an  concept of  This category focuses on the design and construction of buildings and the arrangement furniture and decorative elements within them
                                            </p>

                                            {/* Bullet List */}
                                            <ul className="d-list">
                                                {[
                                                    "Transform your space, transform your life",
                                                    "Elevate your interior, elevate your lifestyle",
                                                    "Discover the beauty within your walls",
                                                    "Design your dream space, one room at a time",
                                                ].map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        variants={fadeUp}
                                                        custom={0.6 + index * 0.1}
                                                        whileHover={{ x: 8 }}
                                                    >
                                                        <i className="far fa-chevron-double-right"></i>
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        {/* Paragraphs */}
                                        <motion.p
                                            className="mt-5"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            custom={1}
                                        >
                                            There are many variations passages a This category focariations of dei Redefining the an  concept of living This category focuses on the desi construction of buildings and the arrangement furniture and decorative elements within them There are many variation passages a This category focariations of deign Redefining the an  concept of living This category focuses on the design
                                        </motion.p>

                                        <motion.p
                                            className="mt-3"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeUp}
                                            custom={1.1}
                                        >
                                            There are many variations passages a This category focariations of deign Redefining the an  concept of living This category focuses on the design and construction of buildingse arrangemen
                                        </motion.p>

                                        {/* 2 Column Section */}
                                        <div className="pro-details-items">
                                            <div className="row g-0">

                                                {/* Left Image */}
                                                <div className="col-xxl-6">
                                                    <motion.div
                                                        className="thumb"
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true }}
                                                        variants={fadeUp}
                                                        custom={1.2}
                                                        whileHover="hover"
                                                    >
                                                        <motion.img
                                                            src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/details-2.jpg"
                                                            alt="img"
                                                            variants={hoverScale}
                                                        />
                                                    </motion.div>
                                                </div>

                                                {/* Right Details */}
                                                <div className="col-xxl-6">
                                                    <div className="pro-details-content-items">

                                                        <motion.div
                                                            className="pro-details-cont"
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                            variants={fadeUp}
                                                            custom={1.3}
                                                        >
                                                            <h3 className="splt-txt wow" data-splitting>
                                                                The Architect's Touch
                                                            </h3>
                                                            <p>
                                                                There are many variations passages a  category focariations of deign Redefining the  concept of living This category focuses
                                                            </p>
                                                        </motion.div>

                                                        <motion.div
                                                            className="pro-details-cont"
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                            variants={fadeUp}
                                                            custom={1.4}
                                                        >
                                                            <h3 className="splt-txt wow" data-splitting>
                                                                Concept of living
                                                            </h3>
                                                            <p>
                                                                There are many variations passages a  category focariations of deign Redefining the  concept of living This category focuses
                                                            </p>
                                                            <p className="mt-3">
                                                                There are many variations passages a  category focariations of deign Redefining the  concept of living This category focuses
                                                            </p>
                                                        </motion.div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

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
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={0.3}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/cta-img.png" alt="cta-img" />
                                <div className="circle-shape">
                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/circle-border.png" alt="shape-img" />
                                </div>
                            </motion.div>

                            <div className="section-title-area">
                                <motion.div
                                    className="section-title mb-0"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={0.5}
                                >
                                    <h2 className="text-white">
                                        Crafting spaces that <br /> the reflect style
                                    </h2>
                                </motion.div>

                                <motion.a
                                    href="about.html"
                                    className="theme-btn bg-white padding-style"
                                    variants={fadeUp}
                                    custom={0.7}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Get In Touch
                                    <i className="fas fa-long-arrow-right"></i>
                                </motion.a>
                            </div>

                        </div>
                    </div>
                </section>

            </>
            {/* Fragment End */}

        </div>
    );
}
