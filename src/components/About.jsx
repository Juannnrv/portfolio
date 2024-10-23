import React from "react";
import { motion } from "framer-motion";
import aboutMeVideo from "../assets/aboutMe.mp4"; // Importa el video

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-green flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3"
        >
          <div className="bg-dark rounded-lg p-6 font-mono text-sm">
            <p className="text-peach mb-4">{"<p>"}</p>
            <p className="text-peach mb-2 text-5xl">About me</p>
            <p className="text-white mb-2">
              My name is Juan and I specialize in web development that utilizes{" "}
              <span className="text-peach">HTML</span>,{" "}
              <span className="text-peach">CSS</span>,{" "}
              <span className="text-peach">JS</span>, and{" "}
              <span className="text-peach">REACT</span> etc.
            </p>
            <p className="text-white mb-2">
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving.
            </p>
            <p className="text-white mb-2">
              When I'm not coding, I am writing blogs, reading, or picking up
              some new hands-on art project like photography.
            </p>
            <p className="text-white">
              I like to have my perspective and belief systems challenged so
              that I see the world through new eyes.
            </p>
            <p className="text-peach mt-4">{"</p>"}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-full"
        >
          <video
            src={aboutMeVideo}
            className="rounded-lg shadow-lg"
            controls
            autoPlay
            loop
            muted
            style={{ boxShadow: "0 10px 80px rgba(0, 0, 0, 0.5)" }} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
