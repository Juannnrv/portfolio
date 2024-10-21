import React from "react";
import Section from "./Section";

const Skills = () => (
  <Section className="bg-green">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Habilidades</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "SQL"].map((skill) => (
          <div key={skill} className="bg-dark rounded-lg p-4">
            <p className="text-lg font-semibold text-peach text-center">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;