import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addSearchDate } from "redux/search/searchActions";

import moment from "moment";
import ResultDataListWithFilter from "./ResultDataListWithFilter";
import { fetchSlotsByDistrict, fetchSlotByPin } from "services";

function ResultData(props) {
  const [responseData, setResponseData] = useState([]);
  const pincode = props.pin;
  const district = props.district;

  const dispatch = useDispatch();

  //const date = "08-06-2021";
  const date = moment(props.date).format("DD-MM-YYYY");
  dispatch(addSearchDate(date));
  const fetchSlotData = useCallback(async () => {
    let response;
    if (pincode) {
      response = await fetchSlotByPin(pincode, date);
    }
    if (district) {
      response = await fetchSlotsByDistrict(district, date);
    }

    setResponseData(response.centers);
  }, [pincode, date, district]);

  useEffect(() => {
    fetchSlotData();
  }, [pincode, date, fetchSlotData, district]);

  return (
    <div className="resultDataList">
      {responseData.length > 0 && (
        <ResultDataListWithFilter
          responseData={responseData}
          activeFilters={props.activeFilters}
        />
      )}
      {responseData.length === 0 && (
        <p className="--bold">
          No Vaccination center is available for booking.
        </p>
      )}
    </div>
  );
}

export default ResultData;
