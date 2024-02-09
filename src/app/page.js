import MoviesList from "@/components/MoviesList";

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre;

  const modifiedGenre =
    genre === undefined
      ? "/movie/now_playing"
      : genre === "fetchTopRated"
      ? "/movie/top_rated"
      : "/trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.org/3${modifiedGenre}?api_key=${MOVIE_API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // console.log(data.results);
  return (
    <div>
      <MoviesList movies={data.results} />
    </div>
  );
}
