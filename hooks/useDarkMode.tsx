import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkModeOn, toggleDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode) {
      toggleDarkMode(darkMode === "true");
    }
  }, []);

  const handleDarkModeToggle = () => {
    toggleDarkMode((prevState) => {
      localStorage.setItem("darkMode", JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return [isDarkModeOn, handleDarkModeToggle];
};
