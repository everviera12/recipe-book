import CardCountry from "./UI/CardCountry";
import {
  argentina,
  brasil,
  colombia,
  espana,
  estadosunidos,
  italia,
  mexico,
  republicadominicana,
  venezuela,
} from "@/public/index";

const RecipeCountries = ({ recipesCountryResponse }) => {
  console.log(recipesCountryResponse);

  const arrayCountryImages = [
    republicadominicana,
    espana,
    estadosunidos,
    mexico,
    argentina,
    brasil,
    italia,
    venezuela,
    colombia,
  ];

  return (
    <>
      <h2 className="text-4xl leading-relaxed px-5 text-left w-auto md:px-0 md:text-center md:w-[690px] lg:w-[850px] md:text-5xl">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-chefAtHome-Orange-400 from-chefAtHome-Orange-600">
          CONOCE LOS PLATOS TÍPICOS DE CADA PAIS
        </span>
      </h2>

      <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {recipesCountryResponse.data.map((dataCountry, index) => (
          <CardCountry
            key={dataCountry._id}
            name={dataCountry.name}
            _id={dataCountry._id}
            arrayCountry={arrayCountryImages[index]}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeCountries;
