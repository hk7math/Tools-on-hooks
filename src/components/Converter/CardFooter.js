import React from "react";
import "./styles.css";

const CardFooter = ({ num }) => {
  return (
    <div
      className="card-footer"
      style={{
        backgroundColor: num < 15 ? "#ee362d" : num < 40 ? "#1b82f1" : "#13d569"
      }}
    >
      {num < 15 ? "SLOW" : num < 40 ? "GOOD" : "FAST"}
    </div>
  );
};

export default CardFooter;
