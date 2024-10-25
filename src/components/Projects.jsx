import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import Section from "./Section";
import spaceX from "../assets/SpaceX.png";
import hospital from "../assets/hospital.png";
import campus from "../assets/campus.jpg";
import cine from "../assets/cine.png";
import logIn from "../assets/logIn.png";
import ecommerce from "../assets/ecommerce.png";
import eWallet from "../assets/eWallet.png";
import food from "../assets/food.png";
import translator from "../assets/translator.png";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMysql, SiNodedotjs, SiExpress, SiTailwindcss, SiPython, SiMongodb, SiVuedotjs } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "SpaceX",
    description:
      "Developed a dynamic web app using HTML, CSS, and native JavaScript to fetch and display SpaceX rocket data, technical specs, and mission details from Elon Musk’s API—no external libraries needed.",
    category: "Web",
    image: spaceX,
    technologies: [SiHtml5, SiCss3, SiJavascript],
    github: "https://github.com/Juannnrv/spaceX",
  },
  {
    id: 2,
    title: "Medi Sync",
    description: "A robust management system using MySQL, React, Node, Express, and Tailwind CSS to centralize hospital data management. The system simplifies the administration of doctors, patients, accounts, and hospital records with a user-friendly interface, secure data handling, and detailed reporting to enhance patient care and streamline operations.",
    category: "Backend",
    image: hospital,
    technologies: [SiMysql, SiReact, SiNodedotjs, SiExpress, SiTailwindcss],
    github: "https://github.com/Juannnrv/hospitalManagement",
  },
  {
    id: 3,
    title: "Campus Stock",
    description: "Intuitive interface for managing inventory at the Bucaramanga headquarters. It enables detailed tracking of assets, including assignment to employees, relocation, decommissioning due to damage, and maintenance management. The system also manages information about staff and different zones within the campus, ensuring efficient resource administration.",
    category: "Backend",
    image: campus,
    technologies: [SiPython],
    github: "https://github.com/Juannnrv/inventarioCampuslands",
  },
  {
    id: 4,
    title: "Cine Pass",
    description: "Web application using Vue, Tailwind CSS, Express, Node.js, and MongoDB to enable users to select movies, purchase tickets, and assign seats efficiently, with options for VIP discounts. The project involves creating APIs to manage movie listings, ticket purchases, seat reservations, and user roles (administrators, standard users, and VIP users), ensuring secure authentication and authorization. The APIs will be designed for high traffic and scalability to optimize performance.",
    category: "Web",
    image: cine,
    technologies: [SiMongodb, SiVuedotjs, SiNodedotjs, SiExpress, SiTailwindcss],
    github: "https://github.com/Juannnrv/cineCampus",
  },
  {
    id: 5,
    title: "Login Auth",
    description: "Signup and login system for managing a diverse product store using MongoDB, Vue, Node.js, Express, and Tailwind CSS. The application allows administrators to upload product images and manage inventory while ensuring user authentication through JWT, cookies, and password hashing for enhanced security.",
    category: "Mobile",
    image: logIn,
    technologies: [SiVuedotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb],
    github: "https://github.com/Juannnrv/loginAuth",
  },
  {
    id: 6,
    title: "Ecommerce Amazon",
    description: "Ecommerce application, developed with HTML, CSS, and JavaScript, integrates seamlessly with the Amazon API, enabling users to search and select products across various categories. Key features include a personalized wishlist, an efficient shopping section, and a dynamic homepage. Utilizing localStorage and sessionStorage, it ensures a smooth experience on both desktop and mobile devices, making online shopping convenient and user-friendly.",
    category: "Web",
    image: ecommerce,
    technologies: [SiHtml5, SiCss3, SiJavascript],
    github: "https://github.com/Juannnrv/ecommerceAmazon",
  },
  {
    id: 7,
    title: "E-wallet",
    description: "Mobile interface specifically designed for the iPhone 11 using HTML and CSS. The application allows users to access various financial services, including income tracking, investment banking insights, economic advice, card inquiries, budgeting tools, and market updates.",
    category: "Mobile",
    image: eWallet,
    technologies: [SiHtml5, SiCss3],
    github: "https://github.com/Juannnrv/virtualWallet",
  },
  {
    id: 8,
    title: "Deep Translator",
    description: "Web application designed for fast, seamless text translation across multiple languages. It features an intuitive user interface, supports a range of popular languages, and allows users to quickly swap between source and target languages for a smooth, user-friendly experience.",
    category: "Web",
    image: translator,
    technologies: [SiVuedotjs, SiTailwindcss],
    github: "https://github.com/Juannnrv/depplTranslator",
  },
];

const categories = ["All", "Web", "Mobile", "Backend"];
const projectsPerPage = 6; 

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <Section className="py-16 bg-green">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-8xl font-bold text-peach mb-20 text-center">
          My Projects
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-10 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? "bg-dark text-peach font-bold"
                  : "bg-peach text-green font-bold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-peach mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white">{project.category}</p>
                </div>
                <div className="flex space-x-2">
                  {project.technologies?.map((Icon, index) => (
                    <div
                      key={index}
                      className="bg-green h-12 mt-5 rounded-full p-3 flex items-center justify-center"
                    >
                      <Icon className="text-peach" size={25} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                currentPage === index + 1
                  ? "bg-dark text-peach font-bold"
                  : "bg-peach text-green font-bold"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-peach rounded-lg p-8 max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-4xl font-bold text-green">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-dark hover:text-green transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-dark font-medium mb-4">{selectedProject.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.technologies?.map((Icon, index) => (
                      <div
                        key={index}
                        className="bg-green rounded-full p-3 flex items-center justify-center"
                      >
                        <Icon className="text-peach" size={24} />
                      </div>
                    ))}
                  </div>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-36 justify-center bg-green text-peach px-4 py-2 rounded-full hover:bg-dark font-bold hover:text-green transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}