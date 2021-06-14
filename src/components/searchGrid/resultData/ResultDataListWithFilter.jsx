import React from "react";
import { cloneDeep } from "lodash";
import ResultDataItem from "./ResultDataItem";

// const iseighteenPlus = (item) => item.min_age_limit === 18;
// const isfourtyFivePlus = (item) => item.min_age_limit === 45;
// const isFree = (item) => {
//   console.log('isFree', item);
//   return item.fee_type === "Free"
// };
// const isPaid = (item) => !isFree(item);
// const isCovaxin = (item) => {
//   console.log('isCovaxin', item);
//   return item.vaccine === 'COVAXIN';
// }
// const isCovishield = (item) => {
//   console.log('isCovishield', item);
//   return item.vaccine === 'COVISHIELD';
// }
// const chooseCenter = (ageGroupFilterFunc) => (items) => items.filter(ageGroupFilterFunc);
// const chooseFeeTypeCenter = (feeTypeFilterFunc) => (items) => items.filter(feeTypeFilterFunc);

// const filters = {
//   age18: iseighteenPlus,
//   age45: isfourtyFivePlus,
//   free: isFree,
//   paid: isPaid,
//   covaxin: isCovaxin,
//   covishield : isCovishield
// };

// const funcs = (filtersArray) => filtersArray.map(k => filters[k]);

// const compose = (...functions) => (data) => functions.reduceRight((acc, fn) => fn(acc), data);
// // const filterby = (...functions) => (data) => data.filter(item.)
// const composeOr = (...funcs) => items =>

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
  // console.log(responseData);
  // console.log(activeFilters);
  let modifiedData = responseData;
  console.log("before checking.....", modifiedData);

  if (activeFilters.length > 0) {
    if (activeFilters.includes("paid") || activeFilters.includes("free"))
      modifiedData = modifiedData.filter((center) =>
        filterCenterByFeeType(center, activeFilters)
      );

    console.log("first checking", modifiedData);
    if (
      activeFilters.includes("age18") ||
      activeFilters.includes("age45") ||
      activeFilters.includes("covishield") ||
      activeFilters.includes("covaxin") ||
      activeFilters.includes("sputnik")
    ) {
      modifiedData = applyFilterOnSessions(modifiedData, activeFilters);
    }

    console.log("second checking...", modifiedData);
    modifiedData = removeCentersWithoutSessions(modifiedData);
    console.log("third checking....", modifiedData);
  }
  return modifiedData;
};

function ResultDataListWithFilter(props) {
  let { responseData, activeFilters } = props;
  console.log("beforeJSON...", responseData);
  //console.log("activefilter:", activeFilters);
  //  let modifiedData = responseData;

  let modifiedData = cloneDeep(responseData);
  console.log("afterJSON......", modifiedData);

  let modifiedRespnseData = modifyResponse(modifiedData, [...activeFilters]);
  console.log("final......", modifiedRespnseData);
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
    </>
  );
}

export default ResultDataListWithFilter;