import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ For API requests

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: "easeOut", delay },
  }),
};

export default function NewsSection() {
  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch blog data from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const base = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${base}/blog`);
        // console.log("Fetched blogs:", response.data);
        setBlogs(response.data.blogs); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Initialize Swiper AFTER blogs are loaded
  useEffect(() => {
    if (blogs.length > 0) {
      new Swiper(".news-slider", {
        modules: [Navigation, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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
    }
  }, [blogs]);

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
              Crafting spaces that <br /> reflect your style
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
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div className="swiper-slide" key={blog._id || index}>
                  <div className="news-card-items">
                    <div
                      className="news-image bg-cover"
                      style={{
                        backgroundImage: `url(${blog.image})`,
                      }}
                    ></div>

                    <div className="news-content">
                      <ul>
                        <li>
                          <i className="fas fa-calendar-alt"></i>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </li>
                        <li>
                          <i className="far fa-user"></i>
                          {blog.author || "Admin"}
                        </li>
                      </ul>

                      <h3>
                        <Link to={`/blog-details/${blog._id}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="line-clamp-2">{blog.description}</p>

                      <Link
                        to={`/blog-details/${blog._id}`}
                        className="link-btn"
                        onClick={() => scrollTo(0, 0)}
                      >
                        Read More <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-5 w-full">Loading blogs...</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
