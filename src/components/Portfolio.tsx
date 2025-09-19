import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <div className="bg-[url('/portfolioBackground.png')] bg-cover bg-center bg-no-repeat w-full relative h-[350vh]">
            {/* Header positioned at top of background */}
            <div className="pt-16 pb-8 flex items-center justify-center">
                <h1 className="text-5xl text-custom-purple font-bold font-inter -mt-[5rem]">
                    Our Portfolio
                </h1>
                </div>

                {/* Main content */}
                <div className="flex items-center justify-between h-[calc(300vh-100px)] px-20 -mt-[42rem]">
                    {/* Left side - Phone image */}
                    <div className="flex-1 flex justify-center">
                        <img 
                            src="/saawt.png" 
                            alt="Saawt App" 
                            className="h-[600px] w-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Right side - Text content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6 pl-20 -mt-[10rem]">
                        <h4 className="text-2xl text-custom-purple font-small font-inter">
                            Audio Book
                        </h4>
                        <h2 className="text-5xl text-custom-purple font-inter">
                            Saawt App
                        </h2>
                        <p className="text-lg text-gray-700 max-w-md leading-relaxed font-inter">
                            Explore and enjoy audiobooks with SAAWT. Customise playback and download for offline listening anytime.
                        </p>
                    </div>
                </div>


                {/* Third Portfolio Item - Mobile App */}
                <div className="flex items-center justify-between h-[calc(300vh-100px)] px-20 -mt-[85rem]">
                    {/* Left side - Text content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6 pr-20 -mt-[10rem]">
                         <h4 className="text-2xl text-custom-light-grey font-small font-inter">
                             Dating App
                         </h4>
                         <h2 className="text-5xl text-custom-light-grey font-inter">
                             Rahmah App
                         </h2>
                         <p className="text-lg text-custom-light-grey w-700 max-w-md leading-relaxed font-inter">
                             Meet your ideal partner in seconds with AI-powered personality insights and secure, moderated chats.
                         </p>
                    </div>

                    {/* Right side - Mobile App image */}
                    <div className="flex-1 flex justify-center">
                       <img 
                            src="/mobile.png" 
                            alt="Mobile App" 
                            className="h-[600px] w-auto drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Fourth Portfolio Item - Game App */}
                <div className="flex items-center justify-between h-[calc(300vh-100px)] px-20 -mt-[85rem]">
                    {/* Left side - Game App image */}
                    <div className="flex-1 flex justify-center">
                       <img 
                            src="/tops.png" 
                            alt="Game App" 
                            className="h-[600px] w-auto drop-shadow-2xl"
                        />
                    </div>

                    {/* Right side - Text content */}
                    <div className="flex-1 flex flex-col justify-center space-y-6 pl-20 -mt-[10rem]">
                         <h4 className="text-2xl text-custom-light-grey font-small font-inter">
                             Game App
                         </h4>
                         <h2 className="text-5xl text-custom-light-grey font-inter">
                             Seen wa Geem
                         </h2>
                         <p className="text-lg text-custom-light-grey w-500 max-w-md leading-relaxed font-inter">
                            Test your knowledge and enjoy answering fun and diverse questions! From sports and history to science and general culture— which field will you excel in?                         </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="flex items-center justify-center px-20 -mt-[32rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                        {/* Responsive Card */}
                        <div className="bg-custom-light-purple p-12 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-custom-light-purple rounded-lg flex items-center justify-center">
                                     <img src="/doubleMobile.png" alt="Responsive" className="w-14 h-14" />
                                </div>
                            </div>
                            <h3 className="text-white text-lg font-bold mb-2 font-inter">Responsive</h3>
                            <p className="text-custom-darkgrey text-sm font-inter">Optimized for all screen sizes and devices.</p>
                        </div>

                        {/* Customizable Card */}
                        <div className="bg-custom-light-purple p-12 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-custom-light-purple rounded-lg flex items-center justify-center">
                                     <img src="/whiteBord.png" alt="Customizable" className="w-14 h-14" />
                                </div>
                            </div>
                            <h3 className="text-white text-lg font-bold mb-2 font-inter">Customizable</h3>
                            <p className="text-custom-darkgrey text-sm font-inter">Easily modify and personalize your design.</p>
                        </div>

                        {/* Powerful Card */}
                        <div className="bg-custom-light-purple p-12 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-custom-light-purple rounded-lg flex items-center justify-center">
                                     <img src="/code.png" alt="Powerful" className="w-14 h-14" />
                                </div>
                            </div>
                            <h3 className="text-white text-lg font-bold mb-2 font-inter">Powerful</h3>
                            <p className="text-custom-darkgrey text-sm font-inter">Strong backend ensuring performance & security.</p>
                        </div>

                        {/* Support Card */}
                        <div className="bg-custom-light-purple p-12 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-custom-light-purple rounded-lg flex items-center justify-center">
                                     <img src="/settings.png" alt="Support" className="w-14 h-14" />
                                </div>
                            </div>
                            <h3 className="text-white text-lg font-bold mb-2 font-inter">Support</h3>
                            <p className="text-custom-darkgrey text-sm font-inter">24/7 assistance whenever you need it.</p>
                        </div>
                    </div>
                </div>
        </div>

    );
}
export default Portfolio