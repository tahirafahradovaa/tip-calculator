import React, { useState } from "react";
import "./TipCalculator.css";
function TipCalculator() {
  const [result, setResult] = useState({ bill: 50, tip: 18, people: 1 });
  const handleChange = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setResult({
      ...result,
      [nameInput]: value,
    });
  };
  const AddTotal = () => {
    const total = (result.bill * result.tip) / 100 / result.people;

    if (total === Infinity) {
      return (
        <>
          <p>Total Tip: -</p>
          <p>Tip Per Person: -</p>
        </>
      );
    } else {
      return (
        <>
          <p>Total Tip:{result.bill}$</p>
          <p>Tip Per Person: {total}$</p>
        </>
      );
    }
  };

  return (
    <>
      <div>
        <label>Bill</label>
        <input
          min={0}
          onChange={handleChange}
          value={result.bill}
          name="bill"
          type={"number"}
        />
        <label>Tip Percentage</label>
        <input
          min={0}
          onChange={handleChange}
          value={result.tip}
          name="tip"
          type={"number"}
        />
        <label>Number Of People</label>
        <input
          min={0}
          onChange={handleChange}
          value={result.people}
          name="people"
          type={"number"}
        />
        <AddTotal></AddTotal>
      </div>
    </>
  );
}

export default TipCalculator;
