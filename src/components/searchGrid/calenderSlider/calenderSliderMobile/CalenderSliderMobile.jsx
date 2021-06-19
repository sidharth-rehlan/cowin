import React from "react";
import moment from "moment";
import { getDates } from "helper";
import { siteConfig } from "configs/config";
import CalenderDateButton from "./CalenderDateButton";
import "./style.scss";

const { daysInSearchFilter } = siteConfig;
const totalDays = getDates(daysInSearchFilter);

function CalenderSliderMobile(props) {
  const { changeDateHandler } = props;

  return (
    <div className="calenderSliderMobile">
      {totalDays.map((day) => {
        return (
          <CalenderDateButton
            key={moment(day).format("DD MMMM YY")}
            day={day}
            changeDateHandler={changeDateHandler}
          ></CalenderDateButton>
        );
      })}
    </div>
  );
}

export default CalenderSliderMobile;
