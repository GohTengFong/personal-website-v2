"use client";

import {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type Props = {
  children?: React.ReactNode;
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultThemeContext = {
  isDarkMode: false,
  toggleTheme: () => {},
};

export const ThemeProvider = ({
  children,
}: Props): ReactElement<React.ReactNode> => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TODO - load page based on previously selected mode, else white
  // TODO - localStorage needs to store value properly
  // useEffect(() => {
  //   localStorage.setItem("currTheme", "light");
  // }, []);

  const toggleTheme = () => {
    // setIsDarkMode(!isDarkMode);
    // localStorage.setItem("currTheme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export function useTheme() {
  return useContext(ThemeContext);
}
