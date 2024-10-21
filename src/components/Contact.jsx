import React from "react";
import Section from "./Section";

const Contact = () => (
  <Section className="bg-dark">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-peach mb-8">Contacto</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-peach mb-2">Nombre</label>
          <input type="text" id="name" className="w-full p-2 rounded-md bg-green text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-peach mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded-md bg-green text-white" />
        </div>
        <div>
          <label htmlFor="message" className="block text-peach mb-2">Mensaje</label>
          <textarea id="message" rows={4} className="w-full p-2 rounded-md bg-green text-white"></textarea>
        </div>
        <button type="submit" className="bg-peach text-dark font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors">
          Enviar
        </button>
      </form>
    </div>
  </Section>
);

export default Contact;