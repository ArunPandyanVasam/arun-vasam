import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Handle form submission (e.g., send data to an API or email service)
    console.log(formData);
    setIsSubmitted(true); // Show the success message
    setErrors({}); // Reset any existing errors
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            I’d love to hear from you! Whether you’re interested in working together or just want to chat, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-[#1a1a1a]/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#2a2a2a] hover:shadow-2xl transition-all duration-300">
          {isSubmitted ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold text-[#A855F7]">
                Thanks for reaching out!
              </h3>
              <p className="text-gray-400 mt-2">
                I’ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:border-[#A855F7] transition-all duration-300"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:border-[#A855F7] transition-all duration-300"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:border-[#A855F7] transition-all duration-300"
                  rows="6"
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#A855F7] text-white rounded-lg text-xl font-semibold hover:bg-[#9333EA] hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
