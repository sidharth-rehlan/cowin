import React, { useState, useContext } from "react";
import themeContext from "context/ThemeContext";
import { searchTypes } from "configs/config";
import "./style.scss";

function SearchTabs(props) {
  const { tabClickHandler } = props;
  const [activeButton, setActiveButton] = useState(searchTypes.searchByPin);
  const clickButtonHandler = (buttonType) => {
    setActiveButton(buttonType);
    tabClickHandler(buttonType);
  };

  const ctx = useContext(themeContext);

  return (
    <div className={`${ctx.mode} searchTabs`}>
      <div className="searchButtons">
        <button
          className={
            activeButton === searchTypes.searchByPin
              ? "searchButtons-active button"
              : "button"
          }
          onClick={() => clickButtonHandler(searchTypes.searchByPin)}
        >
          Search by PIN
        </button>
        <button
          className={
            activeButton === searchTypes.searchByDistrict
              ? "searchButtons-active button"
              : "button"
          }
          onClick={() => clickButtonHandler(searchTypes.searchByDistrict)}
        >
          Search by District
        </button>
        <button
          className={
            activeButton === searchTypes.searchByMap
              ? "searchButtons-active button"
              : "button"
          }
          onClick={() => clickButtonHandler(searchTypes.searchByMap)}
        >
          Search by MAP
        </button>
      </div>
    </div>
  );
}

export default SearchTabs;
