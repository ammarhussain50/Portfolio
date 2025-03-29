import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const InputField = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6m51rqo',
      'template_9c5700u',
      form.current,
      '5k-J0rIHfaGeTpkxC'
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
      <div className="space-y-4">
        <input
          type="text"
          name="from_name"  // Changed to match EmailJS default variables
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="from_email" // Changed to match EmailJS default variables
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-green-500 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default InputField;