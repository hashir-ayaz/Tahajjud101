import React from "react";
import tahajjudBenefits from "./tahajjudbenefits.jsx";
import BenefitItem from "./BenefitItem.jsx";

const Benefits = () => {
  return (
    <>
      <div className="benefits">
        <div className="banner">
          <img src="../../public/lantern.jpg" alt="Banner"></img>
        </div>

        <div className="benefitssection">
          <h1> Benefits Of Tahajjud</h1>
          <ul className="benefitslist">
            {tahajjudBenefits.map((benefit, index) => (
              <BenefitItem key={index} benefit={benefit} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Benefits;
