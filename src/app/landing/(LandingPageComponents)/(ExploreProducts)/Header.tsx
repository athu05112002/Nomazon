import { Jost } from "next/font/google";


const Header: React.FC = () => {
  return (
    <div className="Jost flex space-x-4 p-4 col-span-full text-left mb-4 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <h1 className="text-3xl">EXPLORE PRODUCTS</h1>
      </div>
      <div className="col-span-4">
        <p className="Jost text-sm text-gray-600">
          Embark on a Boundless Exploration of Innovation with Our Diverse Range
          of Products, Elevating Your Journey to Unveil New Horizons and Endless
          Possibilities.
        </p>
      </div>
    </div>
  );
};

export default Header;
