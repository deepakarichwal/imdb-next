import MovieCard from "@/components/MovieCard";
import React from "react";

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Search({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${params.searchTerm}`
  );

  const movies = await res.json();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-4">
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
