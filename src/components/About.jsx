import React from "react";
import Section from "./Section";

const About = () => (
  <Section className="bg-green">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Sobre Mí</h2>
      <p className="text-lg text-white mb-6">
        Soy un desarrollador Full-Stack Junior apasionado por crear soluciones innovadoras y eficientes. 
        Mi experiencia en Campuslands me ha proporcionado una sólida base en desarrollo web y me ha permitido 
        trabajar en proyectos desafiantes que han mejorado mis habilidades técnicas y de resolución de problemas.
      </p>
      <p className="text-lg text-white">
        Estoy constantemente aprendiendo y manteniéndome al día con las últimas tecnologías y mejores prácticas 
        en el desarrollo de software. Mi objetivo es contribuir a proyectos significativos y seguir creciendo 
        como profesional en el campo del desarrollo web.
      </p>
    </div>
  </Section>
);

export default About;