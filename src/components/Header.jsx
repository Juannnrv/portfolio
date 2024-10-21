import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <Section className="bg-dark">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hey, I'm
          </motion.h1>

          <motion.h1
            className="text-3xl md:text-8xl font-bold bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Juannnrv
          </motion.h1>

          <motion.p
            className="text-xl text-peach text-center md:max-w-md mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm from Colombia 🇨🇴, What truly drives me is finding{" "}
            <span className="text-green">creative solutions</span> to complex
            challenges, especially when they have a{" "}
            <span className="text-green">tangible impact</span> on users.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-between gap-20">
          <motion.img
            src={Juan}
            alt="Juan"
            className="rounded-2xl w-32 h-32 md:w-full md:h-[650px] object-cover mt-10 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.h1
            className="text-6xl font-bold text-peach mr-72 hover:text-green-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Open to{" "}
            <span className="text-green mt-5">
              <DynamicText />
            </span>
          </motion.h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            A <span className="text-green bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text">Junior</span>
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className="text-green bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text">Full-Stack</span>
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Developer
          </motion.h1>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </Section>
  );
};

export default Header;
