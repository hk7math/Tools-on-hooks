import React from "react";
import Clicker from "./Clicker";
import "./styles.css";

const Counter = () => {
  return (
    <div
      className="counter-body"
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {[...Array(5).keys()].map((x, i) => (
        <Clicker key={i} init={i + 1} max={5 * (i + 1)} min={0.5 * (i + 1)} />
      ))}
    </div>
  );
};

export default Counter;
