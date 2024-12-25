import Image from "next/image";
interface ProductCardProps {
  title: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  category,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Image alt="cam" src={"/Images/cam.png"} width={230} height={250}></Image>
      <h3 className="font-medium">{category}</h3>
      <p>{title}</p>
      <span className="text-lg font-bold">{price}</span>
    </div>
  );
};

export default ProductCard;
