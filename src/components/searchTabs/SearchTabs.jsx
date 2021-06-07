import React from "react";

import { searchTypes } from "config";
import "./style.scss";

function SearchTabs(props) {
  return (
    <div className="searchTabs">
      <button onClick={() => props.tabClickHandler(searchTypes.searchByMap)}>
        Search by MAP
      </button>
      <button onClick={() => props.tabClickHandler(searchTypes.searchByPin)}>
        Search by PIN
      </button>
      <button
        onClick={() => props.tabClickHandler(searchTypes.searchByDistrict)}
      >
        Search by District
      </button>
    </div>
  );
}

export default SearchTabs;
