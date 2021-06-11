import React from "react";
import SearchFilter from "./SearchFilter";
import CalenderSlide from "./CalenderSlider";
import ResultDataList from "./resultData/ResultDataList";

function SearchGrid(props) {
  return (
    <div>
      <SearchFilter></SearchFilter>
      <CalenderSlide></CalenderSlide>
      <ResultDataList
        date={props.date}
        pin={props.pin}
        district={props.district}
      ></ResultDataList>
    </div>
  );
}

export default SearchGrid;
