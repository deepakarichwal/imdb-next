import Loading from "@/app/loading";
import MovieDetails from "@/components/MovieDetails";
import { Suspense } from "react";

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Movie({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${MOVIE_API_KEY}&language=en-US`
  );

  const data = await res.json();

  return (
    <Suspense fallback={<Loading />}>
      <MovieDetails movie={data} />;
    </Suspense>
  );
}
