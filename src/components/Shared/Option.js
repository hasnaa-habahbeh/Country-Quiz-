import React from "react";
import "../../styles/Option.css";

const lettersArray = ["A", "B", "C", "D"];

const Option = ({ country, idx, checkAnswer }) => (
  <p
    className={`choice ${country.colorClass}`}
    onClick={() => checkAnswer(country)}
  >
    <span className="choice-letter">{lettersArray[idx]}</span>
    <span className="choice-content">{country?.name?.common}</span>
  </p>
);

export default Option;
