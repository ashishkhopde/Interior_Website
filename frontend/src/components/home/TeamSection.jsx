import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


import light from "../../assets/img/light.png"; 
import one from "../../assets/img/team/nweaverHR.jpg"; 
import two from "../../assets/img/team/nweaverCE.jpg"; 
import three from "../../assets/img/archi_nimadi.jpg"; 
import four from "../../assets/img/team/teamMember4.jpg"; 

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay },
  }),
};

export default function TeamSection() {
  useEffect(() => {
    new Swiper(".team-slider", {
      modules: [Pagination, Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true, // 🔁 Infinite loop
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-dot",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <motion.section
      className="team-section fix section-padding"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="light-shape">
        <img src={light} alt="shape-img" />
      </div>

      <div className="container">
        <motion.div
          className="section-title text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <h6 className="wow fadeInUp">Our expert team</h6>
          <h2 className="splt-txt wow" data-splitting>
            Unleash the potential <br /> of your space
          </h2>
        </motion.div>

        <motion.div
          className="swiper team-slider"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="single-team-items">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: `url(${one})`,
                  }}
                >
                  <div className="team-content">
                    <p>HR</p>
                    <h3>
                      <a href="team-details.html">Neha Sharma</a>
                    </h3>

                    <div className="social-profile">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="single-team-items">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: `url(${two})`,
                  }}
                >
                  <div className="team-content">
                    <p>Civil Engineer</p>
                    <h3>
                      <a href="team-details.html">R. P. Sharma</a>
                    </h3>

                    <div className="social-profile">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* slider 3 */}
            <div className="swiper-slide">
              <div className="single-team-items">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: `url(${three})`,
                  }}
                >
                  <div className="team-content">
                    <p>Principle Architect</p>
                    <h3>
                      <a href="team-details.html">Nikhar Sharma</a>
                    </h3>

                    <div className="social-profile">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="single-team-items">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: `url(${four})`,
                  }}
                >
                  <div className="team-content">
                    <p>Jr. Architect</p>
                    <h3>
                      <a href="team-details.html">Sunil Patil</a>
                    </h3>

                    <div className="social-profile">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Dots */}
          <div className="swiper-dot mt-5 text-center">
            <div className="dot"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
