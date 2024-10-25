import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, className }) => (
  <motion.section
    className={`w-full min-h-screen flex items-center justify-center snap-start my-10 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.section>
);

export default Section;
