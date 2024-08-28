// components/SearchFilter.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/all-recipes/?search=${query}`);
    }else{
      router.push(`/all-recipes/`);
    }
  };

  return (
<aside className="p-6 border border-gray-200 rounded-lg bg-white shadow-lg">
  <form onSubmit={handleSearch} className="flex flex-col gap-4">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar recetas..."
      className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-chefAtHome-Orange-500 transition-all"
    />
    <button
      type="submit"
      className="p-3 bg-chefAtHome-Orange-500 text-white rounded-md hover:bg-chefAtHome-Orange-600 transition-all w-full font-semibold shadow-sm hover:shadow-md"
    >
      Buscar
    </button>
  </form>
</aside>

  );
};

export default SearchFilter;
