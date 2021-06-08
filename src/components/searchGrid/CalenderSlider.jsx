import React, { useState } from "react";
import { getDates } from "helper";
import { siteConfig } from "../../config";
import CalenderDateItem from "./CalenderDateItem";

const { daysInSearchFilter, searchDatesPerPage } = siteConfig;

const totalDays = getDates(daysInSearchFilter);

function CalenderSlider() {
  const numberOfPages = Math.ceil(daysInSearchFilter / searchDatesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const previousClicked = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const nextClicked = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  let showingListDates = totalDays.slice(
    searchDatesPerPage * currentPage,
    searchDatesPerPage * (currentPage + 1)
  );

  return (
    <div className="calenderSlider">
      <button onClick={previousClicked} disabled={currentPage === 0}>
        Previous
      </button>
      <div>
        {showingListDates.map((day) => {
          return <CalenderDateItem key={day} day={day} />;
        })}
      </div>
      <button
        onClick={nextClicked}
        disabled={currentPage === numberOfPages - 1}
      >
        Next
      </button>
    </div>
  );
}

export default CalenderSlider;
