import { ramen } from "@/public";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="flex w-full justify-center">
      <header className="flex gap-80">
        <Link href={"/"} className="flex items-center">
          <Image src={ramen} width={70} height={70} className="rounded-full" />
          <span className="font-extrabold text-4xl text-transparent bg-gradient-to-r to-chefAtHome-Orange-400 from-chefAtHome-Orange-600 bg-clip-text animated-background">
            RECIPESAPI
          </span>
        </Link>

        <nav className="flex items-center justify-center space-x-4 py-4">
          <Link
            href={"/all-recipes"}
            className="p-2 rounded hover:bg-chefAtHome-Orange-200 hover:text-chefAtHome-Orange-800 focus:outline-none focus:ring focus:ring-chefAtHome-Orange-300 transition-all duration-300"
          >
            Recetas
          </Link>
          <Link
            href={"/all-recipes"}
            className="p-2 rounded hover:bg-chefAtHome-Orange-200 hover:text-chefAtHome-Orange-800 focus:outline-none focus:ring focus:ring-chefAtHome-Orange-300 transition-all duration-300"
          >
            Categorías
          </Link>
          <Link
            href={"/all-recipes"}
            className="p-2 rounded hover:bg-chefAtHome-Orange-200 hover:text-chefAtHome-Orange-800 focus:outline-none focus:ring focus:ring-chefAtHome-Orange-300 transition-all duration-300"
          >
            Países
          </Link>
          <Link
            href={"/all-recipes"}
            className="p-2 rounded hover:bg-chefAtHome-Orange-200 hover:text-chefAtHome-Orange-800 focus:outline-none focus:ring focus:ring-chefAtHome-Orange-300 transition-all duration-300"
          >
            Github
          </Link>
          <Link
            href={"/all-recipes"}
            className="p-2 rounded hover:bg-chefAtHome-Orange-200 hover:text-chefAtHome-Orange-800 focus:outline-none focus:ring focus:ring-chefAtHome-Orange-300 transition-all duration-300"
          >
            Linkedin
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
