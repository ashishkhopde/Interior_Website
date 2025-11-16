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

export default function Projects() {
    return (
        <div class="ScrollSmoother-content">

            {/* Breadcrumb Section Start */}
            <BreadcrumbContact name="Projects" />

            {/* Portfolio Section Start */}
            <motion.section
                className="portfolio-section fix section-padding"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="portfolio-wrapper style-2">
                    <div className="row g-4">
                        {/* Portfolio Items */}
                        {[
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-3.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02-3.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/03-3.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/04-3.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/12-1.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/13-1.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/14-1.jpg",
                            "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/15.jpg",
                        ].map((img, index) => (
                            <motion.div
                                key={index}
                                className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index * 0.2}
                            >
                                <div className="portfolio-items">
                                    <div
                                        className="portfolio-image bg-cover"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    >
                                        <div className="portfolio-content">
                                            <a href="project-details.html" className="icon">
                                                <i className="fas fa-long-arrow-right"></i>
                                            </a>
                                            <h3>
                                                <a href="project-details.html">Interior Perfection</a>
                                            </h3>
                                            <p>
                                                This category focuses on the design and <br /> construction
                                                of buildings
                                            </p>
                                        </div>
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
                        custom={1.8}
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
