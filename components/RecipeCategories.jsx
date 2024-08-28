import { useState, useRef } from "react";
import { RecipeCategories } from "@/javascript/recipe.categories";
import Image from "next/image";
import Link from "next/link";

const RecipeCategoriesComponent = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const distance = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex justify-center w-full max-w-[95%]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex justify-normal gap-5 overflow-x-hidden md:overflow-auto"
        ref={sliderRef}
      >
        {RecipeCategories.map((data, index) => (
          <div
            key={index}
            className="bg-white border border-chefAtHome-Orange-200 rounded-lg min-w-[250px] max-w-[250px]"
          >
            <div className="w-full flex flex-col justify-between max-h-[280px] items-center gap-5 p-5">
              <Image
                className="flex items-end justify-end rounded-lg"
                width={100}
                height={60}
                src={data.image}
                alt={data.category}
              />
              <h5 className="mb-1 text-xl font-medium text-chefAtHome-Orange-950">
                {data.category}
              </h5>
              <Link
                href={data.url_category}
                className="w-[200px] text-center focus:outline-none transition-all text-white bg-chefAtHome-Orange-400 hover:bg-chefAtHome-Orange-500 focus:ring-1 focus:ring-chefAtHome-Orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-chefAtHome-Orange-900"
              >
                Ver todas las recetas
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCategoriesComponent;
