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
    setFormData({ ...formData, [name]: value });
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
    console.log(formData); // TODO: Replace with real submission
    setIsSubmitted(true);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex flex-col md:flex-row"
    >
      <div className="w-full md:w-[45%] h-auto flex items-center justify-center p-8">
        <div className="max-w-sm w-full text-[#1E40AF]">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Let’s connect and build something meaningful.
          </h3>
          <hr className="border-[#2563EB] border-2 mb-3 w-12" />
          <p className="text-sm md:text-base">
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#C7D2FE] tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
              Feel free to reach out about work, feedback, or anything else.
            </p>
          </motion.div>
        )}

        <div className="max-w-xl w-full bg-[#1E293B] shadow-md rounded-xl border border-[#334155] p-8 mx-auto transition-all duration-300">
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
              <p className="text-[#94A3B8] mt-2">
                Your message has been sent — I’ll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#C7D2FE]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#334155] rounded-lg bg-[#0F172A] text-[#C7D2FE] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#C7D2FE]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#334155] rounded-lg bg-[#0F172A] text-[#C7D2FE] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#C7D2FE]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-[#334155] rounded-lg bg-[#0F172A] text-[#C7D2FE] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] transition-all duration-300"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#6366F1] text-white rounded-lg text-lg font-semibold hover:bg-[#4338CA] transition-all duration-300"
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
