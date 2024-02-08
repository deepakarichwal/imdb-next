"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const style = "text-xl hover:text-amber-500 cursor-pointer";

  return (
    <>
      {currentTheme === "dark" ? (
        <HiSun className={style} onClick={() => setTheme("light")} />
      ) : (
        <HiMoon className={style} onClick={() => setTheme("dark")} />
      )}
    </>
  );
}
