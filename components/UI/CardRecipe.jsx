import Image from "next/image";
import Link from "next/link";

const CardRecipe = ({ image, name, slug, _id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="relative h-48 w-full">
        <Link href={`/all-recipes/recipe_${slug}`} passHref className="block">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </Link>
      </div>

      <div className="p-4 flex flex-col h-full justify-between">
        <div className="text-center">
          <h3 className="uppercase font-semibold text-lg text-gray-800 mb-2">
            {name}
          </h3>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href={`/recipe/${slug}`}
            passHref
            className="text-white bg-chefAtHome-Orange-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-chefAtHome-Orange-600 transition-all"
          >
            Ver receta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
