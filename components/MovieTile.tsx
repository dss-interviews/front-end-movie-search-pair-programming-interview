export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
}

interface MovieTileProps {
  movie: Movie;
}

export default function MovieTile({ movie }: MovieTileProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={movie.poster_path ||
            "https://placehold.co/300x450/e5e7eb/6b7280?text=No+Poster"}
          alt={movie.title}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {movie.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : "Unknown"}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">
          {movie.overview || "No description available"}
        </p>
      </div>
    </div>
  );
}
