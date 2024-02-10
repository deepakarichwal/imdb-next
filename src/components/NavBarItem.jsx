"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-500 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}