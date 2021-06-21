import React, { useState } from "react";

const themeContext = React.createContext();

//const ThemeProvider = themeContext.Provider;

const ThemeProvider = ({ children }) => {
  const [mode, setTheme] = useState("light");
  return (
    <themeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

const ThemeConsumer = themeContext.Consumer;

export { ThemeConsumer, ThemeProvider };

export default themeContext;
