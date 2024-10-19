import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Juan from "./assets/HDVphoto.jpg";
import DynamicText from "./components/DynamicText";
import "./index.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Duración de la animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen overflow-y-hidden snap-y snap-mandatory relative  ${
        isLoaded ? "bg-dark" : "bg-white"
      }`}
    >
      {/* Círculo de carga */}
      {!isLoaded && <div className="transition-circle" />}

      <section
        className={`min-h-screen flex flex-col md:flex-row items-center justify-center snap-start gap-10 ${
          isLoaded ? "fade-in" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            Hi There !!!,
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            I'm Juannnrv
          </motion.h1>
          <motion.p
            className="text-xl text-peach text-center md:max-w-md mt-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            What truly drives me is finding creative solutions to complex
            challenges, especially when they have a tangible impact on users..
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="text-5xl font-bold text-peach mb-10 mr-32"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            Open to <DynamicText />
          </motion.h1>

          <img
            src={Juan}
            alt="Juan"
            className="rounded-2xl w-32 h-32 md:w-full md:h-[650px]"
          />
          <motion.h1
            className="text-5xl font-bold text-peach mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            Campuslands
          </motion.h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            A Junior
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach mr-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            Full-Stack
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-8xl font-bold text-peach"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          >
            Developer
          </motion.h1>
        </div>
      </section>

      {/* Sección sobre mí */}
      <section
        className={`min-h-screen flex items-center justify-center snap-start bg-green ${
          isLoaded ? "fade-in" : "hidden"
        }`}
      >
        <motion.h2
          className="text-2xl md:text-3xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Sobre Mí
        </motion.h2>
      </section>

      {/* Sección de proyectos */}
      <section
        className={`min-h-screen flex items-center justify-center snap-start bg-dark ${
          isLoaded ? "fade-in" : "hidden"
        }`}
      >
        <motion.h2
          className="text-2xl md:text-3xl text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Proyectos
        </motion.h2>
      </section>

      {/* Sección de habilidades */}
      <section
        className={`min-h-screen flex items-center justify-center snap-start bg-green ${
          isLoaded ? "fade-in" : "hidden"
        }`}
      >
        <motion.h2
          className="text-2xl md:text-3xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Habilidades
        </motion.h2>
      </section>

      {/* Sección de contacto */}
      <section
        className={`min-h-screen flex items-center justify-center snap-start bg-dark ${
          isLoaded ? "fade-in" : "hidden"
        }`}
      >
        <motion.h2
          className="text-2xl md:text-3xl text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Contacto
        </motion.h2>
      </section>
    </div>
  );
};

export default App;
