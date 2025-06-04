import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9FAFB] text-[#1F2937] py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-xl font-bold text-[#6366F1]">Get in Touch</h3>
            <p className="text-[#1F2937] mt-2">
              Feel free to reach out anytime!
            </p>
          </div>

          <div className="flex space-x-6 justify-center sm:justify-start">
            <a
              href="https://github.com/ArunPandyanVasam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#1F2937] hover:text-[#4338CA] hover:scale-110 transform transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-vasam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#1F2937] hover:text-[#4338CA] hover:scale-110 transform transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/APandyan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#1F2937] hover:text-[#4338CA] hover:scale-110 transform transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:arunpandyanv@gmail.com?subject=Hello%20Arunvasam&body=I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"
              aria-label="Email"
              title="Send me an email"
              className="text-[#1F2937] hover:text-[#4338CA] hover:scale-110 transform transition duration-300"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6 text-center">
          <p className="text-[#1F2937] text-sm">
            &copy; {currentYear} Arunvasam. Let's build something great together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
