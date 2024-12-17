

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6">
      

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/prodct3.png", title: "Library Stool Chair", price: "$99" },
            { src: "/product-1.png", title: "Library Stool Chair", price: "$99" },
            { src: "/image2.png", title: "Library Stool Chair", price: "$99" },
            { src: "/product-3.png", title: "Library Stool Chair", price: "$99" },
            { src: "/prodct1.png", title: "Library Stool Chair", price: "$99" },
            { src: "/01.png", title: "Library Stool Chair", price: "$99" },
          ].map((product, index) => (
            <div key={index} className="text-center">
              <Image
                src={product.src}
                alt={product.title}
                width={350}
                height={200}
                className="object-cover rounded-md shadow-md mb-2"
              />
              <p className="text-gray-800 font-medium">{product.title}</p>
              <p className="text-black font-semibold">{product.price}</p>
              <button className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition flex items-center gap-2">
            
            <AiOutlineShoppingCart className="w-5 h-5" />
          </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">TopCategories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { name: "Modern Chairs", image: "/prodct1.png", productCount: 3584 },
            { name: "Wooden Chair", image: "/prodct2.png" , productCount: 353 },
            { name: "Office Chair", image: "/prodct3.png", productCount: 129 },
         
          ].map((category, index) => (
            <div key={index} className="text-center">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-800 font-medium mt-4">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
