// src/App.js

import React from 'react';
import { motion } from 'framer-motion';
import Figure from './components/Figure'; // Ensure the component name is capitalized
import './index.css';

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-peach">
      {/* Sección de bienvenida */}
      <section className="h-screen flex items-center justify-center snap-start bg-dark">
        <motion.h1
          className="text-5xl font-bold text-peach"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Hola! Soy [Tu Nombre]
        </motion.h1>
      </section>


        {/* Sección sobre mí */}
        <section className="h-screen flex items-center justify-center snap-start bg-green">
          <h2 className="text-3xl text-white">Sobre Mí</h2>
        </section>

        {/* Sección de proyectos */}
        <section className="h-screen flex items-center justify-center snap-start bg-dark">
          <h2 className="text-3xl text-peach">Proyectos</h2>
        </section>

        {/* Sección de habilidades */}
        <section className="h-screen flex items-center justify-center snap-start bg-green">
          <h2 className="text-3xl text-white">Habilidades</h2>
        </section>
        
        {/* Sección de contacto */}
        <section className="h-screen flex items-center justify-center snap-start bg-dark">
          <h2 className="text-3xl text-peach">Contacto</h2>
        </section>
    </div>
  );
};

export default App;
