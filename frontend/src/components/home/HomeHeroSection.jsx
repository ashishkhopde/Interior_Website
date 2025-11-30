import React from "react";
import { motion } from "framer-motion";

import stars from '../../assets/img/hero/star.png';

// Smooth fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0.5, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export default function HomeHeroSection() {
  return (
    <section className="hero-section hero-1 ">
      {/* Star Shape */}
      <div className="star-image">
        <img src={stars} alt="shape-img" />
      </div>

      {/* Floating Side Image */}
      <motion.div
        className="hero-image-2 wow fadeInUp mt-10.5"
        data-wow-delay=".4s"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.2}
      >
        <img
          src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02-1.jpg"
          alt="hero-img"
        />
      </motion.div>

      {/* Main Container */}
      <div className="container">
        <div className="row">
          <div className="col-lg-0"></div>

          {/* HERO TEXT AREA */}
          <div className="col-lg-7">
            <div className="hero-content">
              <motion.h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1}
              >
              N weaver architect <br/>Architectural firm
              </motion.h1>

              <motion.p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.3}
              >
                We are a group of architects, designers, engineers brand planners working together to build a better future. Our philosophy is base on a deep appreciation for the natural world
              </motion.p>
            </div>
          </div>

          {/* HERO IMAGE + CLIENT COUNTER */}
          <motion.div
            className="col-lg-5 wow fadeInUp"
            data-wow-delay=".7s"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.4}
          >
            <div
              className="hero-image bg-cover"
              style={{
                backgroundImage:
                  "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-1.jpg')",
              }}
            >
              <div className="client-items float-bob-y">
                <img
                  src="https://modinatheme.com/oraxis/wp-content/uploads/2024/10/client.png"
                  alt="img"
                />

                <div className="client-content">
                  <h3>
                    <span className="count">2,000</span>+
                  </h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
