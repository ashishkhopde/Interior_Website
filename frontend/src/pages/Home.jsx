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
import NewsSection from "../components/home/NewsSection";
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
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="container">
                    <div className="service-wrapper">
                        <div className="row g-4 items-center">
                            {/* Left Side */}
                            <div className="col-xl-9 col-lg-12">
                                <div className="service-left">
                                    <div className="section-title mb-4">
                                        <motion.h6
                                            className="wow fadeInUp text-sm md:text-base"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.2}
                                        >
                                         Services
                                        </motion.h6>

                                        <motion.h2
                                            className="splt-txt wow text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
                                            data-splitting="true"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={0.4}
                                        >
                                            Creating spaces that <br /> inspire
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
                                            <div className="service-items p-4 md:p-5 h-full flex flex-col justify-between">
                                                <div className="icon text-3xl md:text-4xl mb-3">
                                                    <i className="flaticon-bed-1"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                                                        <Link to="/service-details">Architectural design </Link>
                                                    </h3>
                                                    <p className="text-sm md:text-base mb-3 leading-relaxed">
                                                   We design spaces that are smart, strong, and built to inspire. Every structure reflects creativity, purpose, and precision.
                                                    </p>
                                                    <Link
                                                        to="/service-details"
                                                        className="link-btn text-sm md:text-base"
                                                        onClick={() => scrollTo(0, 0)}
                                                    >
                                                        Read More <i className="fas fa-long-arrow-right ml-1"></i>
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
                                            <div className="service-items p-4 md:p-5 h-full flex flex-col justify-between">
                                                <div className="icon text-3xl md:text-4xl mb-3">
                                                    <i className="flaticon-floor-plan-1"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                                                        <Link to="/service-details">Interior design</Link>
                                                    </h3>
                                                    <p className="text-sm md:text-base mb-3 leading-relaxed">
                                                  We design spaces that are stylish, comfortable, and made to inspire. Every interior reflects creativity, warmth, and precision.                                                    </p>
                                                    <Link
                                                        to="/service-details"
                                                        className="link-btn text-sm md:text-base"
                                                        onClick={() => scrollTo(0, 0)}
                                                    >
                                                        Read More <i className="fas fa-long-arrow-right ml-1"></i>
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
                                            <div className="service-items p-4 md:p-5 h-full flex flex-col justify-between">
                                                <div className="icon text-3xl md:text-4xl mb-3">
                                                    <i className="flaticon-balcony"></i>
                                                </div>
                                                <div className="content">
                                                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                                                        <Link to="/service-details">Landscape design </Link>
                                                    </h3>
                                                    <p className="text-sm md:text-base mb-3 leading-relaxed">
                                                    We design outdoor spaces that are natural, refreshing, and built to inspire. Every landscape reflects beauty, balance, and precision.                                                    </p>
                                                    <Link
                                                        to="/service-details"
                                                        className="link-btn text-sm md:text-base"
                                                        onClick={() => scrollTo(0, 0)}
                                                    >
                                                        Read More <i className="fas fa-long-arrow-right ml-1"></i>
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
                                    className="service-image bg-cover rounded-2xl h-[350px] md:h-[450px]w-full"
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
                                        Hvillas is a very modern and creative template that has been carefully crafted to suit any interior design website. Certainly, Hvillas will help you to build an out sanding period.
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
                                            Successfully completed a wide range of creative and client-focused projects, each delivered with precision and excellence.
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
                className="pricing-section fix section-padding bg-white py-20"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <motion.div
                        className="section-title text-center mb-12"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                    >
                        <h6 className="text-lg font-semibold text-gray-500 uppercase tracking-widest">
                            Pricing Plan
                        </h6>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
                            Unleash the potential <br /> of your space
                        </h2>
                    </motion.div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "AesthetiCore",
                                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
                                desc: [
                                    "✔ Space Layout Planning",
                                    "✔ Color & Material Guidance",
                                    "✔ 2 Design Revisions",
                                    "✔ Basic Concept Moodboard",
                                ],
                                price: "₹80 / sq. ft.",
                            },
                            {
                                title: "Luxe Living",
                                img: "https://5.imimg.com/data5/BI/FL/NS/SELLER-20263862/residential-interior-design-service.jpg",
                                desc: [
                                    "✔ Architectural Design",
                                    "✔ Project Management",
                                    "✔ Full project management services",
                                    "✔ Coordination with contractors",
                                ],
                                price: "₹150 / sq. ft.",
                            },
                            {
                                title: "Artful Interiors",
                                img: "https://i.pinimg.com/736x/60/64/12/6064126958e7136ee9c1be88f2057740.jpg",
                                desc: [
                                    "✔ End-to-End Design Execution & QA",
                                    "✔ Material Selection",
                                    "✔ Interior Styling Guidance",
                                    "✔ Expert Consultation",
                                ],
                                price: "₹250 / sq. ft.",
                            },
                            {
                                title: "Elite Interiors",
                                img: "https://img.staticmb.com/mbimages/interiorDesignerCMS/decorPartner/1461/projectImage/Living-Room-Design-Ideas-by-shashi-interiors-Interior-designer-ghaziabad.jpg.webp",
                                desc: [
                                    "✔ Architectural Design",
                                    "✔ Consultation with principal architect",
                                    "✔ Site analysis & feasibility study",
                                    "✔ Premium Support",
                                ],
                                price: "₹1500 / sq. ft.",
                            },
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                className="pricing-box-items rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col"
                                data-wow-delay={`${0.3 + i * 0.2}s`}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.3 + i * 0.2}
                            >
                                <div className="pricing-image h-52 overflow-hidden">
                                    <img
                                        src={plan.img}
                                        alt={plan.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="pricing-content flex flex-col justify-between flex-1 p-6 text-center">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                            <Link to="/services" onClick={() => scrollTo(0, 0)}>
                                                {plan.title}
                                            </Link>
                                        </h3>

                                        {/* ✅ Fixed UL Tag */}
                                        <ul className="text-gray-600 text-sm leading-relaxed space-y-1 text-left inline-block">
                                            {plan.desc.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to="/services" onClick={() => scrollTo(0, 0)}>
                                        <h4 className="text-xl font-bold text-indigo-600 mt-6 lowercase">
                                            {plan.price}
                                        </h4>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>



            {/* News Section Start */}
            <NewsSection />

        </div>
    )
}
