import React, { useState, useEffect } from "react";
import SearchFilter from "./searchFilter";
import CalenderSlide from "./calenderSlider";
import ResultDataList from "./resultData/ResultDataList";

function SearchGrid(props) {
  const { pin, date, district } = props;
  const [activeFilters, setActiveFilters] = useState([]);
  const onSelectingFilter = (filterId, value) => {
    let newActiveFilters = value
      ? [...activeFilters, filterId]
      : activeFilters.filter((filter) => filter !== filterId);
    setActiveFilters(newActiveFilters);
  };

  useEffect(() => {
    setSelectedDate(date);
  }, [pin, date]);

  const [selectedDate, setSelectedDate] = useState(date);

  const changeDateHandler = (updatedDate) => {
    setSelectedDate(updatedDate);
  };
  return (
    <div>
      <SearchFilter onSelectingFilter={onSelectingFilter} />
      <CalenderSlide
        changeDateHandler={changeDateHandler}
        initialDate={date}
      ></CalenderSlide>
      <ResultDataList
        date={selectedDate}
        pin={pin}
        district={district}
        activeFilters={activeFilters}
      ></ResultDataList>
    </div>
  );
}

export default SearchGrid;
