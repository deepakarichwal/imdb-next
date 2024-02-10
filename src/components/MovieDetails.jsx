import Image from "next/image";
import Link from "next/link";

export default function MovieDetails({ movie }) {
  let image;
  if (movie.poster_path || movie.backdrop_path) {
    image = `https://image.tmdb.org/t/p/w500${
      movie.poster_path || movie.backdrop_path
    }`;
  } else {
    image = "/image-placeholder.jpg";
  }

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="flex flex-col sm:gap-8 items-center  md:flex-row md:max-w-4xl ">
        <Image
          className="object-cover w-full rounded-lg  md:h-auto md:w-80 "
          src={image}
          alt={movie.original_title || movie.title}
          width={500}
          height={900}
        />
        <div className="flex flex-col justify-between p-4 leading-normal space-y-4">
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
          <p className=" font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>

          <div className="space-x-4">
            {movie?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="border-2 border-gray-500 dark:border-gray-700 px-4 py-1 rounded-3xl dark:text-gray-300 "
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div>
            <span className="font-medium">Budget: </span> {movie.budget}
          </div>

          <div>
            <span className="font-medium">Release Date: </span>
            {movie.release_date}
          </div>

          <div>
            <span className="font-medium">Runtime: </span>
            {movie.runtime} minutes
          </div>

          <div>
            <span className="font-medium">IMDb Id: </span>
            {movie.imdb_id}
          </div>
        </div>
      </div>
    </div>
  );
}
