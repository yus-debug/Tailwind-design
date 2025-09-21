import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col justify-center space-y-6 pl-20 mt-20 ml-20">
      <h4 className="text-2xl text-custom-light-purple font-small font-inter">
        Get In Touch With Us
      </h4>
      <h2 className="text-5xl text-custom-purple font-inter font-bold">
        Contact Us
      </h2>
      <p className="text-lg text-custom-dark-grey w-500 max-w-md leading-relaxed font-inter">
        Have a project in mind? Let’s bring your digital vision to life! Reach out to Fanus Digital, and we’ll craft innovative solutions tailored to your needs.
      </p>

      {/* first row */}
      <div>
        <input
          type="text"
          placeholder="Name"
          className="mr-2 w-1/4 rounded-xl bg-purple-200 px-4 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-1/4 rounded-xl bg-purple-200 px-4 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* second row */}
      <div>
        <input
          type="text"
          placeholder="Number"
          className="mr-2 w-1/4 rounded-xl bg-purple-200 px-4 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-1/4 rounded-xl bg-purple-200 px-4 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* textarea + button grouped */}
      <div className="flex flex-col items-start space-y-4">
        <textarea
          placeholder="Message"
          className="w-[44em] h-60 resize-none rounded-xl bg-purple-200 px-4 pt-3 pb-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

        <button
          type="submit"
          className="bg-sky-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-sky-500 transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
