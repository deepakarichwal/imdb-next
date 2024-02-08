"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-800 dark:text-gray-200 dark:bg-gray-900 min-h-screen select-none transition-colors duration-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
