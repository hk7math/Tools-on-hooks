import React, { useState } from "react";
import "./styles.css";

const Clicker = ({ init, max, min }) => {
  const [num, setNum] = useState(init);

  return (
    <div className="counter-container">
      <div
        style={{ visibility: num >= max && "hidden" }}
        className="chevron chevron-up"
        onClick={() => setNum(num + 1)}
      />
      <div className="number">{num}</div>
      <div
        style={{ visibility: num <= min && "hidden" }}
        className="chevron chevron-down"
        onClick={() => setNum(num - 1)}
      />
    </div>
  );
};

export default Clicker;
