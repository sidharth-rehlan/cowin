import React from "react";
import "./style.scss";

const SlotDetail = (props) => {
  const { dose1, availableDose, dose2, vaccineName, ageCategory, date, slots } =
    props.slotInfo;

  return (
    <div>
      <div className="slotDetail">
        <h3>Slot Detail</h3>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Available Doses</span>
          </div>
          <div className="slotDetail-row-data">
            <span>{availableDose}</span>
          </div>
        </div>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Available Dose 1</span>
          </div>
          <div className="slotDetail-row-data">
            <span>{dose1}</span>
          </div>
        </div>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Available Dose 2 </span>
          </div>
          <div className="slotDetail-row-data">
            <span>{dose2}</span>
          </div>
        </div>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Vaccine</span>
          </div>
          <div className="slotDetail-row-data">
            <span>{vaccineName}</span>
          </div>
        </div>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Age Category</span>
          </div>
          <div className="slotDetail-row-data">
            <span>{ageCategory}+</span>
          </div>
        </div>
        <div className="slotDetail-row">
          <div className="slotDetail-row-heading">
            <span>Date</span>
          </div>
          <div className="slotDetail-row-data">
            <span>{date}</span>
          </div>
        </div>
        {slots.length > 0 && (
          <div className="slotDetail-row">
            <div className="slotDetail-row-heading">
              <span>Slotes</span>
            </div>
            <div className="slotDetail-row-data slot-timing">
              {slots.map((slot) => {
                return (
                  <div key={slot}>
                    <span>{slot}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotDetail;
