import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import CtaSection from "../components/CtaSection";
import BreadcrumbContact from "../components/BreadcrumbSection";
import ServicesContect from "../components/services/ServicesContect";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay },
  }),
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const base = import.meta.env.VITE_BASE_URL;

  // ✅ Fetch all services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${base}/service`);
        setServices(res.data.services || []);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [base]);

  return (
    <div className="ScrollSmoother-content">
      {/* Breadcrumb Section */}
      <BreadcrumbContact name="Services" />

      {/* Service Section */}
      <motion.section
        className="service-section fix section-padding"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          {loading ? (
            <p className="text-center mt-5">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-center mt-5 text-red-500">No services found.</p>
          ) : (
            <div className="row g-4">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + index * 0.1}
                >
                  <div className="service-items style-2">
                    {/* Service Image */}
                    <div className="service-image bg-cover"
                      style={{
                        backgroundImage: `url('${service.image}')`,
                        height: "250px",
                        borderRadius: "10px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>

                    {/* Service Content */}
                    <div className="content mt-3">
                      <h3 className="splt-txt wow" data-splitting>
                        {service.title}
                      </h3>
                      <p>
                        {service.description.length > 60
                          ? service.description.slice(0, 60) + "..."
                          : service.description}
                      </p>
                      <Link
                        to={`/service-details/${service._id}`}
                        className="link-btn"
                        onClick={() => scrollTo(0, 0)}
                      >
                        Read More <i className="fas fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Contact Section */}
      <ServicesContect />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
