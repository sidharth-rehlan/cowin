import React from "react";
import CalenderSliderDesktop from "./calenderSliderDesktop";
import CalenderSliderMobile from "./calenderSliderMobile";
import { useDispatch } from "react-redux";
import { addSearchDate } from "redux/search/searchActions";

import "./style.scss";

function CalenderSlider() {
  const dispatch = useDispatch();
  const changeDateHandler = (date) => {
    dispatch(addSearchDate(date));
  };
  return (
    <>
      <CalenderSliderDesktop changeDateHandler={changeDateHandler} />
      <CalenderSliderMobile changeDateHandler={changeDateHandler} />
    </>
  );
}

export default CalenderSlider;
