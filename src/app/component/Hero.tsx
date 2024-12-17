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
            <p className="text-sm font-light">Welcome to Chairy</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Best Furniture Collection for your interior.
            </h1>
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
              src="Product Image.png"  
              alt="Product"
              className="w-full sm:w-[400px] h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="flex justify-center mt-8">
        <img 
          src="./CompanyLogo.png" 
          alt="Company Logo"
          className="h-16 sm:h-24 rounded-full w-auto"
        />
      </div>

      {/* Featured Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
          {/* Product Cart Example */}
          {['new', 'sale', '', '', ''].map((label, index) => (
            <div key={index} className="relative bg-gray-100 p-4 rounded-lg shadow-md">
              {label && (
                <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white ${label === 'new' ? 'bg-green-500' : 'bg-red-500'} rounded-full`}>
                  {label.toUpperCase()}
                </span>
              )}
              <img 
                src={`./product${index + 1}.png`}
                alt={`Product ${index + 1}`}
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Chair {index + 1}</h3>
              <p className="text-gray-600">
                {label === 'sale' ? (
                  <>
                    <span className="line-through text-red-500 mr-2">$250</span>
                    <span>$200</span>
                  </>
                ) : (
                  '$200'
                )}
              </p>
              <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" alt="Add to Cart" className="h-5 w-5 mr-2" />
                </button>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Living Room', 'Office', 'Outdoor'].map((category, index) => (
            <div key={index} className="relative">
              <img 
                src={`./category${index + 1}.png`} 
                alt={category}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm">{index * 100 + 250} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Layout Section */}
      <div className="mt-16 flex flex-wrap ">
        <div className="w-full md:w-1/2 relative ">
          <img 
            src="./custom-image-left.png" 
            alt="Custom Left"
            className="w-full h-full rounded-lg"
          />
          <p className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 text-gray-600 font-bold text-lg">
          Explore new and popular styles          </p>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {['collage1', 'collage2', 'collage3', 'collage4'].map((image, index) => (
            <img 
              key={index}
              src={`./product${index + 5}.png`} 
              alt={`Product ${index + 5}`}
              className="w-full h-50 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Our Products Section */}
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img 
                src={`./product${index + 1}.png`} 
                alt={`Product ${index + 1}`}
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product {index + 1}</h3>
              <p className="text-gray-600">$200</p>
              <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" alt="Add to Cart" className="h-5 w-5 mr-2" />
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

