import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // Duración de la animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`h-screen overflow-y-scroll snap-y snap-mandatory relative ${isLoaded ? 'bg-dark' : 'bg-white'}`}>
      {/* Círculo de carga */}
      {!isLoaded && <div className="transition-circle" />}

      {/* Sección de bienvenida */}
      <section className={`h-screen flex items-center justify-center snap-start ${isLoaded ? 'fade-in' : 'hidden'}`}>
        <motion.h1
          className="text-5xl font-bold text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4.5, ease: 'easeInOut' }}
        >
          ¡Hola! Soy [Tu Nombre]
        </motion.h1>
      </section>

      {/* Sección sobre mí */}
      <section className={`h-screen flex items-center justify-center snap-start bg-green ${isLoaded ? 'fade-in' : 'hidden'}`}>
        <motion.h2
          className="text-3xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          Sobre Mí
        </motion.h2>
      </section>

      {/* Sección de proyectos */}
      <section className={`h-screen flex items-center justify-center snap-start bg-dark ${isLoaded ? 'fade-in' : 'hidden'}`}>
        <motion.h2
          className="text-3xl text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          Proyectos
        </motion.h2>
      </section>

      {/* Sección de habilidades */}
      <section className={`h-screen flex items-center justify-center snap-start bg-green ${isLoaded ? 'fade-in' : 'hidden'}`}>
        <motion.h2
          className="text-3xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          Habilidades
        </motion.h2>
      </section>

      {/* Sección de contacto */}
      <section className={`h-screen flex items-center justify-center snap-start bg-dark ${isLoaded ? 'fade-in' : 'hidden'}`}>
        <motion.h2
          className="text-3xl text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          Contacto
        </motion.h2>
      </section>
    </div>
  );
};

export default App;