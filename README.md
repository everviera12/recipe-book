import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// assets
import { lupa } from "@/public";

export async function getServerSideProps() {
  const url = "https://www.recipesapi.online/v1/api/recipes";
  const recipesData = await fetch(url);
  const recipesResponse = await recipesData.json();

  return {
    props: {
      recipesResponse: recipesResponse ? recipesResponse : null,
    },
  };
}

const AllRecipesPage = ({ recipesResponse }) => {
  console.log(recipesResponse);

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
    <div className={`grid justify-center ${montserrat.className}`}>
      <div className="flex">

        {/* Sidebar */}
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-chefAtHome-Beige-50 border-r border-chefAtHome-Orange-200">
          <div className="h-full px-4 py-6 overflow-y-auto">
            {/* Formulario de Búsqueda */}
            <form className="mb-6">
              <div className="relative">
                <Image
                  className="absolute inset-y-4 left-2 flex items-center pointer-events-none"
                  src={lupa}
                  alt="lupa-icon"
                  width={20}
                  height={30}
                />
                <input
                  type="search"
                  className="block w-full p-4 pl-8 text-sm text-chefAtHome-Orange-900 border border-chefAtHome-Orange-300 rounded-lg bg-chefAtHome-Orange-100 focus:ring-chefAtHome-Orange-500 focus:border-chefAtHome-Orange-500 focus:outline-none"
                  placeholder="Search recipes..."
                />
                <button
                  type="submit"
                  className="text-white absolute right-1 bottom-3 bg-chefAtHome-Orange-600 hover:bg-chefAtHome-Orange-700 focus:outline-none focus:ring-chefAtHome-Orange-300 font-medium rounded-lg text-sm px-2 py-1 transition-all"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </aside>

        {/* Main Content */}
        <div className="p-4 sm:ml-64 w-full">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipesResponse?.data?.map((recipe) => {
              const isExpanded = recipe._id === expandedRecipeId;

              return (
                <div
                  className="bg-chefAtHome-Orange-100 border border-chefAtHome-Orange-200 rounded-lg flex flex-col justify-between min-w-[250px] max-w-[350px] min-h-[400px] p-4"
                  key={recipe._id}
                >
                  <div>
                    <Link href="/" className="grid justify-center w-full">
                      <Image
                        width={300}
                        height={250}
                        className="rounded-lg w-full flex justify-center lg:w-auto"
                        src={recipe.image}
                        alt={recipe.name}
                      />
                      <div className="py-3 text-center">
                        <h3 className="uppercase font-medium text-xl text-chefAtHome-Orange-600">
                          {recipe.name}
                        </h3>
                      </div>
                    </Link>

                    <div className="flex flex-col items-center">
                      <div className="pb-3">
                        <p className="text-sm font-normal">
                          {isExpanded
                            ? recipe.description
                            : truncateText(recipe.description, maxLength)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-5 justify-between gap-3">
                    <button
                      className="text-chefAtHome-Orange-600 text-sm font-medium"
                      onClick={() => handleReadMore(recipe._id)}
                    >
                      {isExpanded ? "Leer menos" : "Leer más"}
                    </button>

                    <Link
                      href={"/"}
                      className="text-chefAtHome-Orange-100 bg-orange-400 px-2 py-1 rounded text-sm font-medium hover:bg-chefAtHome-Orange-400 hover:text-chefAtHome-Orange-800 transition-all"
                    >
                      Ver receta
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllRecipesPage;
