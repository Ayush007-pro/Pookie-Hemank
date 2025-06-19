import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation'

const Index = () => {

  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col relative min-h-screen w-full">
      <header className="relative flex flex-row items-center justify-between py-5 px-10 w-full mx-auto bg-white/30 backdrop-blur-md rounded-lg shadow-md">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Link to="/" className="flex items-center">
            <img src="/its_arty.png" width={35} alt="arty_codes-image" />
          </Link>
          <h1 className="text-2xl font-bold">ARTY CODES</h1>
        </div>
        <nav className="flex items-center justify-evenly w-1/2">
          <Link to="/" className="text-sm font-medium transition-colors duration-200 hover:text-purple-300">
            HOME
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors duration-200 hover:text-purple-300">
            ABOUT
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors duration-200 hover:text-purple-300">
            PROJECTS
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors duration-200 hover:text-purple-300">
            SKILLS
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors duration-200 hover:text-purple-300">
            CONTACT
          </Link>
        </nav>
      </header>

      <section className="py-20 px-4">
        <div className="flex flex-col gap-10">

            <div className="flex flex-col space-y-6 pl-36 pt-20 pr-96 mr-96">
            <p className="text-2xl w-full">
              Hello guys, I am Mr.Hemank From Lucknow
            </p>
            <p className="text-2xl">I am a non-vegetarian</p>
            <TypeAnimation 
            sequence={[
              'I am proficient in Machine Learning.',
              1500,
              "My models overfit like my jeans!",
              1500,
              "My accuracy's high, but my life's a lie!",
              1500,
              "My model's confused, just like me!",
              1500,
            ]}
            wrapper='span'
            speed={50}
            className='text-4xl font-semibold text-black'
            repeat={Infinity}
            />
            </div>
          <div className="absolute right-36">
            <img
              className="border-t-8 rounded-full"
              src="/sexy-hemank.jpeg"
              alt="Hemank"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;