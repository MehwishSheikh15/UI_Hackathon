
import React from "react";
import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Page: React.FC = () => {
  return (
    <div>
       {/* Featured Product Section */}
       <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mb-16 gap-8">
        <Image
          src="/product-2.png"
          alt="Library Stool Chair"
          width={675}
          height={670}
          className="w-full h-[] max-w-md rounded-lg shadow-lg object-cover"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Library Stool Chair</h2>
          <p className="px-6 py-3 w-[144] h-[44] font-semibold bg-teal-500 text-white rounded-full mb-4">
            $20.00 USD
          </p>
          <p className="text-gray-600 mt-10 border-t border-gray-200 mb-6">
            This pink Library stool is very comfortable and flexible. <br />
            Must use it in libraries and offices. <br />
            Affordable price with a discount offer!
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition flex items-center gap-2">
            <span>Add To Cart</span>
            <AiOutlineShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* All Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["product-1", "product-2", "product-3", "product-4"].map(
            (product, i) => (
              <div key={i} className="overflow-hidden w-80">
                <div className="relative w-full h-[312px]">
                  <Image
                    src={`/${product}.png`}
                    alt={product}
                    width={312}
                    height={312}
                    className="object-cover w-[290px] h-[290px]"
                  />
                  {i === 1 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">
                      Library Stool Chair
                    </h3>
                    <Link href="/SingleProduct">
                      <button className="w-13 px-2 py-2 bg-gray-300 text-white rounded-lg hover:bg-teal-600 flex items-center justify-center">
                        <BsFillCartDashFill className="mr-1" />
                      </button>
                    </Link>
                  </div>
                  <p className="text-black font-bold mt-2">
                    $20{" "}
                    {i === 1 && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        $30
                      </span>
                    )}
                  </p>
                </div>
              </div>
            )
          )}
          
        </div>
      </section>
    </div>
  );
};

export default Page;
