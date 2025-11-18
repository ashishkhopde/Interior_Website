import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


import cushing from '../assets/img/cushion.png';
import email from '../assets/img/email.svg';


import Footer from '../components/Footer';
import BrandSection from '../components/BrandSection';
import AchievementSection from '../components/AchievementSection';
import AboutUsSection from '../components/AboutUsSection';
import PortfolioSection from '../components/home/Portfolio';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/home/TeamSection';
import NewsSection from '../components/home/NewsSection';
import HomeHeroSection from '../components/home/HomeHeroSection';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeOut", delay },
    }),
};

export default function Home() {
    return (
        <div className="ScrollSmoother-content">
            {/* Hero Section Start  */}
            <HomeHeroSection />

            {/* About Section Start */}
            <AboutUsSection />

            {/* Service Section Start */}
            <section
                className="service-section fix section-padding section-bg bg-cover"
                style={{ backgroundImage: "url('assets/img/service/bg-shape.jpg')" }}
            >
                <div className="bg-shape">
                    <img
                        src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/bg-shape.jpg"
                        alt="shape"
                    />
                </div>

                <div className="container">
                    <div className="service-wrapper">
                        <div className="row g-4">
                            {/* Left Side */}
                            <div className="col-xl-9 col-lg-12">
                                <div className="service-left">
                                    <div className="section-title">
                                        <motion.h6
                                            className="wow fadeInUp"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.2}
                                        >
                                            Latest Service
                                        </motion.h6>

                                        <motion.h2
                                            className="splt-txt wow"
                                            data-splitting="true"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.4}
                                        >
                                            Creating spaces the that <br /> inspire
                                        </motion.h2>
                                    </div>

                                    <div className="row g-4">
                                        {/* Service Item 1 */}
                                        <motion.div
                                            className="col-lg-4 col-md-6 wow fadeInUp"
                                            data-wow-delay=".3s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.3}
                                        >
                                            <div className="service-items mt-4">
                                                <div className="icon">
                                                    <i className="flaticon-bed-1"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="splt-txt wow" data-splitting="true">
                                                        <a href="service-details.html">Architecture Plus</a>
                                                    </h3>
                                                    <p>This category focuses on the design and man</p>
                                                    <Link to="/service-details" className="link-btn" onClick={() => scrollTo(0, 0)}>
                                                        Read More <i className="fas fa-long-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Service Item 2 */}
                                        <motion.div
                                            className="col-lg-4 col-md-6 wow fadeInUp"
                                            data-wow-delay=".5s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.5}
                                        >
                                            <div className="service-items">
                                                <div className="icon">
                                                    <i className="flaticon-floor-plan-1"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="splt-txt wow" data-splitting="true">
                                                        <a href="service-details.html">Urban Oasis</a>
                                                    </h3>
                                                    <p>This category focuses on the design and man</p>
                                                    <Link to="/service-details" className="link-btn" onClick={() => scrollTo(0, 0)}>
                                                        Read More <i className="fas fa-long-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Service Item 3 */}
                                        <motion.div
                                            className="col-lg-4 col-md-6 wow fadeInUp"
                                            data-wow-delay=".7s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.7}
                                        >
                                            <div className="service-items mt-4">
                                                <div className="icon">
                                                    <i className="flaticon-balcony"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="splt-txt wow" data-splitting="true">
                                                        <a href="service-details.html">Blueprint Builders</a>
                                                    </h3>
                                                    <p>This category focuses on the design and man</p>
                                                    <Link to="/service-details" className="link-btn" onClick={() => scrollTo(0, 0)}>
                                                        Read More <i className="fas fa-long-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side Image */}
                            <motion.div
                                className="col-xl-3 col-lg-6 wow fadeInUp"
                                data-wow-delay=".9s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.9}
                            >
                                <div
                                    className="service-image bg-cover"
                                    style={{
                                        backgroundImage:
                                            "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-6.jpg')",
                                    }}
                                ></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Process Section Start */}
            <section className="work-process section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <motion.h6
                            className="wow fadeInUp"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.2}
                        >
                            Work Process
                        </motion.h6>

                        <motion.h2
                            className="splt-txt wow"
                            data-splitting="true"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.4}
                        >
                            Your space the a most <br /> elevate without life
                        </motion.h2>
                    </div>

                    <div className="row">
                        {/* Item 1 */}
                        <motion.div
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                        >
                            <div className="work-process-items">
                                <h6>01</h6>
                                <h3 className="splt-txt wow" data-splitting="true">
                                    The Design Studio
                                </h3>
                                <p>
                                    There are many variations of passages variations of design the
                                    main thing is the best service they provide
                                </p>
                                <div className="icon">
                                    <i className="flaticon-frame-1"></i>
                                </div>
                            </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.5}
                        >
                            <div className="work-process-items active">
                                <h6>02</h6>
                                <h3 className="splt-txt wow" data-splitting="true">
                                    Arrival of the fittest
                                </h3>
                                <p>
                                    There are many variations of passages variations of design the
                                    main thing is the best service they provide
                                </p>
                                <div className="icon">
                                    <i className="flaticon-painting-brush"></i>
                                </div>
                            </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay=".7s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.7}
                        >
                            <div className="work-process-items">
                                <h6>03</h6>
                                <h3 className="splt-txt wow" data-splitting="true">
                                    Delivering excellence
                                </h3>
                                <p>
                                    There are many variations of passages variations of design the
                                    main thing is the best service they provide
                                </p>
                                <div className="icon">
                                    <i className="flaticon-table"></i>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brand Section Start */}
            <BrandSection />

            {/* Achievement Section Start */}
            <AchievementSection />

            {/* Portfolio Section Start */}
            <PortfolioSection />

            {/* Testimonial Section Start */}
            <TestimonialSection />

            {/* Team Section Start */}
            <TeamSection />

            {/* Faq Section Start */}
            <motion.section
                className="faq-section section-padding section-bg fix"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row">
                            {/* Left Side */}
                            <motion.div
                                className="col-lg-6"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                            >
                                <div className="faq-content">
                                    <div className="section-title">
                                        <motion.h6
                                            className="wow fadeInUp"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.3}
                                        >
                                            FAQ
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
                                            Elevate your interior <br /> the elevate lifestyle
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
                                        Aliquam eros justo, posuere loborti laorematullamcorper the posuer viverra
                                        Aliquam eroo, posuere loborti Aliquam eros justo, posu laorematullamcorper
                                        the a posuer viverra .Aliquam
                                    </motion.p>

                                    <motion.div
                                        className="faq-box-area wow fadeInUp"
                                        data-wow-delay=".7s"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={0.7}
                                    >
                                        <div className="box-items">
                                            <div className="icon">
                                                <img src={cushing} alt="icon-img" />
                                            </div>

                                            <div className="content">
                                                <h3>
                                                    <span className="count">2</span>k+
                                                </h3>
                                                <h4>Project Completed</h4>
                                            </div>
                                        </div>

                                        <p>
                                            Lorem Ipsum is simply dummy text of the a <br />
                                            printing and typesetting industry.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Side - Accordion */}
                            <motion.div
                                className="col-lg-6 mt-5 mt-lg-0 "
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                            >
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                        {/* FAQ 1 */}
                                        <motion.div
                                            className="accordion-item mb-4 wow fadeInUp"
                                            data-wow-delay=".3s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.5}
                                        >
                                            <h5 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#faq1"
                                                    aria-expanded="true"
                                                    aria-controls="faq1"
                                                >
                                                    <span>1.</span> What Experience the art of interior ?
                                                </button>
                                            </h5>

                                            <div
                                                id="faq1"
                                                className="accordion-collapse show"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of the
                                                    most useful that is so beautiful.
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* FAQ 2 */}
                                        <motion.div
                                            className="accordion-item mb-4 wow fadeInUp "
                                            data-wow-delay=".5s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.6}
                                        >
                                            <h5 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#faq2"
                                                    aria-expanded="false"
                                                    aria-controls="faq2"
                                                >
                                                    <span>2.</span> What Let your interior tell your story?
                                                </button>
                                            </h5>

                                            <div
                                                id="faq2"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body ">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of the
                                                    most useful that is so beautiful.
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* FAQ 3 */}
                                        <motion.div
                                            className="accordion-item mb-4 wow fadeInUp"
                                            data-wow-delay=".7s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.7}
                                        >
                                            <h5 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#faq3"
                                                    aria-expanded="false"
                                                    aria-controls="faq3"
                                                >
                                                    <span>3.</span> What Experience the art of interior?
                                                </button>
                                            </h5>

                                            <div
                                                id="faq3"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of the
                                                    most useful that is so beautiful.
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* FAQ 4 */}
                                        <motion.div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay=".9s"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.9}
                                        >
                                            <h5 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#faq4"
                                                    aria-expanded="false"
                                                    aria-controls="faq4"
                                                >
                                                    <span>4.</span> Who Create a sanctuary in your own?
                                                </button>
                                            </h5>

                                            <div
                                                id="faq4"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordion"
                                            >
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of the
                                                    most useful that is so beautiful.
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
            {/* Cta Banner Section Start */}
            <motion.section
                className="cta-banner-section fix"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.div
                        className="cta-banner-wrapper"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                    >
                        {/* Icon */}
                        <motion.div
                            className="icon wow fadeInUp"
                            data-wow-delay=".3s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                        >
                            <img src={email} alt="img" />
                        </motion.div>

                        {/* Content */}
                        <div className="content">
                            <motion.h2
                                className="splt-txt wow"
                                data-splitting
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                            >
                                Subscribe to Our Newsletter
                            </motion.h2>

                            <motion.p
                                className="wow fadeInUp"
                                data-wow-delay=".5s"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.6}
                            >
                                Interior design encompasses the art and science of enhancing the
                                interior of a space to achieve a healthier and more aesthetically
                                pleasing environment. It involves
                            </motion.p>

                            <motion.div
                                className="newsletter-items"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.8}
                            >
                                <div className="form-clt wow fadeInUp" data-wow-delay=".7s">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                </div>

                                <motion.button
                                    className="theme-btn hover-white wow fadeInUp"
                                    data-wow-delay=".9s"
                                    type="submit"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={1.0}
                                >
                                    <span>
                                        <Link to="/Contact" onClick={() => scrollTo(0, 0)}>
                                            Subscribe Now <i className="far fa-arrow-right"></i>
                                        </Link>
                                    </span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pricing Section Start */}
            <motion.section
                className="pricing-section fix section-padding"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container">
                    {/* Section Title */}
                    <motion.div
                        className="section-title text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                    >
                        <h6 className="wow fadeInUp">Pricing Plane</h6>
                        <h2 className="splt-txt wow" data-splitting>
                            Unleash the potential <br /> of your space
                        </h2>
                    </motion.div>

                    {/* Pricing Grid */}
                    <div className="row">
                        {/* Card 1 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".3s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.3}
                        >
                            <div className="pricing-box-items">
                                <div className="pricing-image">
                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/13-2.jpg" alt="pricing-img" />
                                </div>
                                <div className="pricing-content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="shop-details.html">AesthetiCore</a>
                                    </h3>
                                    <p>Lorem Ipsum is simply the dummy man</p>
                                    <h4>$25.00</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".5s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.5}
                        >
                            <div className="pricing-box-items">
                                <div className="pricing-image">
                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/12-2.jpg" alt="pricing-img" />
                                </div>
                                <div className="pricing-content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="shop-details.html">Luxe Living</a>
                                    </h3>
                                    <p>Lorem Ipsum is simply the dummy man</p>
                                    <h4>$45.00</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".7s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.7}
                        >
                            <div className="pricing-box-items">
                                <div className="pricing-image">
                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/11-2.jpg" alt="pricing-img" />
                                </div>
                                <div className="pricing-content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="shop-details.html">Artful Interiors</a>
                                    </h3>
                                    <p>Lorem Ipsum is simply the dummy man</p>
                                    <h4>$30.00</h4>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".9s"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.9}
                        >
                            <div className="pricing-box-items">
                                <div className="pricing-image">
                                    <img src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/13-2.jpg" alt="pricing-img" />
                                </div>
                                <div className="pricing-content">
                                    <h3 className="splt-txt wow" data-splitting>
                                        <a href="shop-details.html">Elite Interiors</a>
                                    </h3>
                                    <p>Lorem Ipsum is simply the dummy man</p>
                                    <h4>$19.00</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* News Section Start */}
            <NewsSection />

        </div>
    )
}
