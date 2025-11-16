import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut", delay },
  }),
};

export default function PortfolioSection() {
  useEffect(() => {
    new Swiper(".portfolio-slider", {
      modules: [Navigation, Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
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
      className="portfolio-section fix section-padding"
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
          <div className="section-title">
            <h6 className="wow fadeInUp">Latest Portfolio</h6>
            <h2 className="splt-txt wow" data-splitting="true">
              Transforming houses <br /> into homes
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

        {/* Slider */}
        <motion.div
          className="portfolio-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
        >
          <div className="swiper portfolio-slider">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="portfolio-items">
                  <div
                    className="portfolio-image bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/01-3.jpg')",
                    }}
                  >
                    <div className="portfolio-content">
                      <Link to ="/project-details" className="icon" onClick={()=>scrollTo(0,0)}>
                        <i className="fas fa-long-arrow-right" ></i>
                      </Link>
                      <h3>
                        <a href="project-details.html">Interior Perfection</a>
                      </h3>
                      <p>
                        This category focuses on the design and <br />
                        construction of buildings
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="portfolio-items">
                  <div
                    className="portfolio-image bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02-3.jpg')",
                    }}
                  >
                    <div className="portfolio-content">
                      <Link to ="/project-details" className="icon" onClick={()=>scrollTo(0,0)}>
                        <i className="fas fa-long-arrow-right" ></i>
                      </Link>
                      <h3>
                        <a href="project-details.html">Interior Perfection</a>
                      </h3>
                      <p>
                        This category focuses on the design and <br />
                        construction of buildings
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="portfolio-items">
                  <div
                    className="portfolio-image bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/03-3.jpg')",
                    }}
                  >
                    <div className="portfolio-content">
                      <Link to ="/project-details" className="icon" onClick={()=>scrollTo(0,0)}>
                        <i className="fas fa-long-arrow-right" ></i>
                      </Link>
                      <h3>
                        <a href="project-details.html">Interior Perfection</a>
                      </h3>
                      <p>
                        This category focuses on the design and <br />
                        construction of buildings
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="swiper-slide">
                <div className="portfolio-items">
                  <div
                    className="portfolio-image bg-cover"
                    style={{
                      backgroundImage:
                        "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/04-3.jpg')",
                    }}
                  >
                    <div className="portfolio-content">
                      <Link to ="/project-details" className="icon" onClick={()=>scrollTo(0,0)}>
                        <i className="fas fa-long-arrow-right" ></i>
                      </Link>
                      <h3>
                        <a href="project-details.html">Interior Perfection</a>
                      </h3>
                      <p>
                        This category focuses on the design and <br />
                        construction of buildings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
