import React from "react";
import Header from "./(ExploreProducts)/Header";
import SportsSection from "./(ExploreProducts)/SportsSection";
import CodingSection from "./(ExploreProducts)/CodingSection";
import ProductCard from "./(ExploreProducts)/ProductCard";
import CategoriesSection from "./(ExploreProducts)/CategoriesSection";

const ExploreProducts: React.FC = () => {
  const categories = [
    "Clothing",
    "Pets",
    "Laptop",
    "Baby",
    "School & Office",
    "Handmade",
    "iPhone",
    "Garden",
  ];

  const products = [
    { title: "Minimal Rose Armchair", price: "$85", category: "Furniture" },
    { title: "Fujifilm Instax Mini 11", price: "$85", category: "Furniture" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6 gap-6 space-y-2 ">
      <Header />

      <div className="grid grid-cols-2 rounded-lg space-x-4 gap-4">
        <div className="space-y-2">
          {/* Sections */}
          <SportsSection />
          <CodingSection />
        </div>

        <div className="flex space-x-4 p-4">
          {/* Product Cards */}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
        <div>
        {/* Categories Section */}
        <CategoriesSection categories={categories} />
      </div>
      </div>

      
    </div>
  );
};

export default ExploreProducts;
