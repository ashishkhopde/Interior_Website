import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/contact`,
                formData
            );

            if (res.status === 200) {
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                setStatus(res.data.message || "Message sent successfully!");
            } else {
                setStatus(res.data.message || "Failed to send message. Try again.");
            }
        } catch (err) {
            console.error("Error sending message:", err);
            setStatus(
                err.response?.data?.message || "An error occurred. Please try again."
            );
        }
    };
    

    return (
        <motion.section
            className="w-full bg-gray-100 py-16 px-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl shadow-lg">
                    {/* LEFT SIDE FORM */}
                    <motion.div
                        className="p-8 sm:p-12 flex flex-col justify-start"
                        variants={fadeUp}
                        custom={0.2}
                    >
                        <motion.h6
                            className="text-gray-500 font-semibold"
                            variants={fadeUp}
                            custom={0.3}
                        >
                            Contact Us
                        </motion.h6>

                        <motion.h2
                            className="text-4xl font-bold mt-2 mb-6"
                            variants={fadeUp}
                            custom={0.4}
                        >
                            Get In Touch
                        </motion.h2>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            variants={fadeUp}
                            custom={0.5}
                        >
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-4 py-3 text-black"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-4 py-3 text-black"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">

                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    maxLength={10}
                                    onChange={(e) => {
                                        // allow only digits
                                        const value = e.target.value.replace(/\D/g, "");
                                        setFormData((prev) => ({ ...prev, phone: value }));
                                    }}
                                    className="border border-gray-300 rounded-md px-4 py-3 text-black"
                                    placeholder="Phone Number"
                                    required
                                />

                                <input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md px-4 py-3 text-black"
                                    placeholder="Subject"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-md px-4 py-3 h-32 resize-none text-black w-full"
                                placeholder="Message here.."
                                required
                            />

                            {/* Submit Button */}
                            <div className="pt-4">
                                <motion.button
                                    type="submit"
                                    className="theme-btn bg-gray-900 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Submit Now
                                    <i className="fas fa-long-arrow-right"></i>
                                </motion.button>

                                {status && (
                                    <p className="text-sm text-gray-500 mt-3">{status}</p>
                                )}
                            </div>
                        </motion.form>
                    </motion.div>

                    {/* RIGHT SIDE IMAGE */}
                    <motion.div
                        className="hidden lg:block h-full"
                        variants={fadeUp}
                        custom={0.3}
                    >
                        <img
                            src="https://modinatheme.com/oraxis/wp-content/uploads/2024/11/contact-1.jpg"
                            className="w-full h-full object-cover rounded-r-xl"
                            alt="Contact"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
