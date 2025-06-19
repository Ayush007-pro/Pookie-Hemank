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
     
        <div className="flex flex-row gap-4 items-center justify-center">
          <Link to="/" className="flex items-center">
            <img src="./public/its_arty.png" width={35} alt="arty_codes-image" />
          </Link>
          <h1 className='text-2xl font-bold'>
            ARTY CODES
          </h1>
        </div>

       
        <nav className="flex items-center justify-evenly w-1/2">
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
        <div className="flex flex-col gap-10 items-center">

          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-48 items-center">

            {/* everything about my pookie */}
            <div className="space-y-6">
              <p className="text-3xl">
                Hello guys, I am Mr.Hemank
                From Lucknow
              </p>
              <p className="text-3xl">
                I am non-vegitarian
              </p>
              <p className="text-4xl">
                I am proficient in Machine Learning.
              </p>
            </div>
            
            {/* pookie ki photo */}
            <div className="flex justify-center">
              <div className="relative">
                <img className="flex items-start border-t-8 justify-center rounded-full" src='./public/sexy-Hemank.jpeg'/>
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