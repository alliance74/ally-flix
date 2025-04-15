import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tmdbApi, { category } from '../api/tmdbApi';
import MovieCard from './moviecard';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const movieRes = await tmdbApi.search(category.movie, { query });
        const tvRes = await tmdbApi.search(category.tv, { query });

        // Combine results and filter based on query (case-insensitive)
        const combined = [
          ...movieRes.results,
          ...tvRes.results
        ].filter(item =>
          (item.title || item.name).toLowerCase().includes(query.toLowerCase())
        );

        setResults(combined);
      } catch (err) {
        console.error('Failed to search:', err);
        setError('Failed to fetch search results. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Search Results for "{query || 'All Movies & TV Shows'}"</h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-8">
          {error}
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-8">
          No results found. Try a different search term.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {results.map((item) => (
            <MovieCard
              key={item.id + item.name + item.title}
              item={item}
              category={item.media_type || (item.title ? 'movie' : 'tv')}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
