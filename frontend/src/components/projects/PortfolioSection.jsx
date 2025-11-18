import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project`);
        setProjects(res.data.project || []); // ✅ matches backend key
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <motion.section
      className="portfolio-section fix section-padding"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="portfolio-wrapper style-2">
        <div className="row g-4">
          {projects.length > 0 ? (
            projects.map((proj, index) => (
              <PortfolioItem
                key={proj._id}
                project={proj}
                index={index}
                fadeUp={fadeUp}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No projects found.</p>
          )}
        </div>

        {/* Pagination placeholder */}
        <motion.div
          className="page-nav-wrap mt-5 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.8}
        >
          <ul>
            <li>
              <a className="page-numbers" href="#">
                <i className="fal fa-long-arrow-left"></i>
              </a>
            </li>
            <li><a className="page-numbers" href="#">01</a></li>
            <li><a className="page-numbers" href="#">02</a></li>
            <li><a className="page-numbers" href="#">..</a></li>
            <li><a className="page-numbers" href="#">10</a></li>
            <li><a className="page-numbers" href="#">11</a></li>
            <li>
              <a className="page-numbers" href="#">
                <i className="fal fa-long-arrow-right"></i>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
