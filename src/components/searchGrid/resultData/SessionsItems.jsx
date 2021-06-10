import React from "react";
import SlotUI from "./slot/SlotUI";
import "./style.scss";

function SessionsItems(props) {
  const {
    available_capacity,
    available_capacity_dose1,
    available_capacity_dose2,
    min_age_limit,
    vaccine,
  } = props.session;
  return (
    <li className="sessionItems">
      <SlotUI
        dose1={available_capacity_dose1}
        availableDose={available_capacity}
        dose2={available_capacity_dose2}
        vaccineName={vaccine}
        ageCategory={min_age_limit}
      />
    </li>
  );
}

export default SessionsItems;
