import { useState } from "preact/hooks";
import MovieTile, { type Movie } from "../components/MovieTile.tsx";

interface MoviesResponse {
  movies: Movie[];
}

export default function SearchForm() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const params = new URLSearchParams();

    const query = formData.get("query") as string;
    const year = formData.get("year") as string;
    const sortBy = formData.get("sortBy") as string;

    if (query) params.append("query", query);
    if (year) params.append("year", year);

    try {
      const response = await fetch(`/api/movies?${params}`);
      if (!response.ok) {
        throw new Error("Unable to search for movies. Please try again.");
      }

      const data = await response.json() as MoviesResponse;
      const results = data.movies || [];

      // Sort movies based on sortBy parameter
      if (sortBy === "rating") {
        results.sort((a: Movie, b: Movie) => b.vote_average - a.vote_average);
      } else if (sortBy === "title") {
        results.sort((a: Movie, b: Movie) => a.title.localeCompare(b.title));
      } else if (sortBy === "date") {
        results.sort((a: Movie, b: Movie) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (isNaN(dateA.getTime())) return 1;
          if (isNaN(dateB.getTime())) return -1;
          return dateB.getTime() - dateA.getTime();
        });
      }

      setMovies(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Movie Finder
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title or Keyword(s)
                </label>
                <input
                  type="text"
                  id="query"
                  name="query"
                  placeholder="Search movies..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="year"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  min="1900"
                  max="2030"
                  placeholder="Year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="sortBy"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sort By
                </label>
                <select
                  id="sortBy"
                  name="sortBy"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="rating">Rating</option>
                  <option value="title">Title</option>
                  <option value="date">Release Date</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
              >
                {loading ? "Searching..." : "Search Movies"}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {movies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Found {movies.length} movies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {movies.map((movie) => (
                <MovieTile key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {!loading && movies.length === 0 && !error && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-6xl mb-4">🍿</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Welcome to Movie Finder
            </h3>
            <p className="text-gray-600">
              Use the search form above to find movies by keyword or year.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
