import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import CalenderSlide from "./CalenderSlider";
import ResultDataList from "./resultData/ResultDataList";

function SearchGrid(props) {
  console.log("search grid ************", props);
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
      <CalenderSlide></CalenderSlide>
      <ResultDataList
        date={props.date}
        pin={props.pin}
        district={props.district}
        activeFilters={activeFilters}
      ></ResultDataList>
    </div>
  );
}

export default SearchGrid;
