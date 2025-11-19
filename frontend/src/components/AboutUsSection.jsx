import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import founder from "../assets/img/founder.jpeg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeOut", delay },
    }),
};

export default function AboutUsSection() {
    return (
        <section className="about-section fix section-padding pt-0">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row align-items-center">
                        {/* LEFT SIDE */}
                        <div className="col-lg-6">
                            <div className="about-left-items">
                                <div className="dot-shape float-bob-y">
                                    <img
                                        src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/dot.png"
                                        alt="shape-img"
                                    />
                                </div>

                                <div className="row g-4">
                                    <motion.div
                                        className="col-lg-5 col-md-5 wow fadeInUp"
                                        data-wow-delay=".3s"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.3}
                                    >
                                        <div className="about-counter-items">
                                            <h2>
                                                <span className="count">25</span>+
                                            </h2>
                                            <h5>
                                                Years Of <br /> experience
                                            </h5>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="col-lg-7 col-md-7 wow fadeInUp"
                                        data-wow-delay=".5s"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.5}
                                    >
                                        <div className="about-image-1">
                                            <img
                                                src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01.jpg"
                                                alt="about-img"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="col-lg-12 wow fadeInUp"
                                        data-wow-delay=".7s"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.7}
                                    >
                                        <div
                                            className="about-image-2 bg-cover"
                                            style={{
                                                backgroundImage:
                                                    "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02.jpg')",
                                            }}
                                        >
                                            <div className="client-items float-bob-y">
                                                <div
                                                    className="clinet-img bg-cover"
                                                    style={{
                                                        backgroundImage:
                                                            `url(${founder})`,
                                                    }}
                                                ></div>

                                                <div className="content">
                                                    <h4>Nikhar Sharma</h4>
                                                    <p>Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="about-content">
                                <div className="section-title">
                                    <motion.h6
                                        className="wow fadeInUp"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.2}
                                    >
                                        About US
                                    </motion.h6>

                                    <motion.h2
                                        className="splt-txt wow"
                                        data-splitting
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.4}
                                    >
                                        We are a group of architects who help you build your dreams.
                                    </motion.h2>
                                </div>

                                <motion.p
                                    className="mt-3 mt-md-0 wow fadeInUp"
                                    data-wow-delay=".5s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.5}
                                >
                                    Architecture and interior company must be doing some incredible work—shaping spaces that are both functional and visually stunning! Whether you're designing structures or crafting interiors, your expertise likely combines creativity.
                                </motion.p>

                                <motion.p
                                    className="mt-4 wow fadeInUp"
                                    data-wow-delay=".7s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.7}
                                >
                                    Carefully crafted to suit any interior design website. Certainly, N Weaver will help you to build an out sanding period.
                                </motion.p>

                                <motion.div
                                    className="about-button wow fadeInUp"
                                    data-wow-delay=".9s"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.9}
                                >
                                    <Link to="/about" className="theme-btn" onClick={() => scrollTo(0, 0)}>
                                        Read More
                                        <i className="fas fa-long-arrow-right"></i>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
