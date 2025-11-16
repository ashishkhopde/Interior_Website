import React from 'react';
import { motion } from "framer-motion";


import Footer from '../components/Footer';
import CtaSection from '../components/CtaSection';
import BrandSection from '../components/BrandSection';
import AchievementSection from '../components/AchievementSection';
import AboutUsSection from '../components/AboutUsSection';
import { Link } from 'react-router-dom';
import TestimonialSection from '../components/TestimonialSection';
import BreadcrumbSection from '../components/BreadcrumbSection';

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut", delay },
    }),
};

export default function About() {
    return (
        <div class="ScrollSmoother-content">

            {/* Breadcrumb Section Start */}
            <BreadcrumbSection name="About Us" />

            {/* About Section Start */}
            <AboutUsSection />

            {/* Work Process Section Start */}
            <motion.section
                className="work-process-section fix section-padding pt-0"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="work-process-wrapper style-2">
                        <div className="section-title text-center">
                            <motion.h6
                                className="wow fadeInUp"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.1}
                            >
                                work Process
                            </motion.h6>

                            <motion.h2
                                className="wow fadeInUp"
                                data-wow-delay=".3s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.3}
                            >
                                Redefining the <br /> Interior of living
                            </motion.h2>
                        </div>

                        <div className="row">
                            {/* Item 1 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".2s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Blueprint Builders
                                        </h3>
                                        <h2 className="number">01</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 2 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".6s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Interior scape Design
                                        </h3>
                                        <h2 className="number">03</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 3 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".6s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Interior scape Design
                                        </h3>
                                        <h2 className="number">03</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 4 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".8s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.5}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Conceptual Spaces
                                        </h3>
                                        <h2 className="number">04</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 5 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".8s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.6}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Inspire Design Group
                                        </h3>
                                        <h2 className="number">05</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 6 */}
                            <motion.div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay=".9s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.7}
                            >
                                <div className="work-process-items-2">
                                    <div className="work-process-content">
                                        <h3 className="splt-txt wow" data-splitting>
                                            Modern Living Spaces
                                        </h3>
                                        <h2 className="number">06</h2>
                                        <p>
                                            This category focuses on the design construction of buildings and the arrangement
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Brand Section Start */}
            <BrandSection />

            {/* Achievement Section Start */}
            <AchievementSection />

            {/* Testimonial Section Start */}
            <TestimonialSection />

            {/* Cta Section Start */}
            <CtaSection />


        </div>
    )
}
