const PaginationComponent = ({
  handlePagination,
  currentPage,
  recipesResponse,
}) => {
  // Número total de páginas
  const totalPages = recipesResponse?.totalPages || 1;

  // Rango de páginas para mostrar (para evitar mostrar todos los números de página)
  const range = 3; // Número de páginas a mostrar alrededor de la página actual
  const rangeStart = Math.max(1, currentPage - range);
  const rangeEnd = Math.min(totalPages, currentPage + range);

  return (
    <div className="flex justify-center mt-8 space-x-2">
      <button
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 mx-1 text-chefAtHome-Orange-600 bg-chefAtHome-Orange-100 rounded-full hover:bg-chefAtHome-Orange-200 disabled:bg-chefAtHome-Orange-50 disabled:text-chefAtHome-Orange-200 transition-all duration-200"
      >
        Anterior
      </button>

      {/* Primer número de página si está fuera del rango de visualización */}
      {rangeStart > 1 && (
        <>
          <button
            onClick={() => handlePagination(1)}
            className={`px-4 py-2 mx-1 rounded-full text-chefAtHome-Orange-600 bg-chefAtHome-Orange-100 hover:bg-chefAtHome-Orange-200 transition-all duration-200 ${
              currentPage === 1 ? "bg-chefAtHome-Orange-600 text-white" : ""
            }`}
          >
            1
          </button>
          {rangeStart > 2 && <span className="px-2 py-2">...</span>}
        </>
      )}

      {/* Números de página en el rango */}
      {Array.from(
        { length: rangeEnd - rangeStart + 1 },
        (_, i) => rangeStart + i
      ).map((page) => (
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={`px-4 py-2 mx-1 rounded-full ${
            currentPage === page
              ? "bg-chefAtHome-Orange-600 text-white"
              : "text-chefAtHome-Orange-600 bg-chefAtHome-Orange-100 hover:bg-chefAtHome-Orange-200 transition-all duration-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Último número de página si está fuera del rango de visualización */}
      {rangeEnd < totalPages && (
        <>
          {rangeEnd < totalPages - 1 && <span className="px-2 py-2">...</span>}
          <button
            onClick={() => handlePagination(totalPages)}
            className={`px-4 py-2 mx-1 rounded-full text-chefAtHome-Orange-600 bg-chefAtHome-Orange-100 hover:bg-chefAtHome-Orange-200 transition-all duration-200 ${
              currentPage === totalPages
                ? "bg-chefAtHome-Orange-600 text-white"
                : ""
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Botón Siguiente */}
      <button
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 mx-1 text-chefAtHome-Orange-600 bg-chefAtHome-Orange-100 rounded-full hover:bg-chefAtHome-Orange-200 disabled:bg-chefAtHome-Orange-50 disabled:text-chefAtHome-Orange-200 transition-all duration-200"
      >
        Siguiente
      </button>
    </div>
  );
};

export default PaginationComponent;
