import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { name: 'CSS3', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'React.js', level: 85, color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
    { name: 'Responsive Design', level: 92, color: 'bg-purple-500' },
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Chrome DevTools',
    'npm',
    'Webpack',
    'Vite'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:opacity-80`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <span className="text-gray-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                Always Learning
              </h4>
              <p className="text-blue-700">
                I'm constantly exploring new technologies and frameworks to stay 
                current with the rapidly evolving frontend landscape. Currently 
                diving deeper into TypeScript and Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;