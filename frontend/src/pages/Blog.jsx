import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import BreadcrumbContact from "../components/BreadcrumbSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay },
  }),
};

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const base = import.meta.env.VITE_BASE_URL; 
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${base}/blog`);
        setBlogs(res.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [base]);

  return (
    <div className="ScrollSmoother-content">
      {/* Breadcrumb Section */}
      <BreadcrumbContact name="Blog" />

      {/* News Section */}
      <motion.section
        className="news-section section-padding fix"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          {loading ? (
            <p className="text-center text-lg">Loading blogs...</p>
          ) : (
            <div className="row g-4">
              {blogs.length === 0 ? (
                <p className="text-center text-lg">No blogs found.</p>
              ) : (
                blogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.3 + index * 0.2}s`}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index * 0.2}
                  >
                    <div className="news-card-items style-2 mt-0">
                      <div
                        className="news-image bg-cover"
                        style={{
                          backgroundImage: `url('${blog.image}')`,
                        }}
                      ></div>

                      <div className="news-content">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </li>
                          <li>
                            <i className="far fa-user"></i> {blog.author}
                          </li>
                        </ul>

                        <h3>
                          <Link
                            to={`/blog-details/${blog._id}`}
                            onClick={() => scrollTo(0, 0)}
                          >
                            {blog.title}
                          </Link>
                        </h3>

                        <p>
                          {blog.description.length > 100
                            ? blog.description.slice(0, 100) + "..."
                            : blog.description}
                        </p>

                        <Link
                          to={`/blog-details/`}
                          className="link-btn"
                          onClick={() => scrollTo(0, 0)}
                        >
                          Read More <i className="far fa-plus"></i>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA + Footer */}
      <CtaSection />
      <Footer />
    </div>
  );
}
