import { Button } from "@/components/ui/button";
import { Jost } from "next/font/google";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="Jost flex p-4 col-span-full text-left mb-4 grid grid-cols-12 gap-4">
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
      <div className=" col-start-10 space-x-2 col-span-1">
        <div className="grid grid-cols-2">
          <Image
            alt="cam"
            src={"/Images/cam.png"}
            width={100}
            height={100}
          ></Image>
          <Image
            alt="cam"
            src={"/Images/cam.png"}
            width={100}
            height={100}
          ></Image>
          <Image
            alt="cam"
            src={"/Images/cam.png"}
            width={100}
            height={100}
          ></Image>
          <Image
            alt="cam"
            src={"/Images/cam.png"}
            width={100}
            height={100}
          ></Image>
        </div>
        
      </div>
      <div className=" col-start-11 col-span-1">
          <h3 className="font-bold text-xs text-gray-600">Popular Products</h3>
          <a className="bg-transparent font-bold text-xs text-gray-600">
            View All
          </a>
        </div>
    </div>
  );
};

export default Header;
