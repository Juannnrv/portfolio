import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, className }) => (
  <motion.section
    className={`w-full h-screen flex items-center justify-center snap-start ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.section>
);

export default Section;
