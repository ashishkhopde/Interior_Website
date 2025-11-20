import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import BreadcrumbContact from '../components/BreadcrumbSection';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut", delay },
    }),
};

export default function Pricing() {

    const plans = [
        { icon: "flaticon-bed-1", price: "₹4,999", name: "Basic Plan" },
        { icon: "flaticon-room", price: "₹24,999", name: "Hard Plan" },
        { icon: "flaticon-blueprint-2", price: "₹14,999", name: "Easy Plan" },
        { icon: "flaticon-patio", price: "₹70,000", name: "Good Plan" },
        { icon: "flaticon-windows", price: "₹120,000", name: "Strong Plan" },
        { icon: "flaticon-frame-1", price: "₹34,999", name: "Not Hard Plan" },
    ];

    return (
        <div class="ScrollSmoother-content" >
            {/* Breadcrumb Section Start */}
            <BreadcrumbContact name="Pricing" />

            {/* Pricing Section Start */}
            <motion.section
                className="pricing-section-2 fix section-padding"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="row g-4">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay={`${0.3 + index * 0.2}s`}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index * 0.2}
                            >
                                <div className="pricing-card-items">
                                    <div className="icon">
                                        <i className={plan.icon}></i>
                                    </div>

                                    <div className="pricing-header">
                                        <h2>
                                            {plan.price} <span>/mo</span>
                                        </h2>
                                        <h3>{plan.name}</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text <br /> of the printing.
                                        </p>
                                    </div>

                                    <ul>
                                        <li>
                                            <i className="far fa-chevron-double-right"></i>
                                            Inner Sanctum Designs
                                        </li>
                                        <li>
                                            <i className="far fa-chevron-double-right"></i>
                                            The Design Collective
                                        </li>
                                        <li>
                                            <i className="far fa-chevron-double-right"></i>
                                            Modern Edge Design
                                        </li>
                                        <li>
                                            <i className="far fa-chevron-double-right"></i>
                                            Let your interior tell
                                        </li>
                                    </ul>

                                    <div className="pricing-button">
                                        <Link to="/contact" className="theme-btn theme-bg-2">
                                            Purchase now <i className="fas fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <motion.div
                        className="page-nav-wrap mt-5 text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1.5}
                    >
                        <ul>
                            <li>
                                <a className="page-numbers" href="#">
                                    <i className="fal fa-long-arrow-left"></i>
                                </a>
                            </li>
                            <li><a className="page-numbers" href="#">01</a></li>
                            <li><a className="page-numbers" href="#">02</a></li>
                            <li><a className="page-numbers" href="#">..</a></li>
                            <li><a className="page-numbers" href="#">10</a></li>
                            <li><a className="page-numbers" href="#">11</a></li>
                            <li>
                                <a className="page-numbers" href="#">
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            {/* Cta Section Start */}
            <CtaSection />

        </div>
    )
}
