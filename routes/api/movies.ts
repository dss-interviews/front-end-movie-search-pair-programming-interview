import { Handlers } from "$fresh/server.ts";

interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  genres: string[];
}

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const query = url.searchParams.get("query") || "";

    const year = url.searchParams.get("year") || "";

    try {
      const moviesData = await Deno.readTextFile("./data/movies.json");
      const movies: Movie[] = JSON.parse(moviesData);

      let filteredMovies = movies;

      if (query && query.trim()) {
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.overview.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (year) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.release_date.startsWith(year)
        );
      }

      return new Response(
        JSON.stringify({
          movies: filteredMovies,
          total_results: filteredMovies.length,
          page: 1,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ error: (error as Error).message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
