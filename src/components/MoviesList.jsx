import Movie from "./Movie";

function MoviesList({ movies }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-4">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
