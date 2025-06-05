import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

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
      className="min-h-screen bg-[#f3f5f9] text-[#1F2937] flex flex-col md:flex-row px-4 py-16"
    >
      {/* Left panel (unchanged text content) */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-10">
        <div className="max-w-sm w-full text-[#4F46E5]">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Let’s connect and build something meaningful.
          </h3>
          <hr className="border-[#6366F1] border-2 mb-3 w-12" />
          <p className="text-sm md:text-base text-[#1F2937]">
            Whether it’s a job opportunity, collaboration, or just a chat — I’m all ears.
          </p>
        </div>
      </div>

      {/* Right panel (rich form) */}
      <div className="w-full md:w-[55%] flex items-center justify-center p-6 md:p-10">
        <motion.div
          className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Reach out for work, feedback, or anything else — I’m listening.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {["name", "email", "subject", "message"].map((field) => (
              <div key={field} className="relative">
                <label
                  htmlFor={field}
                  className="text-sm text-[#6366F1] font-medium"
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
                    className="w-full mt-1 px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    className="w-full mt-1 px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-indigo-600 font-medium shadow-xl px-6 py-3 rounded-full border border-indigo-200 z-50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
