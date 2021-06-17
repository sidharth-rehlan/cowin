import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getDates } from "helper";
import { siteConfig } from "configs/config";
import CalenderDateItem from "./CalenderDateItem";
import moment from "moment";
import "./style.scss";

const { daysInSearchFilter, datesPerPage } = siteConfig;

const totalDays = getDates(daysInSearchFilter);

function CalenderSliderDesktop(props) {
  const { changeDateHandler } = props;
  const numberOfPages = Math.ceil(daysInSearchFilter / datesPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const searchDate = useSelector((state) => state.search.searchDate);

  useEffect(() => {
    const formattedCurrentDate = moment(
      totalDays[currentPage * datesPerPage]
    ).format("DD-MM-YYYY");

    changeDateHandler(formattedCurrentDate);
  }, [currentPage, changeDateHandler]);

  useEffect(() => {
    if (searchDate === moment(totalDays[0]).format("DD-MM-YYYY"))
      setCurrentPage(0);
  }, [searchDate]);

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

  let nextButtonClass = "calenderSliderDesktop-next-btn";
  nextButtonClass =
    currentPage === numberOfPages - 1
      ? `${nextButtonClass} --disable`
      : nextButtonClass;

  let prevButtonClass = "calenderSliderDesktop-prev-btn";
  prevButtonClass =
    currentPage === 0 ? `${prevButtonClass} --disable` : prevButtonClass;

  return (
    <div className="calenderSliderDesktop">
      <div className="calenderSliderDesktop-items-container">
        <div className="calenderSliderDesktop-prev">
          <button
            className={prevButtonClass}
            onClick={previousClicked}
            disabled={currentPage === 0}
          >
            <MdKeyboardArrowLeft color="#ffffff" size="35" />
          </button>
        </div>
        <div className="calenderSliderDesktop-datesList">
          {showingListDates.map((day) => {
            return <CalenderDateItem key={day} day={day} />;
          })}
        </div>
        <div className="calenderSliderDesktop-next">
          <button
            className={nextButtonClass}
            onClick={nextClicked}
            disabled={currentPage === numberOfPages - 1}
          >
            <MdKeyboardArrowRight color="#ffffff" size="35" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalenderSliderDesktop;
