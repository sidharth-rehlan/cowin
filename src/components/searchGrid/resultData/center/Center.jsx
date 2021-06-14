import React from "react";
import { isEmpty } from "lodash";
import "./style.scss";

const VaccineFee = (props) => {
  const { vaccine, fee } = props;
  return (
    <span>
      {vaccine} {fee}
    </span>
  );
};

function Center(props) {
  const { name, feeType, address, vaccineFee } = props;
  return (
    <div className="centerInfo">
      <div className="centerInfo-heading">
        <h5>{name}</h5>
        {feeType === "Paid" && <span>{feeType}</span>}
      </div>
      <p className="centerInfo-address">{address}</p>
      {!isEmpty(vaccineFee) && (
        <div className="centerInfo-footer">
          {vaccineFee.map((vaccine) => {
            return (
              <VaccineFee
                key={vaccine.vaccine}
                vaccine={vaccine.vaccine}
                fee={vaccine.fee}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Center;
