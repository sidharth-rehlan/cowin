import React from "react";
import { MdClose } from "react-icons/md";
import "./style.scss";

const getDoseText = (dose) => {
  let doseText = "";
  if (dose === 0) {
    doseText = <MdClose color="#cd275f" size="25" />;
  } else {
    doseText = <span className="--green">{dose} slots</span>;
  }
  return doseText;
};

function ResultCard(props) {
  const { name, address, ageCategory, dose1, dose2, feeType, vaccine } = props;

  const doseText1 = getDoseText(dose1);
  const doseText2 = getDoseText(dose2);

  return (
    <div className="resultCard">
      <div className="resultCard-center-vaccine">
        <div className="resultCard-centerInfo">
          <h5 className="resultCard-center">{name}</h5>
          <p className="resultCard-address">{address}</p>
        </div>
        <div className="resultCard-vaccineInfo">
          <h3>{vaccine}</h3>
          <div className="resultCard-vaccineInfo-feeType">
            <span>{feeType}</span>
          </div>
        </div>
      </div>
      <div className="resultCard-doseInfo">
        <div className="resultCard-age">
          <span>Age {ageCategory}+</span>
        </div>
        <div className="resultCard-dose1">
          <span>Dose 1 {doseText1}</span>
        </div>

        <div className="resultCard-dose2">
          <span>Dose 2 {doseText2}</span>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
