import React from "react";
import "./style.scss";

function SlotUI(props) {
  const { dose1, availableDose, dose2, vaccineName, ageCategory } = props;
  return (
    <div className="slotUI">
      {availableDose > 0 && (
        <div className="slotUI-availableDoses">
          <div className="slotUI-dose1">
            <span>D1</span>
            <span>{dose1}</span>
          </div>
          <div className="slotUI-total-available-dose">
            <span>{availableDose}</span>
          </div>
          <div className="slotUI-dose2">
            <span>D2</span>
            <span>{dose2}</span>
          </div>
        </div>
      )}
      {availableDose === 0 && (
        <div className="slotUI-notAvailable">
          <span>Booked</span>
        </div>
      )}
      <div className="slotUI-vaccineName">
        <span>{vaccineName}</span>
      </div>
      <div className="slotUI-ageCategory">
        <span>Age {ageCategory}+</span>
      </div>
    </div>
  );
}

export default SlotUI;
