import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";

function CalenderDateButton(props) {
  const { day, changeDateHandler } = props;
  const formattedDate = moment(day).format("DD MMMM");
  const dateWithYear = moment(day).format("DD-MM-YYYY");

  const searchDate = useSelector((state) => state.search.searchDate);

  let buttonClass = "calenderSliderMobile-button";
  buttonClass =
    searchDate === dateWithYear ? `${buttonClass} --active` : `${buttonClass}`;
  return (
    <div className="calenderSliderMobile-button-wrapper">
      <button
        className={buttonClass}
        onClick={() => changeDateHandler(dateWithYear)}
      >
        {formattedDate}
      </button>
    </div>
  );
}

export default CalenderDateButton;
