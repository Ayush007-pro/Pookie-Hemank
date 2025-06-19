import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

// background: #1F2024
// text-color: #D0D0D0
// on-hover: #CCD7E4

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col text-[#D0D0D0] relative min-h-screen w-full bg-[#1F2024]">
      <header className="relative flex flex-row items-center justify-between py-4 px-4 sm:px-6 md:px-10 w-full mx-auto backdrop-blur-md shadow-md">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Link to="/" className="flex items-center">
            <img src="/its_arty.png" width={35} alt="arty_codes-image" className="w-8 sm:w-9" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">ARTY CODES</h1>
        </div>
        <div className="relative md:hidden">
          <button
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU
          </button>
          {menuOpen && (
            <div className="absolute top-full right-0 bg-[#1F2024] shadow-md rounded-lg mt-2 w-48">
              <Link
          to="/"
          className="block text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 px-4"
              >
          HOME
              </Link>
              <Link
          to="/"
          className="block text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 px-4"
              >
          ABOUT
              </Link>
              <Link
          to="/"
          className="block text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 px-4"
              >
          PROJECTS
              </Link>
              <Link
          to="/"
          className="block text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 px-4"
              >
          SKILLS
              </Link>
              <Link
          to="/"
          className="block text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 px-4"
              >
          CONTACT
              </Link>
            </div>
          )}
        </div>
        <nav className="hidden md:flex flex-col md:flex-row items-center justify-evenly w-full md:w-1/2 mt-4 md:mt-0">
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
          >
            HOME
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
          >
            ABOUT
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
          >
            PROJECTS
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
          >
            SKILLS
          </Link>
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-200 hover:text-[#B8D3E8] py-2 md:py-0"
          >
            CONTACT
          </Link>
        </nav>
      </header>

      <section className="py-10 px-4 sm:px-6 md:py-20">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col space-y-4 w-full md:w-1/2 px-4 sm:px-8 md:px-12 lg:pl-20">
            <p className="text-lg sm:text-xl md:text-2xl w-full">
              Hello guys, I am Mr.Hemank 
              <br />
              From Lucknow
            </p>
            <p className="text-lg sm:text-xl md:text-2xl">I am a non-vegetarian</p>
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
              className='text-2xl text-[#B8D3E8] sm:text-3xl md:text-4xl font-semibold'
              repeat={Infinity}
            />
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="glitch-wrapper">
              <img
                className="rounded-full glitch-image w-72 sm:w-72 md:w-80 lg:w-96"
                src="/sexy-hemank.jpeg"
                alt="Hemank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <audio ref={audioRef} src="/chipi_chipi_song.mp3" loop />
          </div>
        </div>
      </section>

      <style>{`
        .glitch-wrapper {
          position: relative;
          overflow: hidden;
        }

        .glitch-image {
          transition: all 0.1s ease;
        }

        .glitch-image:hover {
          animation: glitch 0.4s infinite linear alternate;
          position: relative;
        }

        @keyframes glitch {
          0% {
            transform: translate(0, 0);
            filter: none;
            box-shadow: none;
          }
          20% {
            transform: translate(-5px, 5px);
            filter: hue-rotate(50deg);
            box-shadow: 3px 0 0 red, -3px 0 0 cyan;
          }
          40% {
            transform: translate(5px, -5px);
            filter: hue-rotate(-50deg);
            box-shadow: -3px 0 0 red, 3px 0 0 cyan;
          }
          60% {
            transform: translate(-5px, 5px);
            filter: hue-rotate(50deg);
            box-shadow: 3px 0 0 red, -3px 0 0 cyan;
          }
          80% {
            transform: translate(5px, -5px);
            filter: hue-rotate(-50deg);
            box-shadow: -3px 0 0 red, 3px 0 0 cyan;
          }
          100% {
            transform: translate(0, 0);
            filter: none;
            box-shadow: none;
          }
        }

        @media (max-width: 768px) {
          .glitch-wrapper {
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;