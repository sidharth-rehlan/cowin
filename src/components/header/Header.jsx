import React, { useContext } from "react";
import "./style.scss";
import themeContext from "context/ThemeContext";
import ThemeSelector from "components/themeSelector";

function Header() {
  const ctx = useContext(themeContext);

  return (
    <header className={ctx.mode}>
      <ThemeSelector />
    </header>
  );
}

export default Header;
