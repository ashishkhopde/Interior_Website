import React from "react";
import { motion } from "framer-motion";
import "./BrandSection.css";

import brand1 from "../assets/img/brand/01.png";
import brand2 from "../assets/img/brand/02.png";
import brand3 from "../assets/img/brand/03.png";
import brand4 from "../assets/img/brand/04.png";
import brand5 from "../assets/img/brand/05.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function BrandSection() {
  return (
    <motion.div
      className="brand-section section-padding section-bg fix"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="main-moving">
        {/* First row of brands */}
        <div className="moving-group">
          <div className="moving">
            <div className="brand-image">
              <img src={brand1} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand2} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand3} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand4} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand5} alt="img" />
            </div>
          </div>
        </div>

        {/* Duplicate group for infinite scroll effect */}
        <div aria-hidden className="moving-group">
          <div className="moving">
            <div className="brand-image">
              <img src={brand1} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand2} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand3} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand4} alt="img" />
            </div>
          </div>
          <div className="moving">
            <div className="brand-image">
              <img src={brand5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
