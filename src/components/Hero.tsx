import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm
            <span className="text-blue-600 block mt-2">
              Chandini Thausen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Frontend Developer who creates beautiful, responsive, and user-friendly web applications 
            using modern technologies like React, JavaScript, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              View My Work
            </button>
            <a className="cursor-pointer bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            href="../assets/Chandini_Resume.pdf" download>Download Resume</a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/amishathausen20-creator" 
              target='_blank'
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chandini-thausen-938a3537b/" 
              target='_blank'
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:amishathausen20@gmail.com/"
              target='_blank'
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
            >
              <Mail size={28} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;