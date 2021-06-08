import React from "react";
import { searchFilter } from "config";
import "./style.scss";

function SearchFilter() {
  return (
    <div className="searchFilter">
      <form>
        {searchFilter.map((filter) => {
          console.log(filter);
          return (
            <span className="searchFilter-item" key={filter.id}>
              <input type="checkbox" name={filter.id} id={filter.id} />
              <label htmlFor={filter.id}>{filter.value}</label>
            </span>
          );
        })}
      </form>
    </div>
  );
}

export default SearchFilter;
