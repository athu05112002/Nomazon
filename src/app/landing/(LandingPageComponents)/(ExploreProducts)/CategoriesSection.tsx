interface CategoriesSectionProps {
    categories: string[];
  }
  
  const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
    return (
      <div className="col-span-full flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-gray-200 rounded-full text-sm"
          >
            {category}
          </span>
        ))}
      </div>
    );
  };
  
  export default CategoriesSection;

  