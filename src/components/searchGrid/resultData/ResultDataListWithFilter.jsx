import React from "react";
import { cloneDeep } from "lodash";
import ResultDataItem from "./ResultDataItem";
import lang from "configs/lang.config";

const checkAge = (activeFilters, session) => {
  return (
    (activeFilters.includes("age18") && session.min_age_limit === 18) ||
    (activeFilters.includes("age45") && session.min_age_limit === 45)
  );
};

const checkVaccine = (activeFilters, session) => {
  let result = false;
  if (
    ((activeFilters.includes("covishield") ||
      activeFilters.includes("covaxin") ||
      activeFilters.includes("sputnik")) &&
      activeFilters.includes("covishield") &&
      session.vaccine === "COVISHIELD") ||
    (activeFilters.includes("covaxin") && session.vaccine === "COVAXIN") ||
    (activeFilters.includes("sputnik") && session.vaccine === "SPUTNIKV")
  ) {
    result = true;
  }
  return result;
};

const removeCentersWithoutSessions = (data) => {
  return data.filter((center) => center.sessions.length > 0);
};

const applyFilterOnSessions = (modifiedData, activeFilters) => {
  modifiedData.forEach((center) => {
    if (center.sessions.length > 0) {
      let newSessions = center.sessions;
      if (activeFilters.includes("age18") || activeFilters.includes("age45")) {
        newSessions = center.sessions.filter((session) => {
          return checkAge(activeFilters, session);
        });
      }
      if (
        activeFilters.includes("covishield") ||
        activeFilters.includes("covaxin") ||
        activeFilters.includes("sputnik")
      ) {
        newSessions = newSessions.filter((session) => {
          return checkVaccine(activeFilters, session);
        });
      }

      center.sessions = newSessions;
    }
  });
  return modifiedData;
};

const filterCenterByFeeType = (centerData, activeFilters) => {
  let result = false;
  if (activeFilters.includes("paid")) {
    if (centerData.fee_type === "Paid") {
      result = true;
    }
  }
  if (activeFilters.includes("free")) {
    if (centerData.fee_type === "Free") {
      result = true;
    }
  }

  return result;
};

const modifyResponse = (responseData, activeFilters) => {
  let modifiedData = responseData;

  if (activeFilters.length > 0) {
    if (activeFilters.includes("paid") || activeFilters.includes("free"))
      modifiedData = modifiedData.filter((center) =>
        filterCenterByFeeType(center, activeFilters)
      );

    if (
      activeFilters.includes("age18") ||
      activeFilters.includes("age45") ||
      activeFilters.includes("covishield") ||
      activeFilters.includes("covaxin") ||
      activeFilters.includes("sputnik")
    ) {
      modifiedData = applyFilterOnSessions(modifiedData, activeFilters);
    }

    modifiedData = removeCentersWithoutSessions(modifiedData);
  }
  return modifiedData;
};

function ResultDataListWithFilter(props) {
  let { responseData, activeFilters } = props;

  let modifiedData = cloneDeep(responseData);

  let modifiedRespnseData = modifyResponse(modifiedData, [...activeFilters]);
  return (
    <>
      {modifiedRespnseData.length > 0 &&
        modifiedRespnseData.map((slotCenter) => {
          return (
            <ResultDataItem
              centerData={slotCenter}
              key={slotCenter.center_id}
            ></ResultDataItem>
          );
        })}
      {modifiedRespnseData.length === 0 && (
        <p className="--bold --align-center">{lang.vaccineNotAvailable}</p>
      )}
    </>
  );
}

export default ResultDataListWithFilter;
