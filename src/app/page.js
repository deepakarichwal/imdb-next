import MoviesList from "@/components/MoviesList";
import next from "next";
import { revalidatePath } from "next/cache";

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre;

  const modifiedGenre =
    genre === undefined
      ? "/movie/now_playing"
      : genre === "fetchTopRated"
      ? "/movie/top_rated"
      : "/trending/all/week";

  // FOR LOADING TESTING PURPOSE
  // const res = await new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3${modifiedGenre}?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
  //       { next: { revalidate: 60 * 60 } }
  //     );
  //     resolve(response);
  //   }, 2000);
  // });

  const res = await fetch(
    `https://api.themoviedb.org/3${modifiedGenre}?api_key=${MOVIE_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div>
      <MoviesList movies={data.results} />
    </div>
  );
}
