import { Button } from "@/components/ui/button";
import Image from "next/image";

const CodingSection: React.FC = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-xl  flex space-x-4 p-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-l font-bold">Writing code? You are in</h2>

        <Button size="sm" className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded">
          Shop Now
        </Button>
      </div>
      <div>
        <Image
          alt="laptop"
          src={"/Images/laptop.png"}
          width={345}
          height={230}
        ></Image>
      </div>
    </div>
  );
};

export default CodingSection;
