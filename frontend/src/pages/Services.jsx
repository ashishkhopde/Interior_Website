import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import Footer from '../components/Footer'
import CtaSection from '../components/CtaSection'
import BreadcrumbContact from '../components/BreadcrumbSection'
import ServicesContect from '../components/services/ServicesContect'

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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
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
                                    <Link to="/service-details" className="link-btn" onClick={()=>scrollTo(0,0)}>
                                        Read More <i className="fas fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section Start */}
            <ServicesContect/>
            {/* Cta Section Start */}
            <CtaSection />

        </div>
    )
}
