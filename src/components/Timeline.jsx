import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import campus from "../assets/campus.jpg";
import smart from "../assets/smart.png";
import cambridge from "../assets/cambdrige.jpg";

const timelineData = [
  {
    title: "Technologist in Software Development",
    institution: "Campuslands",
    date: "Nov 20, 2024",
    description:
      "Intensive training program focused on mastering backend and frontend technologies, with a specialization in the MEVN stack (MongoDB, Express, Vue.js, Node.js).",
    link: "",
    img: campus,
  },
  {
    title: "Pre-Advanced C1 Certificate",
    institution: "Smart Academy - Cambridge School",
    date: "May 7, 2024",
    description:
      "Achieved a Pre-Advanced C1 certification, demonstrating advanced English proficiency.",
    link: "https://drive.google.com/file/d/1Slc1bcBjRReCi2gmj2UPHNHcW2Rz-z9a/view?usp=sharing",
    img: smart,
  },
  {
    title: "B1 English Certification",
    institution: "Cambridge School - Lingual Skill Exam",
    date: "Sep 12, 2023",
    description:
      "Achieved a B1 level certification in English, demonstrating proficiency in reading, writing, listening, and speaking skills, as evaluated by the internationally recognized Cambridge School.",
    link: "https://drive.google.com/file/d/1HUY-Ft0ml9kdXNPTYCOOhHotx87lfea5/view?usp=sharing",
    img: cambridge,
  },

  // Otros elementos del timeline...
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={`flex flex-col items-center md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } md:items-start bg-dark`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={`flex-1 text-center ${
          isEven ? "md:text-left md:pl-8" : "md:text-right md:pr-8"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-peach mb-2">
          {item.title}
        </h3>
        <p className="text-md md:text-lg text-green mb-2 bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#65c48b] bg-clip-text text-transparent wave-text">
          {item.institution}
        </p>
        <p className="text-sm md:text-md text-peach text-opacity-80 mb-4">
          {item.date}
        </p>
      </div>
      <motion.div
        className="w-12 h-12 md:w-16 md:h-16 bg-dark border-4 border-peach rounded-full flex items-center justify-center mx-4 my-4 md:my-0"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-full" />
      </motion.div>
      <div
        className={`flex-1 text-center ${
          isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
        }`}
      >
        <p className="text-md md:text-lg text-peach mb-4">{item.description}</p>
        <motion.a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLink className="mr-2" />
          Certification
        </motion.a>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center py-20">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green mb-32 text-center bg-gradient-to-r from-[#23714D] via-[#1C7C5C] to-[#73C996] bg-clip-text text-transparent wave-text">
          Certifications & Job Experience
        </h2>
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;