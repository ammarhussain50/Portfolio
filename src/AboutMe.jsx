import React from 'react';

const AboutMe = () => {
  return (
    <div>
      {/* Heading */}
      <div className="header flex justify-center text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mt-20 md:mt-40 mb-10">
        About Me
      </div>

      {/* Containers */}
      <div className="flex justify-center items-center mt-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
          {/* Container 1 */}
          <div className="container1 p-6 bg-slate-800 opacity-50 rounded-lg flex-1">
            <h1 className="mb-4 text-white font-bold text-xl md:text-2xl">
              Professional Journey
            </h1>
            <p className="text-white text-sm md:text-base">
              I began my career as a frontend developer with a strong passion for creating intuitive and visually appealing web experiences. Over the years, I have honed my skills in HTML, CSS, JavaScript, and modern frameworks like React, working on a variety of projects ranging from small business websites to complex web applications. My journey has included collaborating with cross-functional teams, translating UI/UX designs into responsive and interactive interfaces, and optimizing websites for performance and accessibility.
            </p>

            {/* Progress Bars */}
            <div className="bar flex items-center mt-5">
              <label htmlFor="html&CSS" className="w-3/12 md:w-2/12 text-white text-sm md:text-base">
                HTML&CSS
              </label>
              <div className="grow bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-8/12 transform transition-all duration-300 hover:scale-105 hover:animate-bounce hover:h-[10px] hover:w-9/12"
                ></div>
              </div>
            </div>

            <div className="bar flex items-center mt-5">
              <label htmlFor="javascript" className="w-3/12 md:w-2/12 text-white text-sm md:text-base">
                JavaScript
              </label>
              <div className="grow bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-7/12 transform transition-all duration-300 hover:scale-105 hover:animate-bounce hover:h-[10px] hover:w-8/12"
                ></div>
              </div>
            </div>

            <div className="bar flex items-center mt-5">
              <label htmlFor="react" className="w-3/12 md:w-2/12 text-white text-sm md:text-base">
                React
              </label>
              <div className="grow bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-7/12 transform transition-all duration-300 hover:scale-105 hover:animate-bounce hover:h-[10px] hover:w-8/12"
                ></div>
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div className="container2 p-6 bg-slate-800 opacity-50 rounded-lg flex-1">
            <h1 className="mb-4 text-white text-xl md:text-2xl font-bold">
              Educational Journey
            </h1>
            <p className="text-white text-sm md:text-base">
              My educational background has laid a strong foundation for my career as a frontend developer. I passed my schooling from Federal Secondary School and passed my intermediate from Govt. Dehli Colledge and now I'm undergraduate from UBIT computer Science department. I am a Fresher Front end developer with 2 month of experience I am from Pakistan. I code and develop amazing Assignment for my class. I like work with new people. New people New Experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;