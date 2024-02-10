"use client";

export default function Error({ error, reset }) {
  return (
    <div className="text-center space-y-4 mt-10">
      <h2>Something went wrong. Please try again!</h2>
      <button
        className="bg-amber-500 px-5 py-1 rounded-lg font-medium"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
