import React, { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
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
      className={`min-h-screen overflow-y-hidden snap-y snap-mandatory relative ${
        isLoaded ? "bg-dark" : "bg-white"
      }`}
    >
      {/* Círculo de carga */}
      {!isLoaded && <div className="transition-circle" />}

      {isLoaded && (
        <>
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;