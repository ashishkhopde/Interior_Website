import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import axios from "axios";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: "easeOut", delay },
  }),
};

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);

  // ✅ Fetch Projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const base = import.meta.env.VITE_BASE_URL; 
        const res = await axios.get(`${base}/project`);
        setProjects(res.data.project);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Initialize Swiper after projects load
  useEffect(() => {
    if (projects.length > 0) {
      new SwiperCore(".portfolio-slider", {
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
    }
  }, [projects]);

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
            <h6 className="wow fadeInUp">Latest Projects</h6>
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

        {/* Swiper Slider */}
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
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <div className="swiper-slide" key={project._id || index}>
                    <div className="portfolio-items">
                      <div
                        className="portfolio-image bg-cover"
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                      >
                        <div className="portfolio-content">
                          <Link
                            to={`/project-details/${project._id}`}
                            className="icon"
                            onClick={() => scrollTo(0, 0)}
                          >
                            <i className="fas fa-long-arrow-right"></i>
                          </Link>
                          <h3>
                            <Link to={`/project-details/${project._id}`}>
                              {project.projectTitle || "Untitled Project"}
                            </Link>
                          </h3>
                          <p className="line-clamp-2">
                            {project.description?.slice(0, 100) || ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center w-full py-5">Loading projects...</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
