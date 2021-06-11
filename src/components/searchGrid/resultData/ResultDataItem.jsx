import React from "react";
import SessionsItems from "./SessionsItems";
import Center from "../resultData/center/Center";
import { isEmpty } from "lodash";

function ResultDataItem(props) {
  const { sessions } = props.centerData;

  const clubSessionWithDate = (sessions) => {
    let sessionObj = {};
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
      <Center
        name={props.centerData.name}
        address={props.centerData.address}
        vaccineFee={props.centerData.vaccine_fees}
        feeType={props.centerData.fee_type}
      />
      <div>
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
  );
}

export default ResultDataItem;
