import React from 'react';

const FanusAgency: React.FC = () => {
  return (
    <div className="flex items-center justify-between min-h-screen px-6 py-20">
      {/* Left side - Text content */}
      <div className="flex flex-col items-start space-y-6 max-w-2xl">
        
        {/* Main heading */}
        <div className="space-y-2">
          <h1 className="text-white text-6xl font-bold leading-tight ml-20 font-inter">
            Fanus Digital
          </h1>
          <h2 className="text-5xl font-bold ml-20 pb-5 font-inter bg-gradient-to-b from-blue-400 to-gray-100 bg-clip-text text-transparent">
            Agency
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-white text-lg leading-relaxed space-y-2 ml-20 font-inter">
          <p>We design, develop, and deliver custom</p>
          <p>websites and mobile apps tailored to your needs.</p>
        </div>
        
        {/* Contact Us button */}
        <a 
          href="http://contactus" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg inline-block ml-20 font-inter bg-blue-500 hover:bg-blue-600"
        >
          Contact Us
        </a>
      </div>
      
      {/* Right side - Boy illustration */}
      <div className="flex items-center justify-center mt-60">
        <img 
          src="/boy.png" 
          alt="Boy with laptop illustration" 
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default FanusAgency;