import React from 'react'
import { motion } from "framer-motion";

import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import BreadcrumbContact from '../components/BreadcrumbSection'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay },
  }),
};



export default function Blog() {

  const newsItems = [
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/07-2.jpg",
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/08-1.jpg",
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/07-2.jpg",
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/06-2.jpg",
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/03-2.jpg",
    "https://modinatheme.com/oraxis/wp-content/uploads/2024/10/02-2.jpg",
  ];

  return (
    <div class="ScrollSmoother-content">

      {/* Breadcrumb Section Start  */}
      <BreadcrumbContact name="Blog" />

      {/* News Section Start */}
      <motion.section
        className="news-section section-padding fix"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row g-4">
            {newsItems.map((img, index) => (
              <motion.div
                key={index}
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
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>

                  <div className="news-content">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt"></i> October 19, 2024
                      </li>
                      <li>
                        <i className="far fa-user"></i> By admin
                      </li>
                    </ul>

                    <h3>
                      <a href="news-details.html">
                        {index % 2 === 0
                          ? "Discover the Quintessence of Interior Design"
                          : "Interior Excellence Indulge in Interior Serenity"}
                      </a>
                    </h3>

                    <p>
                      Financial planners help people to gain knowledge about how
                      to invest and save effectively.
                    </p>

                    <a href="news-details.html" className="link-btn">
                      Load More <i className="far fa-plus"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            className="page-nav-wrap mt-5 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.4}
          >
            <ul>
              <li>
                <a className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-left"></i>
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  01
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  02
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  ..
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  10
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  11
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  <i className="fal fa-long-arrow-right"></i>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Cta Section Start */}
      <CtaSection />

    </div>
  )
}
