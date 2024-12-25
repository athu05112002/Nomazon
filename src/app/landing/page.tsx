import React from "react";
import SearchBar from "./(LandingPageComponents)/SearchBar";
import ExploreProducts from "./(LandingPageComponents)/ExploreProducts";
import CategoryGrid from "./(LandingPageComponents)/(ShopByCategories)/CategoryGrid";

const LandingPage = () => {
  return (
    <div>
      <SearchBar />
      This is a landing page.
      {/* Search Bar  */}
      {/* CategoryBar */}
      {/* Hero Carousel  */}
      <ExploreProducts />
      <CategoryGrid />  
      {/* last viewed */}
      {/* Subscribe to News letter */}
      {/* Footer */}
    </div>
  );
};

export default LandingPage;
