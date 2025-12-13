'use client'
import { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return null;
};

export default ThemeToggler;
