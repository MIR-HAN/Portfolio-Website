"use client";

import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "@/components/icons/Github";
import LinkedinIcon from "@/components/icons/Linkedin";

const SocialLinks = () => {
  return (
    <div className="flex items-center mt-8 space-x-6 md:mt-4">
      <motion.a
        href="https://github.com/MIR-HAN"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pink-200 hover:text-pinkish-200 "
        whileHover={{ scale: 1.1 }}
      >
        <GithubIcon className="w-8 h-8 fill-current" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/mirhan-yorulmaz/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pink-200 hover:text-pinkish-200 "
        whileHover={{ scale: 1.1 }}
      >
        <LinkedinIcon className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
};

export default SocialLinks;

