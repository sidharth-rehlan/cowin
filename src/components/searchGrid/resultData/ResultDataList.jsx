import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import ResultDataItem from "./ResultDataItem";
import { fetchSlotsByDistrict, fetchSlotByPin } from "services";

function ResultData(props) {
  const [slotData, setSlotData] = useState([]);
  const pincode = props.pin;
  const district = props.district;
  //const date = "08-06-2021";
  const date = moment(props.date).format("DD-MM-YYYY");

  const fetchSlotData = useCallback(async () => {
    let response;
    if (pincode) {
      response = await fetchSlotByPin(pincode, date);
    }
    if (district) {
      response = await fetchSlotsByDistrict(district, date);
    }

    console.log("response...", response);

    setSlotData(response.centers);
  }, [pincode, date, district]);

  useEffect(() => {
    fetchSlotData();
  }, [pincode, date, fetchSlotData, district]);

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
