import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: "easeOut", delay },
  }),
};

export default function NewsSection() {
  useEffect(() => {
    new Swiper(".news-slider", {
      modules: [Navigation, Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true, // 🔁 Infinite loop
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".array-next",
        prevEl: ".array-prev",
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
      className="news-section section-padding pt-0 fix"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-title-area"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          <div className="section-title text-left">
            <h6 className="wow fadeInUp">Latest blog and news</h6>
            <h2 className="splt-txt wow" data-splitting="true">
              Crafting spaces that the <br /> reflect your style
            </h2>
          </div>

          <motion.div
            className="array-button wow fadeInUp"
            data-wow-delay=".5s"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
          >
            <button className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </motion.div>
        </motion.div>

        {/* News Slider */}
        <motion.div
          className="swiper news-slider"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{
                    backgroundImage: "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/07-2.jpg')",
                  }}
                ></div>

                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      October 19, 2024
                    </li>
                    <li>
                      <i className="far fa-user"></i>
                      By admin
                    </li>
                  </ul>

                  <h3>
                    <a href="news-details.html">
                      Redefining the concept of living
                    </a>
                  </h3>

                  <a href="news-details.html" className="link-btn">
                    Read More <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{
                    backgroundImage: "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/08-1.jpg')",
                  }}
                ></div>

                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      October 19, 2024
                    </li>
                    <li>
                      <i className="far fa-user"></i>
                      By admin
                    </li>
                  </ul>

                  <h3>
                    <a href="news-details.html">
                      Crafting spaces that the reflect your style
                    </a>
                  </h3>

                  <a href="news-details.html" className="link-btn">
                    Read More <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>


                        {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{
                    backgroundImage: "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/08-1.jpg')",
                  }}
                ></div>

                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      October 19, 2024
                    </li>
                    <li>
                      <i className="far fa-user"></i>
                      By admin
                    </li>
                  </ul>

                  <h3>
                    <a href="news-details.html">
                      Crafting spaces that the reflect your style
                    </a>
                  </h3>

                  <a href="news-details.html" className="link-btn">
                    Read More <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>


            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="news-card-items">
                <div
                  className="news-image bg-cover"
                  style={{
                    backgroundImage: "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/07-2.jpg')",
                  }}
                ></div>

                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fas fa-calendar-alt"></i>
                      October 19, 2024
                    </li>
                    <li>
                      <i className="far fa-user"></i>
                      By admin
                    </li>
                  </ul>

                  <h3>
                    <a href="news-details.html">
                      Unleash the potential of your space
                    </a>
                  </h3>

                  <a href="news-details.html" className="link-btn">
                    Read More <i className="fas fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
