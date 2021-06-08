import React from "react";
import SessionsItems from "./SessionsItems";
import Center from "../resultData/center/Center";

function ResultDataItem(props) {
  console.log("centerDAte...", props);
  const { sessions } = props.centerData;
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
          {sessions.map((session) => {
            return <SessionsItems key={session.session_id} session={session} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ResultDataItem;
