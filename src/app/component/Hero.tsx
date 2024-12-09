
          import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-10 shadow-lg">
      {/* Parent div with white background */}
      <div className="relative bg-gray-200 text-black py-20 px-6 sm:px-10 md:px-12 rounded-lg">
        {/* Hero Section Container */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col items-start space-y-4 max-w-xl">
            {/* Small Text */}
            <p className="text-sm font-light">Welcome to Chairy</p>

            {/* Large Bold Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Best Furniture Collection for your interior.
            </h1>

            {/* Shop Now Button */}
            <div className="mt-6">
              <a 
                href="/shop" 
                className="flex items-center bg-[#029FAE] text-white py-2 px-6 rounded-full font-semibold hover:bg-teal-600 transition"
              >
                Shop Now 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="flex-shrink-0">
            <img 
              src="Product Image.png"  // Replace with the correct image path
              alt="Product"
              className="w-full sm:w-[400px] h-auto rounded-lg" // Responsive image width and rounded corners
            />
          </div>
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="flex justify-center mt-8">
        <img 
          src="./CompanyLogo.png"  // Replace with your actual company logo path
          alt="Company Logo"
          className="h-16 sm:h-24 rounded-full w-auto" // Adjust logo size for mobile and desktop
        />
      </div>
    </div>
  );
};

export default Hero;
