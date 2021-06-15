import React, { useState, useEffect } from "react";
import { getDates } from "helper";
import { siteConfig } from "configs/config";
import CalenderDateItem from "./CalenderDateItem";
import "./style.scss";

const { daysInSearchFilter, datesPerPage } = siteConfig;

const totalDays = getDates(daysInSearchFilter);

function CalenderSlider(props) {
  const { changeDateHandler, initialDate } = props;
  const numberOfPages = Math.ceil(daysInSearchFilter / datesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    changeDateHandler(totalDays[currentPage * datesPerPage]);
  }, [currentPage, changeDateHandler]);

  useEffect(() => {
    setCurrentPage(0);
  }, [initialDate]);

  const previousClicked = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const nextClicked = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  let showingListDates = totalDays.slice(
    datesPerPage * currentPage,
    datesPerPage * (currentPage + 1)
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
