import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LatestRecipesComponent = ({ recipesLatestResponse }) => {
  const [expandedRecipeId, setExpandedRecipeId] = useState(null);
  const maxLength = 150;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleReadMore = (id) => {
    setExpandedRecipeId(expandedRecipeId === id ? null : id);
  };

  return (
    <section className="container mx-auto py-10 space-y-10">
      <h2 className="text-5xl lg:text-5xl text-center leading-relaxed">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-chefAtHome-Orange-600 from-chefAtHome-Orange-300">
          Recetas más recientes
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {recipesLatestResponse.map((recipe) => {
          const isExpanded = recipe._id === expandedRecipeId;

          return (
            <div
              key={recipe._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Link
                href={`/recipe/${recipe.slug}`}
                passHref
                className="block relative h-48 overflow-hidden"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </Link>

              <div className="grid items-center justify-between p-4">
                <div className="w-auto lg:w-[335px] xl:w-full">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {recipe.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isExpanded
                      ? recipe.description
                      : truncateText(recipe.description, maxLength)}
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleReadMore(recipe._id)}
                    className="text-chefAtHome-Orange-600 text-sm font-medium"
                  >
                    {isExpanded ? "Leer menos" : "Leer más"}
                  </button>
                  <Link
                    href={`/recipe/${recipe.slug}`}
                    passHref
                    className="text-white bg-orange-500 px-3 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-all"
                  >
                    Ver receta
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LatestRecipesComponent;
