import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { MdClose } from "react-icons/md";
import SlotDetail from "components/searchGrid/resultData/slotDetail/SlotDetail";

import "./style.scss";

function SlotUI(props) {
  const { dose1, availableDose, dose2, vaccineName, ageCategory } = props;
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="slotUI">
      {availableDose > 0 && (
        <div
          className="slotUI-availableDoses hand-pointer"
          onClick={handleOpenModal}
        >
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
      <ReactModal
        isOpen={showModal}
        contentLabel="Slot Detail"
        onRequestClose={handleCloseModal}
        className="cowinModal"
        overlayClassName="cowinModalOverlay"
      >
        <span
          role="button"
          className="cowinModal-closeButton"
          onClick={handleCloseModal}
        >
          <MdClose color="red" size="2em" />
        </span>
        <SlotDetail
          slotInfo={{
            dose1,
            availableDose,
            dose2,
            vaccineName,
            ageCategory,
            date: props.date,
            slots: props.slots,
          }}
        ></SlotDetail>
      </ReactModal>
    </div>
  );
}

export default SlotUI;
