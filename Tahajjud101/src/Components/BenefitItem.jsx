// BenefitItem.jsx
import React from "react";

const BenefitItem = ({ benefit }) => {
  return (
    <li className="benefit-item">
      <img src={benefit.Image} alt={benefit.Name} />
      <strong>{benefit.Name}</strong>
      <p>{benefit.Description}</p>
    </li>
  );
};

export default BenefitItem;
