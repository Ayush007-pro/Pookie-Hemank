import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col relative min-h-screen w-full">

      <header className="relative flex flex-row items-center justify-between py-5 px-10 w-full mx-auto bg-white/30 backdrop-blur-md rounded-lg shadow-md">
     
        <div className="">
          <Link to="/" className="flex items-center">
            {/* <img src="./flexkit-name-logo.svg" width={120} alt="Flexkit Logo" /> */}
          </Link>
        </div>

       
        <nav className="flex items-center justify-between w-1/2">
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-purple-300"
          >
            HOME
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-purple-300"
          >
            ABOUT
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-purple-300"
          >
            PROJECTS
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-purple-300"
          >
            SKILLS
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-purple-300"
          >
            CONTACT
          </Link>
        </nav>

      </header>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello guys, I am Mr.Hemank
                From Lucknow
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am non-vegitarian
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I am proficient in Machine Learning.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img className="flex items-start justify-center rounded-full" src='./public/sexy-Hemank.jpeg'/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;



      // <Hero />
      // <About />
      // <Skills />
      // <Projects />
      // <Contact />
      // <Footer />