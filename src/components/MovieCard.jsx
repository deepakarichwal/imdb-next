import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MovieCard({ movie }) {
  const overview = movie.overview.slice(0, 90) + "...";
  const image = `https://image.tmdb.org/t/p/w500${
    movie.poster_path || movie.backdrop_path
  }`;

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          src={image}
          alt={movie.original_title}
          width={500}
          height={500}
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title || movie.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
}
