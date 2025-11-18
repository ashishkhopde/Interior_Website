import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const base = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(`${base}/contact`, formData);
      setStatus(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Try again!");
    }
  };

  return (
    <motion.section
      className="contact-section fix section-bg section-padding"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="section-title">
            <motion.h2
              className="splt-txt wow"
              data-splitting
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              Leave a Comment
            </motion.h2>
          </div>

          <form
            id="contact-form"
            className="contact-form-items mt-4 mt-md-0"
            onSubmit={handleSubmit}
          >
            <div className="row g-4">
              {/* Name */}
              <motion.div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.3}
              >
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="far fa-user"></i>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".5s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.5}
              >
                <div className="form-clt">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="icon">
                    <i className="far fa-envelope"></i>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".7s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.7}
              >
                <div className="form-clt">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                </div>
              </motion.div>

              {/* Subject */}
              <motion.div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".8s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.8}
              >
                <div className="form-clt">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <div className="icon">
                    <i className="fas fa-book"></i>
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                className="col-lg-12 wow fadeInUp"
                data-wow-delay=".9s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.9}
              >
                <div className="form-clt">
                  <textarea
                    name="message"
                    placeholder="Message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                className="col-lg-7 wow fadeInUp"
                data-wow-delay="1.1s"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1.1}
              >
                <button type="submit" className="theme-btn padding-style">
                  Appointment Now <i className="fas fa-long-arrow-right"></i>
                </button>
              </motion.div>

              {status && (
                <p className="mt-3 text-center text-lg font-semibold text-green-600">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
