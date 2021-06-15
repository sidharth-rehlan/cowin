import React from "react";
import { searchFilter } from "configs/config";
import "./style.scss";

function SearchFilter(props) {
  const onFilterClicked = (e, filterId) => {
    props.onSelectingFilter(filterId, e.target.checked);
  };

  return (
    <div className="searchFilter">
      <form>
        {searchFilter.map((filter) => {
          return (
            <div className="searchFilter-item" key={filter.id}>
              <input
                type="checkbox"
                name={filter.id}
                id={filter.id}
                onClick={(e) => onFilterClicked(e, filter.id)}
              />
              <label htmlFor={filter.id}>{filter.value}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default SearchFilter;
