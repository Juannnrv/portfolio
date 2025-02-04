import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGit,
  SiMongodb,
  SiMysql,
  SiReact,
  SiVuedotjs,
  SiAstro,
  SiExpress,
  SiNodedotjs,
  SiLinux,
  SiDocker,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
} from "react-icons/si";
import { FaSalesforce, FaJava } from "react-icons/fa6";
import Section from "./Section";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Python", icon: SiPython },
  { name: "Git", icon: SiGit },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "React", icon: SiReact },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Astro", icon: SiAstro },
  { name: "Express", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Linux", icon: SiLinux },
  { name: "Docker", icon: SiDocker },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Postman", icon: SiPostman },
  { name: "Salesforce", icon: FaSalesforce },
  { name: "Java", icon: FaJava},
];

const HardSkills = () => {
  const radius = 400;
  const [centerX, setCenterX] = useState(550);
  const centerY = 350;

  useEffect(() => {
    const updateCenterX = () => {
      if (window.innerWidth < 768) {
        setCenterX(800);
      } else {
        setCenterX(550);
      }
    };

    updateCenterX();
    window.addEventListener("resize", updateCenterX);

    return () => window.removeEventListener("resize", updateCenterX);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Section className="min-h-screen bg-dark flex items-center justify-center pt-72 pb-80">
      <div
        ref={ref}
        className="relative w-full max-w-6xl h-[600px] md:h-[800px] flex flex-col items-center justify-center"
      >
        <motion.div
          className="text-center z-10 mt-14 ml-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-peach mb-4">
            Technical Proficiencies
          </h2>
          <p className="text-white text-sm md:text-lg max-w-md mx-auto">
            A curated selection of advanced technical skills honed through
            extensive practice and applied across diverse projects.
          </p>
        </motion.div>

        {/* Grid layout for smaller screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 md:hidden">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.15, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green rounded-full flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                <skill.icon className="text-peach text-3xl md:text-4xl" />
              </div>
              <span className="text-peach text-[12px] md:text-[15px] text-center block w-16 md:w-20">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Circular layout for larger screens */}
        <div className="md:block">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI;
            const x = Math.cos(angle) * radius + centerX;
            const y = Math.sin(angle) * radius + centerY;

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                style={{ left: `${x}px`, top: `${y}px` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.15, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-green rounded-full flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-110">
                  <skill.icon className="text-peach text-4xl" />
                </div>
                <span className="text-peach text-[15px] text-center block w-20">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default HardSkills;
