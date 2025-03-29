import React from 'react';
import SocialButtons from './SocialButtons';

const Info = () => {
      return (
        <div className="flex items-center justify-center flex-col mt-8 md:mt-14 px-4 relative z-10">
          {/* Heading */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-4xl md:text-6xl lg:text-8xl font-semibold mt-5 mb-5 text-center md:text-left">
            <h1 className='text-white'>Hi, I'm</h1>
            <h1 className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Syed Ammar
            </h1>
          </div>
    
          {/* Subheading */}
          <p className="text-lg md:text-xl mt-5 text-center md:text-left text-white">
            I am a passionate Front End Developer
          </p>
    
          {/* Description */}
          <p className="w-full md:w-[500px] mt-5 mb-3 text-base md:text-lg lg:text-xl text-center md:text-left text-white">
            Hi, I’m a passionate and detail-oriented Frontend Developer with a love for crafting beautiful, responsive, and user-friendly web experiences. I specialize in turning ideas into interactive, pixel-perfect designs using modern technologies like HTML5, CSS3, JavaScript, React. Whether it’s building dynamic user interfaces or optimizing performance, I thrive on creating seamless digital experiences that users love.
          </p>
    
          {/* Social Buttons */}
          <div className="buttons">
            <SocialButtons className="hover:text-red-600" />
          </div>
    
          {/* Connect Button */}
          <div className="button mt-4">
            <button className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-yellow-400 hover:to-yellow-500 rounded-2xl p-1 px-3 text-white transition-all duration-300">
              Connect with me
            </button>
          </div>
        </div>
      );
    };
    
    export default Info;