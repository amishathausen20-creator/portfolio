import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/amishathausen20-creator",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/chandini-thausen-1b7ab8380/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:amishathausen20@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Chandini Thausen</h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href} 
                  target='_blank'
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Chandini Thausen. Made with</span>
            <Heart size={20} className="text-red-500" />
            <span>and React</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-all duration-200"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;