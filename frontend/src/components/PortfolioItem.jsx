import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PortfolioItem({ project, index, fadeUp }) {
  return (
    <motion.div
      key={project._id || index}
      className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.2}
    >
      <div className="portfolio-items">
        <div
          className="portfolio-image bg-cover"
          style={{ backgroundImage: `url('${project.image}')` }}
        >
          <div className="portfolio-content">
            <Link
              to={`/project-details/${project._id}`}
              className="icon"
              onClick={() => window.scrollTo(0, 0)}
            >
              <i className="fas fa-long-arrow-right"></i>
            </Link>
            <h3>
              <Link to={`/project-details/${project._id}`}>
                {project.projectTitle || "Untitled Project"}
              </Link>
            </h3>
            <p>
              {project.description?.slice(0, 60) || "No description"}...
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}