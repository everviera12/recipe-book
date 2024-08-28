// pages/recipe/[slug].js

import Image from "next/image";
import { useEffect } from "react";

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const apiUrl = `https://www.recipesapi.online/v1/api/recipes/${slug}`;
  const response = await fetch(apiUrl);
  const recipe = await response.json();

  return {
    props: {
      recipe,
    },
  };
}

const RecipeDetailsPage = ({ recipe }) => {
  useEffect(() => {
    document.title = recipe.name;
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-5">{recipe.name}</h1>

      <div className="flex flex-wrap gap-5">
        <div className="w-full lg:w-1/2">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Ingredientes:</h2>
            <ul className="list-disc ml-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Pasos:</h2>
            <ol className="list-decimal ml-5">
              {recipe.steps.map((step, index) => (
                <li key={index} className="mb-3">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-5">{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailsPage;
