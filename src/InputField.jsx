import React from 'react';

const InputField = () => {
  return (

      <div>

    <div className="relative m-5">
      <input
        type="text"
        id="input-field"
        className="block w-full p-2.5 text-base border-0 border-b-2 border-gray-300 bg-transparent outline-none focus:ring-0 peer"
      />
      <label
        htmlFor="input-field"
        className="absolute top-0 left-0 text-base text-gray-300 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        Enter text
      </label>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
    </div>




    <div className="relative m-5">
      <input
        type="text"
        id="input-field"
        className="block w-full p-2.5 text-base border-0 border-b-2 border-gray-300 bg-transparent outline-none focus:ring-0 peer"
      />
      <label
        htmlFor="input-field"
        className="absolute top-0 left-0 text-base text-gray-300 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        Enter text
      </label>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
    </div>




    <div className="relative m-5">
      <input
        type="text"
        id="input-field"
        className="block w-full p-2.5 text-base border-0 border-b-2 border-gray-300 bg-transparent outline-none focus:ring-0 peer"
      />
      <label
        htmlFor="input-field"
        className="absolute top-0 left-0 text-base text-gray-300 pointer-events-none transition-all duration-300 ease-in-out peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        Enter text
      </label>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
    </div>



      </div>
  );
};

export default InputField;