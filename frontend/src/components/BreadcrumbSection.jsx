import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0.5, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export default function BreadcrumbContact({ name }) {
  return (
    <motion.div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{
        backgroundImage:
          "url('https://modinatheme.com/oraxis/wp-content/uploads/2024/10/breadcrumb.jpg')",
      }}
      initial={{ opacity: 1, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1.03 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <div className="page-heading">
          <motion.h1
            className="wow fadeInUp"
            data-wow-delay=".3s"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
          >
            {name}
          </motion.h1>

          <motion.ul
            className="breadcrumb-items wow fadeInUp"
            data-wow-delay=".5s"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>{name}</li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
