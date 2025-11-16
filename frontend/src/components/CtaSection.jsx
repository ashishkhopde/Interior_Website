import React from "react";
import { motion } from "framer-motion";
import circle from "../assets/img/circle-border.png";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: "easeOut", delay },
  }),
};

export default function CtaSection() {
  return (
    <motion.section
      className="cta-banner-section-2"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="cta-banner-wrapper-2">
          {/* Image with Circle Shape */}
          <motion.div
            className="cta-image wow fadeInUp"
            data-wow-delay=".3s"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
          >
            <img
              src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/cta-img.png"
              alt="cta-img"
            />
            <div className="circle-shape">
              <img src={circle} alt="shape-img" />
            </div>
          </motion.div>

          {/* Text & Button */}
          <div className="section-title-area">
            <div className="section-title mb-0">
              <motion.h2
                className="text-white wow fadeInUp"
                data-wow-delay=".5s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.5}
              >
                Crafting spaces that <br /> the reflect style
              </motion.h2>
            </div>

            <motion.a
              href="/about"
              className="theme-btn bg-white padding-style wow fadeInUp"
              data-wow-delay=".7s"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.7}
            >
              <Link to="/contact" onClick={()=>scrollTo(0,0)}>
              Get In Touch
              <i className="fas fa-long-arrow-right"></i>
              </Link>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
