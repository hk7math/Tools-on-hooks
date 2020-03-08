import React, { useState } from "react";
import CardFooter from "./CardFooter";
import UnitControl from "./UnitControl";
import "./styles.css";

const Converter = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="converter-body">
      <div className="converter-container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl />
          <div class="converter">
            <div className="flex-1">
              <div className="converter-title">Set</div>
              <input
                value={num}
                onChange={e => setNum(e.target.value)}
                type="number"
                className="input-number"
                min="0"
              />
            </div>

            <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
              <i className="fas fa-angle-right" />
            </span>

            <div className="text-right flex-1">
              <div className="converter-title">Show</div>
              <input
                type="text"
                className="input-number text-right"
                value={num / 8}
                disabled
              />
            </div>
          </div>
        </div>
        <CardFooter num={num} />
      </div>
    </div>
  );
};

export default Converter;
