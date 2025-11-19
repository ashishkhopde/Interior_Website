import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shape from "../assets/img/shape.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay },
  }),
};

export default function AchievementSection() {
  return (
    <section className="achievement-section fix section-bg section-padding pt-0">
      <div className="shape-left">
        <img src={shape} alt="shape" />
      </div>

      <div className="container">
        <div className="achievement-wrapper">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className="achievement-content">
                <div className="section-title">
                  <motion.h6
                    className="wow fadeInUp"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                  >
                    Our Achievement
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
                    Building dreams one <br /> room at a time
                  </motion.h2>
                </div>

                <motion.p
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.6}
                >
                 We have consistently delivered exceptional designs that exceed client expectations. Our work has helped brands enhance their identity and create lasting impressions. With each project, we push creativity further to achieve award-worthy results.
                </motion.p>

                <motion.div
                  className="about-button wow fadeInUp"
                  data-wow-delay=".7s"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.8}
                >
                  <Link to="/about" className="theme-btn bg-transparent" onClick={() => scrollTo(0, 0)}>
                    Read More <i className="fas fa-long-arrow-right"></i>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* RIGHT COUNTER SECTION */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="counter-area">
                <div className="row g-4">
                  {/* Counter 1 */}
                  <motion.div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                  >
                    <div className="counter-item">
                      <div className="icon">
                        <i className="flaticon-frame"></i>
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">90</span>+
                        </h2>
                        <p>Projects Done</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Counter 2 */}
                  <motion.div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.5}
                  >
                    <div className="counter-item">
                      <div className="icon">
                        <i className="flaticon-window-5"></i>
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">900</span>+
                        </h2>
                        <p>Team member</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Counter 3 */}
                  <motion.div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".7s"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.7}
                  >
                    <div className="counter-item">
                      <div className="icon">
                        <i className="flaticon-blueprint-2"></i>
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">700</span>+
                        </h2>
                        <p>Client review</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Counter 4 */}
                  <motion.div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay=".9s"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.9}
                  >
                    <div className="counter-item">
                      <div className="icon">
                        <i className="flaticon-layer"></i>
                      </div>
                      <div className="content">
                        <h2>
                          <span className="count">80</span>+
                        </h2>
                        <p>Wining Award</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
