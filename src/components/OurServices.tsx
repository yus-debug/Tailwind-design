import React from 'react';

const OurServices: React.FC = () => {
  return (
    <div className="flex items-center justify-between min-h-screen px-6 py-20">
      {/* Left side - Our Services text content */}
      <div className="flex flex-col items-start space-y-6 max-w-2xl">
        
        {/* Our Services heading */}
        <div className="space-y-2">
          <h3 className="text-custom-purple text-2xl font-medium ml-20 font-inter">
            Our Services
          </h3>
          <h2 className="text-custom-purple text-5xl font-bold ml-20 pb-5 font-inter">
            Innovative Solutions
          </h2>
        </div>
        
        {/* Description */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-2 ml-20 max-w-lg font-inter">
          <p>At Fanus Digital, we bring cutting-edge digital experiences to life. Our services are designed to enhance engagement, optimize performance, and elevate your brand's online presence.</p>
        </div>
      </div>
      
      {/* Right side - Boxes illustration */}
      <div className="flex items-center justify-center mr-20">
        <img 
          src="/boxes.png" 
          alt="Team working with puzzle pieces illustration" 
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default OurServices;
