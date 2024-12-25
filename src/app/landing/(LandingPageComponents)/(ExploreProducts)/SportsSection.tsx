import { Button } from "@/components/ui/button";
import Image from "next/image";
const SportsSection: React.FC = () => {
  return (
    <div className="bg-purple-100 p-4 rounded-xl flex space-x-4 p-4">
      <div>
        <Image
          alt="basketBallGuy" 
          src={"/Images/basketBallGuy.png"}
          width={269}
          height={337}
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-sm font-bold">Love the sport you are in</h2>
        <Button size="sm" className="mt-4 px-6 py-2 bg-purple-600 text-white rounded">
          View All
        </Button>
      </div>
      <div>
        <Image
          alt="skiing" 
          src={"/Images/skiing.png"}
          width={315}
          height={637}
        ></Image>
      </div>
    </div>
  );
};

export default SportsSection;
