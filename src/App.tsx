import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  Code, 
  Database, 
  Server, 
  Globe,
  Calendar,
  MapPin,
  Trophy,
  Users,
  TrendingUp,
  Zap,
  ArrowRight
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'achievements'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    'Programming Languages': [
      { name: 'Java 8+', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'DSA', level: 75 }
    ],
    'Frameworks & Technologies': [
      { name: 'Spring Boot', level: 90 },
      { name: 'Angular', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Kafka', level: 75 }
    ],
    'Databases & Tools': [
      { name: 'MySQL', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Jira', level: 75 },
      { name: 'JMS/EMS', level: 70 }
    ],
    'Methodologies': [
      { name: 'Agile SDLC', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'REST/SOAP API', level: 85 },
      { name: 'Full Stack Development', level: 90 },
      { name: 'AI/ML', level: 70 },
      { name: 'Deep Learning', level: 65 },
      { name: 'High/Low Level Design', level: 80 },
      { name: 'Team Management', level: 75 }
    ]
  };

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Citibank',
      period: 'Jun 2023 - Present',
      location: 'Pune, India',
      achievements: [
        'Developed and maintained microservices using Java 8+ and Spring Boot, serving over 10,000+ daily transactions for global trade finance operations.',
        'Built automation tools using Python that reduced manual processing time by 70% and improved operational efficiency across multiple teams.',
        'Collaborated with cross-functional teams to design and implement REST APIs, ensuring seamless integration between frontend Angular applications and backend services.',
        'Optimized database queries and application performance, achieving 85% improvement in page load times for critical business applications.',
        'Led CI/CD pipeline migrations and automation initiatives, reducing deployment time by 60% and improving code quality through automated testing.',
        'Winner of Citi\'s Global Analyst Hackathon for developing an innovative Python and Angular-based solution with automated CI/CD migration capabilities.',
        'Mentored junior developers and led a hackathon team of 5 members, demonstrating effective team management and leadership skills.'
      ]
    },
    {
      title: 'Project Intern – Final Year Project',
      company: 'TEIM',
      period: 'Aug 2022 - May 2023',
      location: 'Research & Development',
      achievements: [
        'Developed a Power BI dashboard integrated with a recommendation model to forecast wind turbine energy generation by day and month.',
        'Implemented time series forecasting models in Python to generate prescriptive maintenance recommendations and predict breakdown recovery actions.'
      ]
    },
    {
      title: 'Intern',
      company: 'Citibank',
      period: 'May 2022 - Jul 2022',
      location: 'UI/UX Development',
      achievements: [
        'Built a prototype application to visualize the Life of Trade using Angular, improving UI clarity and user experience for internal tools.'
      ]
    },
    {
      title: 'Project – Citi Bridge Program',
      company: 'Citibank',
      period: 'Mar 2022 - May 2022',
      location: 'Full Stack Development',
      achievements: [
        'Designed and developed a Sector-Based Trade Recommendation System using Angular, Spring Boot, and MySQL as part of a collaborative full-stack project.'
      ]
    }
  ];

  const highlights = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Global Hackathon Winner',
      description: 'Winner of Citi\'s Global Analyst Hackathon for Python, Angular, and CI/CD migration project'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Achieved 85% improvement in page load times and 70% reduction in pipeline migration time'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Leadership',
      description: 'Led a hackathon team of 5 members, demonstrating effective team management and leadership'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Problem Solving',
      description: 'Recognized for rapid problem solving and implementing high impact technical solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-xl text-gray-900">Tejashree Patil</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'experience', 'education', 'achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Tejashree Vijay Patil
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Software Developer
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
              Detail oriented Software Developer with robust full stack experience in the IT domain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>7218604980</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>tejashreevp9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/tejashree-patil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              I'm a passionate software developer with expertise in full-stack development, specializing in 
              Java, Spring Boot, Python, and Angular. My experience spans across building scalable microservices, 
              developing automation tools, and optimizing application performance for global financial operations. 
              I thrive in collaborative environments and have a proven track record of delivering innovative 
              solutions that drive business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colorClasses = [
                'from-blue-500 to-indigo-600',
                'from-indigo-500 to-purple-600', 
                'from-purple-500 to-blue-600',
                'from-cyan-500 to-blue-600'
              ];
              
              return (
                <div key={category} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[index]} rounded-lg flex items-center justify-center mr-4`}>
                      {index === 0 && <Code className="w-6 h-6 text-white" />}
                      {index === 1 && <Server className="w-6 h-6 text-white" />}
                      {index === 2 && <Database className="w-6 h-6 text-white" />}
                      {index === 3 && <Globe className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${colorClasses[index]} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-blue-500 to-purple-500" style={{borderImage: 'linear-gradient(to bottom, #3b82f6, #8b5cf6) 1'}}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Briefcase className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-600">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology</h3>
              <p className="text-lg text-indigo-600 font-semibold mb-2">Computer Engineering</p>
              <p className="text-gray-700">MKSSS's Cummins College of Engineering for Women, Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Highlights</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className={`rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                index === 0 ? 'bg-gradient-to-br from-blue-50 to-indigo-50' :
                index === 1 ? 'bg-gradient-to-br from-indigo-50 to-purple-50' :
                index === 2 ? 'bg-gradient-to-br from-purple-50 to-blue-50' :
                'bg-gradient-to-br from-cyan-50 to-blue-50'
              }`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                  index === 1 ? 'bg-gradient-to-br from-indigo-500 to-purple-600' :
                  index === 2 ? 'bg-gradient-to-br from-purple-500 to-blue-600' :
                  'bg-gradient-to-br from-cyan-500 to-blue-600'
                }`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and innovative projects. 
            Let's connect and explore how we can work together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="tel:7218604980" 
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>7218604980</span>
            </a>
            <a 
              href="mailto:tejashreevp9@gmail.com" 
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>tejashreevp9@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tejashree-patil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Tejashree Vijay Patil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;