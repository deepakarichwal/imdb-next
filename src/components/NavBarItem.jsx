"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NavBarLink({ title, param }) {
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

export default function NavBarItem({ title, param }) {
  return (
    <Suspense>
      <NavBarLink title={title} param={param} />
    </Suspense>
  );
}
