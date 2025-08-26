import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "A responsive Amazon-inspired e-commerce website built with HTML,CSS, and Bootstrap.The project replicates Amazon's core design elements.It demonstrate skills in Frontend development,responsive layout,and clean UI design showcasing how real-world website can be recreated with only core web technologies. ",
      image: "/image/amazon-clone.png",
      tech: ["Html", " CSS", "Bootstrap"],
      github: "https://github.com/amishathausen20-creator/amazon_clone",
      live: "https://amishathausen20-creator.github.io/amazon_clone/",
    },
    {
      title: "Currency Converter",
      description: "The Currency Converter is a responsive and interactive web application that allows users to convert between different currencies in real-time using live exchange rates.",
      image: "/image/currency.png.png",
      tech: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/amishathausen20-creator/currency_converter",
      live: "https://amishathausen20-creator.github.io/currency_converter/"
    },
    {
      title: "Todos List",
      description: "A simple yet powerful task management application built to organize daily activities.Users can add,edit,delete, and mark tasks as complete, ensuring productivity and time management. ",
      image: "/image/todos-list.png.png",
      tech: ["React", "Tailwind CSS", ],
      github: "https://github.com/amishathausen20-creator/todos-list",
      live: "https://amishathausen20-creator.github.io/todos-list/"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for frontend development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target='_blank'
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target='_blank'
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;