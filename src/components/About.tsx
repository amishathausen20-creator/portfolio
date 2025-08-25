import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Focus",
      description: "Creating intuitive and beautiful user interfaces with attention to detail."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Responsive Design",
      description: "Building applications that work seamlessly across all devices and screen sizes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated frontend developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With expertise in modern 
              web technologies, I transform ideas into responsive, interactive applications.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, 
              and has evolved into a deep understanding of frontend technologies, user experience 
              principles, and modern development practices.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest industry trends and best practices. When I'm not coding, you can find me 
              exploring new technologies or contributing to open-source projects.
            </p>
          </div>

          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;