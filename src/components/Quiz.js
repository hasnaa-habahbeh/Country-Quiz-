import React, { useState, useEffect } from "react";
import Card from "./Shared/Card";
import Question from "./Question";
import End from "./End";

const Quiz = ({ countriesArray, setShowImage }) => {
  const [end, setEnd] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setShowImage(end ? "hide-image" : "show-image");
  }, [end]);

  return (
    <Card>
      {!end && (
        <Question
          counter={counter}
          setCounter={setCounter}
          setEnd={setEnd}
          countriesArray={countriesArray}
        />
      )}
      {end && <End counter={counter} setCounter={setCounter} setEnd={setEnd} />}
    </Card>
  );
};

export default Quiz;
