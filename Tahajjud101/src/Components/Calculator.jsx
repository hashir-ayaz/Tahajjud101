import React, { useState } from "react";

const Calculator = () => {
  const [sunset, setSunset] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [lastThirdStart, setLastThirdStart] = useState("");

  const calculateLastThird = () => {
    const sunsetDate = new Date(`2024-01-01T${sunset}:00`);
    const sunriseDate = new Date(`2024-01-01T${sunrise}:00`);

    // Calculate the difference in milliseconds
    const nightDuration = sunriseDate - sunsetDate;
    const lastThirdDuration = nightDuration / 3;
    const lastThirdStartDate = new Date(
      sunsetDate.getTime() + 2 * lastThirdDuration
    );

    // Format time in HH:MM AM/PM format
    let hours = lastThirdStartDate.getHours();
    const minutes = lastThirdStartDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    setLastThirdStart(formattedTime);
  };

  return (
    <>
      <div className="calculator">
        <div>
          <h1>Calculate the last 3rd of the night</h1>
          <p>
            Enter the time of sunset and sunrise to calculate the last third of
            the night. This is the best time to perform the Tahajjud Prayer
          </p>
        </div>
        <div className="timepickers">
          <div className="sunsettimepicker">
            <label htmlFor="sunset">Sunset</label>
            <input
              type="time"
              id="sunset"
              value={sunset}
              onChange={(e) => setSunset(e.target.value)}
              placeholder="Enter time of sunset"
              name="sunset"
            />
          </div>
          <div className="sunrisetimepicker">
            <label htmlFor="sunrise">Sunrise</label>

            <input
              type="time"
              id="sunrise"
              value={sunrise}
              onChange={(e) => setSunrise(e.target.value)}
              placeholder="Enter time of sunrise"
              name="sunrise"
            />
          </div>
        </div>

        <div className="button-container">
          <button onClick={calculateLastThird}>Calculate</button>
        </div>

        {lastThirdStart && (
          <p>Last third of the night starts at: {lastThirdStart}</p>
        )}
      </div>
    </>
  );
};

export default Calculator;
