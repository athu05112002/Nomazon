import React from "react";
import Image from "next/image";
import { Jost } from "next/font/google";

const CategoryGrid: React.FC = () => {
  const categories = [
    { name: "MacBook", image: "/Images/Laptop1.png" },
    { name: "Playstation", image: "/Images/PS5.png" },
    { name: "Television", image: "/Images/TV.png" },
    { name: "Camera", image: "/Images/Camera.png" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6 gap-6 space-y-2">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="Jost text-2xl">SHOP BY CATEGORIES</h2>
        <a href="#" className="flex items-center text-gray-600 hover:underline">
          View more
          <span className="ml-2">&rarr;</span>
        </a>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="h-40 object-contain mb-4"
              width={150}
              height={150}
            ></Image>
            <p className="text-gray-700 text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
