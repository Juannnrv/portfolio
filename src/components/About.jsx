import { motion } from "framer-motion";
import { Download } from "lucide-react";
import aboutMeVideo from "../assets/aboutMe.mp4";
import gengarFly from "../assets/gengar.gif";
import gengarLaugh from "../assets/gengarLaughing.gif";
import Section from "./Section";

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  show: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
};

export default function Component() {
  return (
    <Section className="min-h-screen bg-green p-4 md:p-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Video section */}
          <motion.div
            className="col-span-full sm:col-span-2 bg-peach rounded-xl overflow-hidden shadow-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <video
              src={aboutMeVideo}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            />
          </motion.div>

          {/* Mission section */}
          <motion.div
            className="col-span-full sm:col-span-1 bg-black rounded-xl shadow-lg p-6"
            variants={rotateIn}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green mb-4">
              Mission
            </h3>
            <p className="text-peach text-base md:text-lg lg:text-xl leading-relaxed">
              To create innovative software solutions that enhance user
              experiences and streamline processes in multicultural
              environments, focusing on efficiency, growth, and sustainability.
            </p>
          </motion.div>

          {/* English level */}
          <motion.div
            className="col-span-full sm:col-span-1 bg-peach text-green font-bold rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4"
            variants={fadeInRight}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="https://drive.google.com/file/d/1HUY-Ft0ml9kdXNPTYCOOhHotx87lfea5/view"
              target="blank"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                ENGLISH LEVEL
              </h3>
              <p className="text-5xl md:text-7xl lg:text-9xl font-bold">B2</p>
            </a>
          </motion.div>

          {/* Download CV button */}
          <motion.div
            className="col-span-full sm:col-span-1 bg-black flex flex-col items-center justify-around rounded-xl shadow-lg p-6"
            variants={rotateIn}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={gengarLaugh}
              alt="Gengar laughing"
              className="w-[125px] h-[150px] rounded-full mb-4"
            />
            <div className="bg-peach rounded-xl w-full">
              <a
                href="https://drive.google.com/file/d/1W-YUzFxMQaGL33f9SYY27QoNl0cI2xwz/view"
                target="blank"
                className="w-full h-full text-lg flex items-center justify-center space-x-2 text-green p-4"
              >
                <Download className="mr-2 h-6 w-6" />
                <span className="text-xl font-bold">Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* About me section */}
          <motion.div
            className="col-span-full sm:col-span-2 bg-peach rounded-xl shadow-lg p-6"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green mb-4">
              About Me
            </h3>
            <p className="text-black font-medium text-base md:text-xl lg:text-2xl leading-relaxed">
              I'm Juan Rosas, a junior full-stack developer passionate about
              crafting intuitive user experiences and scalable solutions. I
              combine creativity with collaboration to ensure projects meet
              technical requirements while resonating with users. I thrive in
              diverse settings and continuously seek to learn new technologies.
            </p>
          </motion.div>

          {/* Image with Gengar */}
          <motion.div
            className="col-span-full sm:col-span-1 bg-black rounded-xl overflow-hidden shadow-lg"
            variants={rotateIn}
            whileHover={{ scale: 1.05 }}
          >
            <img
              alt="Gengar"
              className="w-full h-full object-cover"
              height="300"
              src={gengarFly}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
              width="300"
            />
          </motion.div>

          {/* Vision section */}
          <motion.div
            className="col-span-full sm:col-span-2 bg-black rounded-xl shadow-lg p-6"
            variants={fadeInLeft}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green mb-4">
              Vision
            </h3>
            <p className="text-peach text-base md:text-lg lg:text-xl leading-relaxed">
              To be a global leader in software development, delivering scalable
              and sustainable solutions to complex challenges, where technology
              and creativity converge to enhance quality of life.
            </p>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "Problem Solving",
              "Adaptability",
              "Effective Communication",
              "Teamwork",
              "Empathy",
              "Emotional Intelligence",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className={`${
                  index % 2 === 0
                    ? "bg-peach text-green"
                    : "bg-black text-peach"
                } rounded-xl shadow-lg p-4`}
                variants={index % 2 === 0 ? fadeInUp : fadeInRight}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
