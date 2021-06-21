import React, { useContext } from "react";
import themeContext from "context/ThemeContext";
import "./style.scss";

function ThemeSelector() {
  const ctx = useContext(themeContext);
  const onChangeHandler = (e) => {
    const isChecked = e.target.checked;
    ctx.setTheme(isChecked);
  };
  return (
    <form className="darkThemeSelector-form">
      <label htmlFor="themeSelector">Dark Theme</label>
      <input
        type="checkbox"
        name="themeSelector"
        id="themeSelector"
        onChange={onChangeHandler}
      />
    </form>
  );
}

export default ThemeSelector;
