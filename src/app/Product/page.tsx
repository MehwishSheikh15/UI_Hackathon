
import React from 'react';

type Product = {
  image: string;
  name: string;
  price: string;
};

const products: Product[] = [
  { image: '/product1.png', name: 'Comfort Chair', price: '$99.99' },
  { image: '/product2.png', name: 'Modern Office Chair', price: '$129.99' },
  { image: '/product3.png', name: 'Ergonomic Chair', price: '$149.99' },
  { image: '/product4.png', name: 'Executive Leather Chair', price: '$199.99' },
  { image: '/product5.png', name: 'Reclining Chair', price: '$249.99' },
  { image: '/product6.png', name: 'Adjustable Desk Chair', price: '$179.99' },
  { image: '/product7.png', name: 'Mesh Office Chair', price: '$89.99' },
  { image: '/product8.png', name: 'Swivel Chair', price: '$109.99' },
  { image: '/category1.png', name: 'Task Chair', price: '$79.99' },
  { image: '/category2.png', name: 'High Back Chair', price: '$159.99' },
  { image: '/category3.png', name: 'Gaming Chair', price: '$299.99' },
  { image: '/product1.png', name: 'Rocking Chair', price: '$119.99' },
];

const instagramImages: string[] = [
  '/product1.png',
  '/product2.png',
  '/product3.png',
  '/product4.png',
  '/product5.png',
  '/product6.png',
];

const HomePage: React.FC = () => {
  return (
    <div className="py-16">
      {/* Product Section */}
      <h2 className="text-3xl font-bold text-center mb-12">All Products</h2>
      
      {/* Grid Layout with 3 rows of 4 cards each */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg flex flex-col h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">{product.price}</p>
            <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" alt="Add to Cart" className="h-5 w-5 mr-2" />
                </button>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">OR SUBSCRIBE TO THE NEWSLETTER</h2>
        <div className="flex justify-center items-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded-l-lg w-64"
          />
          <button className=" text-black py-2 px-4 rounded-r-lg">
            Subscribe
          </button>
        </div>
        {/* Line below the email and submit button */}
        <div className="border-t border-gray-300 w-64 mx-auto"></div>
      </div>

      {/* Instagram Follow Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Follow Products and Discount on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img
                src={image}
                alt={`Instagram Product ${index + 1}`}
                className="w-full h-48 object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

