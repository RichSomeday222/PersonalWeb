import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('aboutme');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const experiences = {
    research: [
      {
        company: 'Stanford HAI',
        role: 'Research Intern',
        period: '2025.10 - Present',
        location: 'Stanford University',
        supervisor: 'Dr. Jiaxin Pei',
        link: 'https://hai.stanford.edu/'
      },
      {
        company: 'Minnesota NLP Group',
        role: 'Research Assistant',
        period: '2025.05 - Present',
        location: 'University of Minnesota',
        supervisor: 'Prof. Dongyeop Kang',
        link: 'https://minnesotanlp.github.io/'
      },
      {
        company: 'Visual Intelligence Lab',
        role: 'Research Assistant',
        period: '2024.10 - Present',
        location: 'University of Minnesota',
        supervisor: 'Prof. Qianwen Wang',
        link: 'https://qianwen.info/pages/lab_members/'
      }
    ],
    industry: [
      {
        company: 'Quantlink',
        role: 'AI Engineer',
        period: '2025.07 - Present',
        location: 'Minneapolis, MN'
      },
      {
        company: 'Artisk.AI',
        role: 'Software Engineering Intern',
        period: '2025.03 - 2025.06',
        location: 'Remote'
      },
      {
        company: 'Snarkify, Inc.',
        role: 'Software Engineering Intern',
        period: '2024.06 - 2024.08',
        location: 'Palo Alto, CA'
      },
      {
        company: 'Beijing Jinxinxiutu Technology',
        role: 'Software Development Intern',
        period: '2023.07 - 2023.08',
        location: 'Beijing, China'
      }
    ],
    others: [
      {
        company: 'CSCI 1913',
        role: 'Teaching Assistant',
        period: '2025.01 - 2025.05',
        location: 'University of Minnesota',
        link: 'https://umtc.catalog.prod.coursedog.com/courses/8096671'
      },
      {
        company: 'Technological Leadership Institute',
        role: 'Student Worker',
        period: '2024.09 - 2024.12',
        location: 'University of Minnesota'
      }
    ]
  };


  const publications = [
    {
      title: 'GNN 101: Visual Learning of Graph Neural Networks in Your Web Browser',
      authors: 'Yilin Lu, Chongwei Chen, Yuxin Chen, Kexin Huang, Marinka Zitnik, Qianwen Wang',
      description: 'An educational visualization tool for interactive learning of GNNs. Introduces animated visualizations that seamlessly integrate mathematical formulas with visualizations via multiple levels of abstraction, including a model overview, layer operations, and detailed calculations.',
      link: 'https://arxiv.org/abs/2411.17849'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Yuxin Chen</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4xKCxdq-rPnxhiODpvLfJACgpyESPnTk70-tDx1I7lpdOsYGiNL6vn9955xbYXxNLPJ8XkcYMUo1KcAnQ&user=W3icPq4AAAAJ" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" title="Google Scholar">
                <GraduationCap size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yuxin-chen-895390302/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/RichSomeday222" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" title="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:chloechen66688@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <div className="flex space-x-8">
              {['About Me', 'Publications', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '') 
                      ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-1' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </header>

        {/* About Me Section */}
        {activeSection === 'aboutme' && (
          <section className="mb-16">
            <div className="flex items-start space-x-8 mb-8">
              <img 
                src="myphoto.jpg" 
                alt="Yuxin Chen" 
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 space-y-3">
                  <p>
                    🥳 Hi, I'm Yuxin Chen(陈雨欣) — a recent Computer Science graduate from the <a href="https://cse.umn.edu/cs" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">University of Minnesota, Twin Cities</a>. I am working as a research assistant in the <a href="https://minnesotanlp.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Minnesota NLP Group</a> (with <a href="https://dykang.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Prof. Dongyeop Kang</a>) and the <a href="https://qianwen.info/pages/lab_members/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Visual Intelligence Lab</a> (with <a href="https://qianwen.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Prof. Qianwen Wang</a>). I am also a Research Intern at <a href="https://hai.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Stanford HAI</a>, where I work under the supervision of <a href="https://jiaxin-pei.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Dr. Jiaxin Pei</a>.
                  </p>
                  <p>
                    💻 My research interests span Natural Language Processing(NLP), Human-Computer Interaction (HCI), and Human-AI Interaction (HAI). I am interested in:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>LLM Reasoning & Human-AI Collaboration</strong> — designing benchmarks and frameworks to understand how humans and AI work together.</li>
                    <li><strong>Visualization for AI</strong> — building interactive tools that make complex AI processes explainable and transparent.</li>
                    <li><strong>Trustworthy AI</strong> — exploring how to balance automation with human judgment to improve reliability and trust.</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Experience</h2>
            
            {/* Research */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Research</h3>
              <div className="space-y-4">
                {experiences.research.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono min-w-[120px]">
                      {exp.period}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{exp.role}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        {exp.link ? (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {exp.location}
                        {exp.supervisor && (
                          <span className="ml-2">| {exp.supervisor}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Industry</h3>
              <div className="space-y-4">
                {experiences.industry.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono min-w-[120px]">
                      {exp.period}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{exp.role}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {exp.location}
                        {exp.supervisor && (
                          <span className="ml-2">| {exp.supervisor}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Others */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Others</h3>
              <div className="space-y-4">
                {experiences.others.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono min-w-[120px]">
                      {exp.period}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{exp.role}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        {exp.link ? (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {exp.location}
                        {exp.supervisor && (
                          <span className="ml-2">| {exp.supervisor}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* Publications Section */}
        {activeSection === 'publications' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex-1">{pub.title}</h3>
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 ml-4"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{pub.authors}</p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{pub.venue}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Yuxin Chen • The wind of freedom blows.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;