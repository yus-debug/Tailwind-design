import React from 'react';

const WorkProgress: React.FC = () => {
  const progressSteps = [
    {
      title: "Concept",
      description: "Understanding the client's needs.",
      image: "/01.png"
    },
    {
      title: "Design",
      description: "Creating UI/UX prototypes.",
      image: "/02.png"
    },
    {
      title: "Develope", 
      description: "Building the app or website.",
      image: "/03.png"
    },
    {
      title: "Test",
      description: "Fixing bugs and optimizing.",
      image: "/04.png"
    },
    {
      title: "Launch",
      description: "Delivering & maintaining the project.",
      image: "/05.png"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-20 bg-white">
      {/* Work Progress heading */}
      <div className="mb-16 flex items-center justify-between ml-40 mr-0">
        <h2 className="text-custom-purple text-5xl font-bold font-inter">
          Work Progress
        </h2>
        <img src='/longline.png' alt="Timeline line" className="w-3/4" />
      </div>
      
      {/* Timeline with steps */}
      <div className="flex items-center justify-center relative">

        {/* Progress steps */}
        <div className="flex justify-between w-full max-w-6xl relative z-10">
          {progressSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-6">
              {/* Step image */}
               <div className=" rounded-full w-40 h-40 flex items-center justify-center">
                 <img 
                   src={step.image} 
                   className="w-28 h-28 object-contain"
                 />
               </div>
              
              {/* Step content */}
              <div className="text-center space-y-2">
                <h3 className="text-custom-purple text-xl font-bold font-inter">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base max-w-40 font-inter">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProgress;