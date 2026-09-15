import { Handlers } from "$fresh/server.ts";

interface Movie {
  genres: string[];
}

export const handler: Handlers = {
  async GET() {
    try {
      const moviesData = await Deno.readTextFile("./data/movies.json");
      const movies: Movie[] = JSON.parse(moviesData);
      const genres = [...new Set(movies.flatMap((movie) => movie.genres))]
        .sort();

      return Response.json({ genres });
    } catch {
      return Response.json(
        { error: "Unable to load genres." },
        { status: 500 },
      );
    }
  },
};
