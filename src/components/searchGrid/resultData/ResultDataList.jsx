import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import ResultDataListWithFilter from "./ResultDataListWithFilter";
import { fetchSlotsByDistrict, fetchSlotByPin } from "services";
import lang from "configs/lang.config";

function ResultData(props) {
  const [responseData, setResponseData] = useState([]);
  const { pin, district, activeFilters } = props;

  const date = useSelector((state) => state.search.searchDate);

  const fetchSlotData = useCallback(async () => {
    let response;
    if (pin) {
      response = await fetchSlotByPin(pin, date);
    }
    if (district) {
      response = await fetchSlotsByDistrict(district, date);
    }

    setResponseData(response.centers);
  }, [pin, date, district]);

  useEffect(() => {
    fetchSlotData();
  }, [pin, date, fetchSlotData, district]);

  return (
    <div className="resultDataList">
      {responseData.length > 0 && (
        <ResultDataListWithFilter
          responseData={responseData}
          activeFilters={activeFilters}
        />
      )}
      {responseData.length === 0 && (
        <p className="--bold resultDataList-no-vaccine">
          {lang.vaccineNotAvailable}
        </p>
      )}
    </div>
  );
}

export default ResultData;
