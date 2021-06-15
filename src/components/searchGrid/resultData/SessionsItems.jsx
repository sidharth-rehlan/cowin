import React from "react";
import SlotUI from "./slot/SlotUI";
import "./style.scss";
import { isEmpty } from "lodash";

function SessionsItems(props) {
  const sessionsPerDay = props.session;
  return (
    <li className="sessionItems">
      {sessionsPerDay.length > 0 &&
        sessionsPerDay.map((session) => {
          return (
            <SlotUI
              key={session.session_id}
              dose1={session.available_capacity_dose1}
              availableDose={session.available_capacity}
              dose2={session.available_capacity_dose2}
              vaccineName={session.vaccine}
              ageCategory={session.min_age_limit}
              date={session.date}
              slots={session.slots}
            />
          );
        })}
      {isEmpty(sessionsPerDay) && (
        <div className="slotUI-empty">
          <span>NA</span>
        </div>
      )}
    </li>
  );
}

export default SessionsItems;
