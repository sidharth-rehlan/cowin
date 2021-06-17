import React, { useState } from "react";
import SearchFilter from "./searchFilter";
import CalenderSlider from "./calenderSlider";
import ResultDataList from "./resultData/ResultDataList";

function SearchGrid(props) {
  const { pin, district } = props;
  const [activeFilters, setActiveFilters] = useState([]);
  const onSelectingFilter = (filterId, value) => {
    let newActiveFilters = value
      ? [...activeFilters, filterId]
      : activeFilters.filter((filter) => filter !== filterId);
    setActiveFilters(newActiveFilters);
  };

  return (
    <div>
      <SearchFilter onSelectingFilter={onSelectingFilter} />
      <CalenderSlider />
      <ResultDataList
        pin={pin}
        district={district}
        activeFilters={activeFilters}
      ></ResultDataList>
    </div>
  );
}

export default SearchGrid;
