import MoviesList from "@/components/MoviesList";

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Search({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();
  const result = data.results;

  return (
    <div>
      {result && result.length === 0 ? (
        <h1 className="text-center mt-6">
          No result found with the ({params.searchTerm}) keyword.
        </h1>
      ) : (
        result && <MoviesList movies={result} />
      )}
    </div>
  );
}
