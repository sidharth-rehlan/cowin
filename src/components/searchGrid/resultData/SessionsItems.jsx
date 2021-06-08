import React from "react";
import "./style.scss";

function SessionsItems(props) {
  const {
    available_capacity,
    available_capacity_dose1,
    available_capacity_dose2,
    min_age_limit,
    vaccine,
    date,
  } = props.session;
  return (
    <li className="sessionItems">
      <span className="sessionItems-d1">D1:{available_capacity_dose1}</span>
      <span className="sessionItems-dose">{available_capacity}</span>
      <span className="sessionItems-d2">D2:{available_capacity_dose2}</span>
      <span className="sessionItems-ageLimit">{min_age_limit}+</span>
      <span className="sessionItems-date">{date}</span>
      <span className="sessionItems-vaccine">{vaccine}</span>
    </li>
  );
}

export default SessionsItems;
