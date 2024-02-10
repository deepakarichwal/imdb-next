"use client";

import { useState } from "react";
import { HiPlayCircle } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4 px-4">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <HiPlayCircle className="text-xl" />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex gap-3 items-center py-2.5 px-6 ms-2 text-sm font-medium text-white bg-amber-500 rounded-lg border border-amber-500 hover:bg-amber-600 focus:outline-none  "
      >
        Search
      </button>
    </form>
  );
}
