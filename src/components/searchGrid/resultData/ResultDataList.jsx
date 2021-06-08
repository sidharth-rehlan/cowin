import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { APIConfig } from "../../../config";
import ResultDataItem from "./ResultDataItem";

function ResultData(props) {
  const [slotData, setSlotData] = useState([]);
  const pincode = props.pin;
  //const date = "08-06-2021";
  const date = moment(props.date).format("DD-MM-YYYY");

  const fetchSlotData = async () => {
    const response = await axios.get(
      `${APIConfig.baseUrl}${APIConfig.searchByPin}?pincode=${pincode}&date=${date}`
    );
    setSlotData(response.data.centers);
  };

  useEffect(() => {
    fetchSlotData();
  }, []);

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
