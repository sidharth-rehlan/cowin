import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import ResultDataItem from "./ResultDataItem";
import { fetchSlotByPin } from "services";

function ResultData(props) {
  const [slotData, setSlotData] = useState([]);
  const pincode = props.pin;
  //const date = "08-06-2021";
  const date = moment(props.date).format("DD-MM-YYYY");

  const fetchSlotData = useCallback(async () => {
    const response = await fetchSlotByPin(pincode, date);
    setSlotData(response.centers);
  }, [pincode, date]);

  useEffect(() => {
    fetchSlotData();
  }, [pincode, date, fetchSlotData]);

  return (
    <div>
      {console.log("slotData", slotData)}
      {slotData.length > 0 &&
        slotData.map((slotCenter) => {
          return (
            <ResultDataItem
              centerData={slotCenter}
              key={slotCenter.center_id}
            ></ResultDataItem>
          );
        })}
    </div>
  );
}

export default ResultData;
