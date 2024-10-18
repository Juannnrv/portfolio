// src/RotatingImageSection.js

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Figure = () => {
  useEffect(() => {
    // Configurar ScrollTrigger
    gsap.to('.rotating-box', {
      scrollTrigger: {
        trigger: '.rotating-box', // Elemento que activa el trigger
        start: 'top center', // Inicia la animación cuando la parte superior del elemento llega al centro de la ventana
        end: 'center top', // Termina la animación cuando el centro del elemento llega a la parte superior
        scrub: true, // Hace que la animación siga el scroll
      },
      rotation: 360, // Rota 360 grados
      scale: 5, // Aumenta el tamaño (puedes ajustar este valor)
      ease: 'power1.inOut', // Transición suave
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="rotating-box w-10 h-10 bg-white rounded-full" /> {/* Cambiado a un círculo pequeño y blanco */}
    </section>
  );
};

export default Figure;
