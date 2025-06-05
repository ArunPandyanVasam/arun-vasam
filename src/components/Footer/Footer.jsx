import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ebe8e0] text-[#1F2937] py-10 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-[#6366F1] inline-block relative group">
              Get in Touch
              <span className="block h-0.5 w-0 group-hover:w-full bg-[#6366F1] transition-all duration-500"></span>
            </h3>
            <p className="text-[#374151] mt-2 text-sm sm:text-base font-light">
              Feel free to reach out anytime!
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <SocialIcon
              href="https://github.com/ArunPandyanVasam"
              label="GitHub"
              Icon={FaGithub}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/arun-vasam/"
              label="LinkedIn"
              Icon={FaLinkedin}
            />
            <SocialIcon
              href="https://x.com/APandyan"
              label="Twitter"
              Icon={FaTwitter}
            />
            <SocialIcon
              href="mailto:arunpandyanv@gmail.com?subject=Hello%20Arunvasam&body=I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"
              label="Email"
              Icon={MdEmail}
            />
          </div>
        </div>

        <div className="border-t border-[#a0a4a8] pt-6 text-center">
          <p className="text-sm text-[#64748b]">
            &copy; {currentYear}{" "}
            <span className="font-semibold">Arunvasam</span>. Let’s build
            something great together!
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-[#334155] hover:text-purple-600 hover:scale-110 transform transition-all duration-300"
  >
    <Icon size={22} />
  </a>
);

export default Footer;
