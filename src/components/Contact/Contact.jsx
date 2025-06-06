import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

const SERVICE_ID = "service_q08irat";
const TEMPLATE_ID = "template_aqquj2k";
const PUBLIC_KEY = "EIPn3GqyGr-IVfa7G";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        alert("Failed to send. Please try again later.");
        console.error("EmailJS error:", err);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#030712] text-[#f1f5f9] flex flex-col md:flex-row px-4 py-16"
    >
      <div className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-10">
        <div className="max-w-sm w-full text-[#5da9e2]">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Let’s connect and build something meaningful.
          </h3>
          <hr className="border-[#6531c8] border-2 mb-3 w-12" />
          <p className="text-sm md:text-base text-white">
            Whether it’s a job opportunity, collaboration, or just a chat — I’m
            all ears.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[55%] flex items-center justify-center p-6 md:p-10">
        <motion.div
          className="w-full max-w-lg bg-[#1e293b] border border-[#2f354f] rounded-2xl shadow-[0_0_20px_rgba(101,49,200,0.15)] p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[#6531c8]">
            Get in Touch
          </h2>

          <p className="text-center text-white mb-6">
            Reach out for work, feedback, or anything else — I’m listening.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {["name", "email", "subject", "message"].map((field) => (
              <div key={field} className="relative">
                <label
                  htmlFor={field}
                  className="text-sm text-[#5da9e2] font-medium"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                    className="w-full mt-1 px-4 py-3 text-sm bg-[#0f172a] border border-[#2f354f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da9e2] focus:shadow-md hover:border-[#5da9e2] transition"
                  />
                ) : (
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    className="w-full mt-1 px-4 py-3 text-sm bg-[#0f172a] border border-[#2f354f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da9e2] focus:shadow-md hover:border-[#5da9e2] transition"
                  />
                )}
                {errors[field] && (
                  <p className="text-[#f87171] text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#6531c8] to-[#5da9e2] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1e293b] text-[#5da9e2] font-medium shadow-2xl px-6 py-3 rounded-full border border-[#6531c8] backdrop-blur-md flex items-center gap-2 z-50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
          >
            <FaCheckCircle className="text-[#4ade80]" />
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
