import React from "react";
import "./style.scss";
import ResultCard from "./resultCard";
import { isEmpty } from "lodash";

function ResultCards(props) {
  const { name, address, feeType, sessionInfo } = props;
  return (
    <>
      {!isEmpty(sessionInfo) &&
        sessionInfo.map((session) => {
          return (
            <ResultCard
              key={session.session_id}
              name={name}
              address={address}
              feeType={feeType}
              ageCategory={session.min_age_limit}
              dose1={session.available_capacity_dose1}
              dose2={session.available_capacity_dose2}
              vaccine={session.vaccine}
            />
          );
        })}
    </>
  );
}

export default ResultCards;
