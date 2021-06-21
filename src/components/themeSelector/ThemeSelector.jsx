import React, { useContext, useState } from "react";
import Switch from "react-switch";

import themeContext from "context/ThemeContext";
import "./style.scss";

function ThemeSelector() {
  const ctx = useContext(themeContext);

  const [checked, setchecked] = useState(false);

  const onChangeHandler = () => {
    ctx.setTheme(checked);
    setchecked(!checked);
  };
  return (
    <form className="darkThemeSelector-form">
      <label htmlFor="themeSelector">Theme</label>
      <Switch
        onChange={onChangeHandler}
        onColor="#ffa500"
        offColor="#000"
        checked={checked}
        className="darkThemeSelector-switch"
      />
    </form>
  );
}

export default ThemeSelector;
