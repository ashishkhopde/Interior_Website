import React from 'react'
import { motion } from "framer-motion";

import Footer from '../components/Footer'
import CtaSection from '../components/CtaSection'
import BreadcrumbContact from '../components/BreadcrumbSection'
import { Link } from 'react-router-dom';
import PortfolioSection from '../components/PortfolioSection';

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
            <PortfolioSection />
            

            {/* Cta Section Start */}
            <CtaSection />


        </div>
    )
}
