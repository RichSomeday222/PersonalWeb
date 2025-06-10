import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Code, Database, Cloud, Brain, Award, Briefcase, GraduationCap, User, Menu, X, Camera } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    frontend: ['React', 'Redux', 'D3.js', 'NextJS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Spring Boot', 'Django', 'GraphQL'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD'],
    ai: ['PyTorch', 'TensorFlow', 'HuggingFace', 'LangChain']
  };

  const experiences = [
    {
      company: 'Artisk.AI',
      role: 'Software Engineering Intern',
      period: 'Mar 2024 – Present',
      location: 'Remote',
      highlights: [
        'Designed reusable React component library, boosting development efficiency by 50%',
        'Improved SEO optimization, increasing organic traffic by 35%'
      ]
    },
    {
      company: 'Snarkify, Inc.',
      role: 'Software Engineering Intern',
      period: 'June 2024 – Aug 2024',
      location: 'Palo Alto, CA',
      highlights: [
        'Architected scalable zero-knowledge proof solutions with 95% efficiency increase',
        'Built high-performance caching system achieving 80% cache hit rate',
        'Developed error monitoring infrastructure reducing debugging time by 40%'
      ]
    },
    {
      company: 'Beijing Jinxinxiutu Technology',
      role: 'Software Development Intern',
      period: 'July 2023 – Aug 2023',
      location: 'Beijing, China',
      highlights: [
        'Implemented backend microservices improving response time by 35%',
        'Optimized database queries reducing API latency by 40%',
        'Deployed containerized services reducing deployment time to 15 minutes'
      ]
    }
  ];

  const projects = [
    {
      title: 'Interactive LLM Summarization Tool',
      tech: ['React', 'Node.js', 'MongoDB', 'Google Gemini AI', 'D3.js'],
      description: 'AI-powered document summarization platform with sophisticated visualization',
      highlights: [
        'Reduced manual review time by 20%',
        'Built bidirectional text-highlighting with sub-100ms response time',
        'Handled 500+ concurrent users with 99.95% uptime'
      ]
    },
    {
      title: 'Advanced NLP & ML Projects',
      tech: ['PyTorch', 'HuggingFace', 'TensorFlow', 'AWS SageMaker'],
      description: 'Multiple machine learning projects including text classification and generation',
      highlights: [
        'Achieved 94.3% accuracy with DistilBERT fine-tuning',
        'Reduced training time by 65% with optimization',
        'Deployed models as microservices with CI/CD pipeline'
      ]
    },
    {
      title: 'Distributed Task Scheduling System',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Kafka'],
      description: 'Scalable task management application with microservices architecture',
      highlights: [
        'Supported 1,000+ concurrent tasks for 20+ users',
        'Reduced query latency by 60% with database optimization',
        'Implemented real-time notifications with Kafka'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yuxin Chen
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors text-gray-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border-4 border-white shadow-xl">
                <img 
                  src="myphoto.jpg" 
                  alt="Chloe Chen" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-white text-xl">👋</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Yuxin Chen
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
              Full-Stack Software Engineer & AI/ML Enthusiast
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Computer Science @ University of Minnesota | GPA: 3.97/4.00 | Graduated May 2025
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:chloechen66688@gmail.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors shadow-lg">
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition-colors"
              >
                <Code size={20} />
                <span>View Projects</span>
              </button>
            </div>

            <div className="flex justify-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Minneapolis, MN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(612) 715-0035</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I'm a passionate Computer Science student at the University of Minnesota with a strong foundation in 
                  full-stack development and AI/ML technologies.
                </p>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                    <GraduationCap className="text-blue-600" size={20} />
                    <span className="text-blue-800 font-medium">CS @ UMN</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Award className="text-purple-600" size={20} />
                    <span className="text-purple-800 font-medium">3.97 GPA</span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 flex items-center">
                      {category === 'languages' && <Code size={16} className="mr-2 text-blue-500" />}
                      {category === 'frontend' && <User size={16} className="mr-2 text-green-500" />}
                      {category === 'backend' && <Briefcase size={16} className="mr-2 text-orange-500" />}
                      {category === 'database' && <Database size={16} className="mr-2 text-red-500" />}
                      {category === 'devops' && <Cloud size={16} className="mr-2 text-purple-500" />}
                      {category === 'ai' && <Brain size={16} className="mr-2 text-pink-500" />}
                      {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right text-gray-600 mt-4 md:mt-0">
                      <p className="font-medium text-lg">{exp.period}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start leading-relaxed">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Roles */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Teaching Assistant</h3>
                <p className="text-blue-600 mb-2 font-medium">CSCI 1913: Algorithms & Data Structures</p>
                <p className="text-gray-600 text-sm">Jan 2025 – May 2025 | University of Minnesota</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Research Assistant</h3>
                <p className="text-purple-600 mb-2 font-medium">GNN-101 Project</p>
                <p className="text-gray-600 text-sm">Oct 2024 – Present | Supervisor: Qianwen Wang</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Research Assistant</h3>
                <p className="text-green-600 mb-2 font-medium">Minnesota NLP Lab</p>
                <p className="text-gray-600 text-sm">May 2025 – Present | Supervisor: Dongyeop Kang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid lg:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start leading-relaxed">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              I'm actively seeking full-time software engineering opportunities starting after May 2025.
              Let's discuss how I can contribute to your team!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:chloechen66688@gmail.com"
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={32} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">chloechen66688@gmail.com</p>
              </a>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <Phone size={32} className="text-purple-500 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-600 text-sm">(612) 715-0035</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <MapPin size={32} className="text-pink-500 mb-4" />
                <h3 className="font-semibold mb-2 text-gray-900">Location</h3>
                <p className="text-gray-600 text-sm">Minneapolis, MN</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:chloechen66688@gmail.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail size={20} />
                <span className="font-semibold">Get In Touch</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Yuxin Chen. Built with React and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ready to graduate May 2025 • Seeking full-time opportunities
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;