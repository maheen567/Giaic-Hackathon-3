import React from "react";

const Categories = () => {
  const categories = [
    "Sandwiches",
    "Drink",
    "Pizza",
    "Chicken Chup",
    "Uncategorized",
    "Cheese Butter",
  ];

  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-inter text-csBlack text-[20px] mb-4">
        Categories
      </h4>
      {categories.map((category) => (
        <div key={category} className="flex gap-2 items-center mb-4">
          <input type="checkbox" className="w-4 h-4" />
          <p className="font-inter text-[#333333] font-medium text-lg">
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
