import Image from "next/image";
import Link from "next/link";
import RootLayout from "@/components/Layout/RootLayout";


// assets
import { illustrations01 } from "@/public/index";

// components
import RecipeCategoriesComponent from "@/components/RecipeCategories";
import LatestRecipesComponent from "@/components/LatestRecipes";
import RecipeCpuntrys from "@/components/RecipesCountrys";

export async function getServerSideProps() {

  // https://www.recipesapi.online/docs#/Recetas/RecipesController_findAll

  const urlRecipesLatest =
    "https://www.recipesapi.online/v1/api/recipes/latest?limit=6";
  const recipesLatestData = await fetch(urlRecipesLatest);
  const recipesLatestResponse = await recipesLatestData.json();
  // console.log(recipesLatestResponse);

  const urlCountrys = "https://www.recipesapi.online/v1/api/countries";
  const recipesCountryData = await fetch(urlCountrys);
  const recipesCountryResponse = await recipesCountryData.json();
  console.log(recipesCountryResponse);

  return {
    props: {
      recipesLatestResponse: recipesLatestResponse ? recipesLatestResponse : null,
      recipesCountryResponse: recipesCountryResponse ? recipesCountryResponse : null,
    },
  };
}

export default function Home({
  recipesLatestResponse,
  recipesCountryResponse,
}) {
  // console.log(recipesCountryResponse);

  return (
    <RootLayout>
      <section className="grid bg-chefAtHome-Beige-50 items-center lg:flex">
        <div className="flex justify-center w-full">
          <Image src={illustrations01} alt="illustrations01" />
        </div>

        <div className="grid px-5 justify-center w-full lg:px-0">
          <div className="py-5 ">
            <h1 className="text-5xl lg:text-5xl leading-relaxed">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-chefAtHome-Orange-600 from-chefAtHome-Orange-300">
                Chef en Casa.
              </span>
            </h1>

            <p className="font-normal text-lg text-chefAtHome-Orange-950">
              Aprende a cocinar con estas fabulosas y fáciles recetas
            </p>
          </div>

          <Link
            href={"/all-recipes"}
            className="w-[200px] text-center focus:outline-none transition-all text-white bg-chefAtHome-Orange-400 hover:bg-chefAtHome-Orange-500 focus:ring-1 focus:ring-chefAtHome-Orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-chefAtHome-Orange-900"
          >
            Ver todas las recetas
          </Link>
        </div>
      </section>

      <section className="flex justify-center items-center py-16">
        <RecipeCategoriesComponent />
      </section>

      <section className="grid items-center px-10">
        <LatestRecipesComponent recipesLatestResponse={recipesLatestResponse} />
      </section>

      <section className="grid py-16 justify-center items-center">
        <RecipeCpuntrys recipesCountryResponse={recipesCountryResponse} />
      </section>
    </RootLayout>
  );
}
