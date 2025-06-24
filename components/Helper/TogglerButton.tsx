import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const TogglerButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setIsDarkMode(true);
  }, []);
  if (!isDarkMode) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="transition-all p-2"
    >
      {currentTheme === "dark" ? (
        <BiSun className=" w-8 h-8 cursor-pointer dark:text-[var(--text)] text-[var(--text)]" />
      ) : (
        <BiMoon className=" w-8 h-8 cursor-pointer dark:text-[var(--text)] text-[var(--text)]" />
      )}
    </button>
  );
};

export default TogglerButton;
