import React from 'react';
import Link from 'next/link';

type Product = {
  name: string;
  price: string;
  image: string;
};

const featuredProducts: Product[] = [
  { name: 'Comfort Chair', price: '$99.99', image: '/product1.png' },
  { name: 'Modern Office Chair', price: '$129.99', image: '/product2.png' },
  { name: 'Ergonomic Chair', price: '$149.99', image: '/product3.png' },
  { name: 'Executive Leather Chair', price: '$199.99', image: '/product4.png' },
  { name: 'Reclining Chair', price: '$249.99', image: '/product5.png' },
];

const HomePage: React.FC = () => {
  return (
    <div className="py-16">
      {/* Main Section with Image on Left and Content on Right */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/product6.png" // Replace with your image path
            alt="Library Stool Chair"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Library Stool Chair</h2>
          <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center ">
            $20.00 USD
          </button>
          <p className="text-lg text-gray-700 mb-4">
            This is a comfortable and stylish library stool chair. Perfect for reading, studying, or relaxing in any room. It combines great design with functionality.
          </p>
          <button className="bg-[#029FAE] text-white py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg flex flex-col h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-700">{product.price}</p>
              <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" alt="Add to Cart" className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
            </div>
          ))}
        </div>
        <Link href="/Product"
          className="text-black mt-8 inline-block text-lg font-semibold">
            View All Products
          
        </Link>
      </div>
    </div>
  );
};

export default HomePage;



          
              
       
     
