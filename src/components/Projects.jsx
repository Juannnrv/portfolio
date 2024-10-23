import React from "react";
import Section from "./Section";

const Projects = () => (
  <Section className="bg-green">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-peach mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Proyecto 1</h3>
          <p className="text-white">Descripción breve del proyecto 1.</p>
        </div>
        <div className="bg-dark rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Proyecto 2</h3>
          <p className="text-white">Descripción breve del proyecto 2.</p>
        </div>
      </div>
    </div>
  </Section>
);

export default Projects;