import { useRouter } from "next/router";

// components
import PaginationComponent from "@/components/UI/PaginationComponet";
import SearchFilter from "@/components/SearchFilter";
import RootLayout from "@/components/Layout/RootLayout";
import CardRecipe from "@/components/UI/CardRecipe";

export async function getServerSideProps(context) {
  const { page = 1, search = "" } = context.query;
  const currentPage = Number(page);
  const searchQuery = search ? search : "";
  const limit = 10;
  const url = `https://www.recipesapi.online/v1/api/recipes/search?name=${searchQuery}&limit=${limit}&page=${currentPage}`;

  try {
    const recipesData = await fetch(url);
    const recipesResponse = await recipesData.json();

    if (currentPage < 1 || currentPage > recipesResponse.totalPages) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          recipesResponse: recipesResponse ? recipesResponse : null,
          currentPage: currentPage ? currentPage : null,
          search: search,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      props: {
        recipesResponse: null,
        currentPage: currentPage,
        search: search,
      },
    };
  }
}

const AllRecipesPage = ({ recipesResponse, currentPage, search }) => {
  const router = useRouter();

  const handlePagination = (newPage) => {
    router.push(`/all-recipes/?page=${newPage}&search=${search}`);
  };

  return (
    <RootLayout>
      <div className={`grid p-10`}>
        <div className="grid lg:flex">
          {/* Filtro de Búsqueda */}
          <div className="lg:w-1/4 w-auto">
            <SearchFilter />
          </div>

          {/* Contenido Principal */}
          <div className="ml-0 w-auto lg:ml-10 lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {recipesResponse &&
              recipesResponse.data &&
              recipesResponse.data.length > 0 ? (
                recipesResponse.data.map((recipe) => (
                  <div key={recipe._id}>
                    <CardRecipe
                      image={recipe.image}
                      name={recipe.name}
                      slug={recipe.slug}
                    />
                  </div>
                ))
              ) : (
                <p className="mt-12">
                  No se encontraron recetas para la búsqueda "{search}".
                </p>
              )}
            </div>

            {/* Paginación */}
            {recipesResponse && recipesResponse.totalPages > 1 && (
              <PaginationComponent
                handlePagination={handlePagination}
                currentPage={currentPage}
                recipesResponse={recipesResponse}
              />
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AllRecipesPage;
