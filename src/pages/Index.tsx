
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Download, Github, Linkedin, Instagram, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/features/AnimatedText";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import LoadingScreen from "@/components/features/LoadingScreen";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const CustomXIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-black text-white' : 'bg-white text-gray-900'}`}>
        {/* Navigation with Progress Bar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-green-400/20">
          <div 
            className="absolute bottom-0 left-0 h-1 bg-green-600 dark:bg-green-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
          <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center h-12">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-green-600 dark:text-green-400"
            >
              Rushil Rawat
            </motion.h1>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <a href="#home" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">Home</a>
                <a href="#about" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">About</a>
                <a href="#skills" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">Skills</a>
                <a href="#experience" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-green-600 dark:hover:text-green-300 transition-colors">Contact</a>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-green-100 dark:hover:bg-green-900/30"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-20 lg:pt-16">
          <div className="max-w-6xl mx-auto w-full px-4 lg:px-0">
            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden flex flex-col items-center text-center space-y-8">
              {/* Profile Image - Mobile First */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-green-600 dark:border-green-400 overflow-hidden mt-16 md:mt-12"
              >
                <img 
                  src="/media/rushilrawat.jpeg" 
                  alt="Rushil Rawat"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Content - Mobile */}
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    <span className="text-black dark:text-white text-3xl md:text-4xl">Hi, I am</span>
                    <br />
                    <span className="text-green-600 dark:text-green-400 text-4xl md:text-5xl">Rushil Rawat</span>
                  </h1>
                  
                  <div className="text-xl md:text-2xl mb-6 h-10 flex items-center justify-center">
                    <span className="mr-2 text-black dark:text-white">I'm a</span>
                    <AnimatedText />
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                    CS & Mathematics Student at{" "}
                    <a 
                      href="https://www.umass.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 dark:text-gray-300 underline hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      UMass Amherst
                    </a>, student developer, startups & innovation etc.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <Button 
                    className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
                    onClick={() => window.open('https://docs.google.com/document/d/1mNE8EFzjZU0Lh4txte7vUOpbmHX9LkZM0mJc29dhUTo/edit?usp=sharing', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30"
                    onClick={() => window.open('https://github.com/rushilrawat', '_blank')}
                  >
                    View Projects
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex justify-center items-center gap-6 mb-12"
                >
                  <a href="mailto:rawat.rushil.work@gmail.com" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/rushrushrushil/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://x.com/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <CustomXIcon />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between gap-16">
              {/* Text Content - Desktop */}
              <div className="flex-1 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h1 className="font-bold mb-6 leading-tight">
                    <span className="text-black dark:text-white text-5xl xl:text-6xl">Hi, I am</span>
                    <br />
                    <span className="text-green-600 dark:text-green-400 text-6xl xl:text-7xl">Rushil Rawat</span>
                  </h1>
                  
                  <div className="text-3xl xl:text-4xl mb-8 h-12 flex items-center">
                    <span className="mr-2 text-black dark:text-white">I'm a</span>
                    <AnimatedText />
                  </div>
                  
                  <p className="text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    CS & Mathematics Student at{" "}
                    <a 
                      href="https://www.umass.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 dark:text-gray-300 underline hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      UMass Amherst
                    </a>, student developer, startups & innovation etc.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex gap-4 mb-8"
                >
                  <Button 
                    className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-lg px-6 py-3"
                    onClick={() => window.open('https://docs.google.com/document/d/1mNE8EFzjZU0Lh4txte7vUOpbmHX9LkZM0mJc29dhUTo/edit?usp=sharing', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30 text-lg px-6 py-3"
                    onClick={() => window.open('https://github.com/rushilrawat', '_blank')}
                  >
                    View Projects
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center gap-6"
                >
                  <a href="mailto:rawat.rushil.work@gmail.com" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Mail className="h-7 w-7" />
                  </a>
                  <a href="https://github.com/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Github className="h-7 w-7" />
                  </a>
                  <a href="https://www.linkedin.com/in/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Linkedin className="h-7 w-7" />
                  </a>
                  <a href="https://www.instagram.com/rushrushrushil/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <Instagram className="h-7 w-7" />
                  </a>
                  <a href="https://x.com/rushilrawat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-300 transition-colors">
                    <CustomXIcon />
                  </a>
                </motion.div>
              </div>

              {/* Profile Image - Desktop */}
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="w-96 h-96 xl:w-[420px] xl:h-[420px] rounded-full border-4 border-green-600 dark:border-green-400 overflow-hidden"
                >
                  <img 
                    src="/media/rushilrawat.jpeg" 
                    alt="Rushil Rawat"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll Arrow - Only show on larger screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-green-600 dark:text-green-400 cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </section>

        {/* Main Content Sections */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-green-400/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Rushil Rawat. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
