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
                                "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-1.png')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Michael Ramirez</h3>
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
                          I recently attended their workshop, a transformative
                          experience. The content was engaging, the presenters
                          were knowledgeable and passionate.
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
                                "url('assets/img/testimonial/01.png')",
                            }}
                          ></div>
                          <div className="client-content">
                            <h3>Lucas Hudson</h3>
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
                          I recently attended their workshop, a transformative
                          experience. The content was engaging, the presenters
                          were knowledgeable and passionate.
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
