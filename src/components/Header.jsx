import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Juan from "../assets/HDVphoto.jpg";
import DynamicText from "../components/DynamicText";
import Section from "./Section";

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="bg-dark relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 max-w-full overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl ml-9 lg:text-8xl font-bold text-peach mr-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey, I'm
          </motion.h1>

          <motion.h1
            className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Juannnrv
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-peach text-center md:max-w-md mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm from Colombia 🇨🇴, I thrive on <span className="text-green">tackling challenges</span> and
            contributing to meaningful projects in diverse,{" "}
            <span className="text-green">multicultural</span>{" "}
            environments.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 md:gap-5 w-full md:w-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl w-full font-bold text-peach sm:mr-0 md:mr-48 lg:mr-60 hover:text-green-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Open to{" "}
            <span className="text-green mt-2 md:mt-5">
              <DynamicText />
            </span>
          </motion.h1>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img
              src={Juan}
              alt="Juan"
              className="rounded-2xl w-72 h-72 sm:w-48 sm:h-48 md:w-full md:h-[650px] object-cover my-8 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            className="flex justify-center space-x-6 px-10 max-w-md bg-dark bg-opacity-70 rounded-full p-4 border-4 border-green hover:border-green-500 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.a
              href="mailto:youremail@example.com"
              className="text-peach hover:text-green transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={30} />
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              className="text-peach hover:text-green transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              className="text-peach hover:text-green transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl ml-10 lg:text-8xl font-bold text-peach mr-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            A{" "}
            <span className="text-green bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text">
              Junior
            </span>
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-peach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="text-green bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text">
              Full-Stack
            </span>
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-peach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Developer
          </motion.h1>
        </div>
      </div>
    </Section>
  );
};

export default Header;
