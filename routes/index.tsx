import { Head } from "$fresh/runtime.ts";
import SearchForm from "../islands/SearchForm.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie Finder</title>
        <meta name="description" content="Search for movies" />
      </Head>
      <SearchForm />
    </>
  );
}
