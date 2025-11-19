import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function TestimonialSection() {
  useEffect(() => {
    new Swiper(".testimonial-slider", {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true, // 🔁 Infinite loop
      speed: 1000,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-next",
        prevEl: ".array-prev",
      },
    });
  }, []);

  return (
    <motion.section
      className="testimonial-section section-bg section-padding fix"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          className="section-title text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h6 className="wow fadeInUp">Clients Testimonial</h6>
          <h2 className="splt-txt wow" data-splitting>
            Architectural excellence <br /> interior bliss
          </h2>
        </motion.div>

        <motion.div
          className="testimonial-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>

          <div className="row g-0 align-items-center">
            {/* LEFT IMAGE */}
            <motion.div
              className="col-lg-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="testimonial-image bg-cover"
                style={{
                  backgroundImage: "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-9.jpg')",
                }}
              ></div>
            </motion.div>

            {/* RIGHT SLIDER */}
            <motion.div
              className="col-lg-6 mt-5 mt-lg-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="testimonial-area">
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper">
                    {/* Slide 1 */}
                    <div className="swiper-slide">
                      <div className="testimonial-items">
                        <div className="icon">
                          <i className="fal fa-quote-right"></i>
                        </div>

                        <div className="client-items">
                          <div
                            className="client-image bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://i.pinimg.com/736x/dc/22/55/dc225587b5e11e930bac100e99dc6ba3.jpg')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Sandeep Sharma</h3>
                            <span>Marketing Manager</span>
                          </div>
                        </div>

                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          {/* <i className="fas fa-star text-color"></i> */}
                        </div>

                        <p>
                          This architectural firm delivered innovation beyond what we imagined. The structure not only stands as a masterpiece but also embodies sustainability, efficiency, and timeless beauty.
                        </p>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="swiper-slide">
                      <div className="testimonial-items">
                        <div className="icon">
                          <i className="fal fa-quote-right"></i>
                        </div>

                        <div className="client-items">
                          <div
                            className="client-image bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://media.craiyon.com/2025-04-19/BzZvokeAT8eOiBp91pa6JA.webp')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Kanak Thakur</h3>
                            <span>Marketing Manager</span>
                          </div>
                        </div>

                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star text-color"></i>
                        </div>

                        <p>
                          The transformation of our home was done much more than we had expected. From lighting to furniture arrangement, every little thing was curated to perfection. We are extremely happy.
                        </p>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="swiper-slide">
                      <div className="testimonial-items">
                        <div className="icon">
                          <i className="fal fa-quote-right"></i>
                        </div>

                        <div className="client-items">
                          <div
                            className="client-image bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://www.shutterstock.com/image-photo/confident-young-indian-woman-holding-260nw-1443108653.jpg')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Aastha Joshi</h3>
                            <span>Marketing Manager</span>
                          </div>
                        </div>

                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          {/* <i className="fas fa-star text-color"></i> */}
                        </div>

                        <p>
                          I never imagined how much a well-thought-out interior could enhance my daily routine. The blend of aesthetics and practicality made my home feel both stylish and functional.
                        </p>
                      </div>
                    </div>
                    
                    {/* Slide 4 */}
                    <div className="swiper-slide">
                      <div className="testimonial-items">
                        <div className="icon">
                          <i className="fal fa-quote-right"></i>
                        </div>

                        <div className="client-items">
                          <div
                            className="client-image bg-cover"
                            style={{
                              backgroundImage:
                                "url('https://www.shutterstock.com/image-photo/handsome-smiling-young-man-portrait-260nw-2067491888.jpg')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Ankesh Singh</h3>
                            <span>Marketing Manager</span>
                          </div>
                        </div>

                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          {/* <i className="fas fa-star text-color"></i> */}
                        </div>

                        <p>
                          I never imagined how much a well-thought-out interior could enhance my daily routine. The blend of aesthetics and practicality made my home feel both stylish and functional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
