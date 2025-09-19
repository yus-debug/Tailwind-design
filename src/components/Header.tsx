import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="static top-0 left-0 right-0 z-50 p-6 bg-transparent">
      <div className="flex justify-between items-center w-full">
        {/* Left side - Logo and text */}
        <div className="flex flex-col items-start ml-10">
          <img 
            src="/fanus.png" 
            alt="Fanus Logo" 
            className="h-20 w-auto mb-1"
          />
        </div>
        
        {/* Right side - Navigation */}
        <div className="flex gap-16 mr-40">
          <a href="http://services" className="text-white text-lg font-medium hover:text-purple-300 transition-colors duration-300 px-4 py-2 font-inter">Services</a>
          <a href="http://progress" className="text-white text-lg font-medium hover:text-purple-300 transition-colors duration-300 px-4 py-2 font-inter">Progress</a>
          <a href="http://portfolio" className="text-white text-lg font-medium hover:text-purple-300 transition-colors duration-300 px-4 py-2 font-inter">Portfolio</a>
          <a href="http://contactus" className="text-white text-lg font-medium hover:text-purple-300 transition-colors duration-300 px-4 py-2 font-inter">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;