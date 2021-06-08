import React from "react";
import moment from "moment";

function CalenderDateItem(props) {
  return (
    <div className="calenderDateItem">
      {moment(props.day).format("DD MMMM YY")}
    </div>
  );
}

export default CalenderDateItem;
