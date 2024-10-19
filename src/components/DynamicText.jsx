import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicText = () => {
  const words = ["work", "learn", "talk", "collaborate", "create", "grow"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 3000); 

    return () => clearInterval(interval);
  }, [index, words]);

  const variants = {
    hidden: { opacity: 0, y: -50 }, 
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }, 
  };

  return (
    <span className="relative inline-block h-12">
      <AnimatePresence>
        <motion.span
          key={currentWord}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          className="absolute"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default DynamicText;
