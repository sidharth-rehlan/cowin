import React from "react";
import { useSelector } from "react-redux";
import SessionsItems from "./SessionsItems";
import Center from "../resultData/center";
import ResultCards from "./resultCards";
import { isEmpty } from "lodash";
import moment from "moment";

function ResultDataItem(props) {
  const { sessions } = props.centerData;
  const searchDate = useSelector((state) => state.search.searchDate);
  let sessionObj = {};

  for (let i = 0; i < 7; i++) {
    const date = moment(searchDate, "DD-MM-YYYY")
      .add(i, "days")
      .format("DD-MM-YYYY");

    sessionObj[date] = {};
  }

  const clubSessionWithDate = (sessions) => {
    if (sessions.length > 0) {
      sessions.forEach((session) => {
        sessionObj[session.date] = isEmpty(sessionObj[session.date])
          ? [session]
          : [...sessionObj[session.date], session];
      });
    }
    return sessionObj;
  };

  const formattedSession = clubSessionWithDate(sessions);

  return (
    <div className="resultRow">
      <div className="resultRow-desktop">
        <Center
          name={props.centerData.name}
          address={props.centerData.address}
          vaccineFee={props.centerData.vaccine_fees}
          feeType={props.centerData.fee_type}
        />
        <div className="sessionList-wrapper">
          <ul className="sessionList">
            {Object.keys(formattedSession).map((dates) => {
              const uniqueKey = props.centerData.center_id + dates;
              return (
                <SessionsItems
                  key={uniqueKey}
                  session={formattedSession[dates]}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="resultRow-mobile">
        <ResultCards
          name={props.centerData.name}
          address={props.centerData.address}
          vaccineFee={props.centerData.vaccine_fees}
          feeType={props.centerData.fee_type}
          sessionInfo={formattedSession[searchDate]}
        ></ResultCards>
      </div>
    </div>
  );
}

export default ResultDataItem;
