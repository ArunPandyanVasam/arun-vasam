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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
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
    // TODO: Replace with real submission logic
    console.log(formData);
    setIsSubmitted(true);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#f6eef0] text-[#1F2937] flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[45%] h-auto flex items-center justify-center p-8">
        <div className="max-w-sm w-full text-[#6366F1]">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Let’s connect and build something meaningful.
          </h3>
          <hr className="border-[#6366F1] border-2 mb-3 w-12" />
          <p className="text-sm md:text-base text-[#1F2937]">
            Whether it’s a job opportunity, collaboration, or just a chat — I’m
            all ears.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[55%] flex flex-col p-8 md:p-12">
        {!isSubmitted && (
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F2937] tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-[#1F2937] text-base sm:text-lg max-w-xl mx-auto">
              Feel free to reach out about work, feedback, or anything else.
            </p>
          </motion.div>
        )}

        <div
          className="max-w-xl w-full bg-white shadow-md rounded-xl border border-[#cdd3db] p-8 mx-auto transition-all duration-300"
          aria-live="polite"
        >
          {isSubmitted ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold text-[#6366F1]">
                Thank you!
              </h3>
              <p className="text-[#475569] mt-2">
                Your message has been sent — I’ll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#6366F1]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#E2E8F0] rounded-lg bg-white text-[#1F2937] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#6366F1]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#E2E8F0] rounded-lg bg-white text-[#1F2937] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#6366F1]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#E2E8F0] rounded-lg bg-white text-[#1F2937] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 px-6 bg-[#6366F1] text-white rounded-lg text-lg font-semibold hover:bg-[#4338CA] transition-all duration-300"
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
