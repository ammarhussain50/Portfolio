import React from "react";
import InputField from "./InputField";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Centered Heading */}
      <h1 className=" text-white text-4xl font-bold mb-8">Contact</h1>

      {/* Input Field */}
      <div className="w-full max-w-md">
        <InputField />
      </div>
    </div>
  );
};

export default Contact;