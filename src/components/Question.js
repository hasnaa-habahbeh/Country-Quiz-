import React, { useState, useEffect } from 'react';
import '../styles/Question.css';

const lettersArray = ['A', 'B', 'C', 'D'];

const Question = ({ setEnd, counter, setCounter, countriesArray }) => {
  const [fourCountriesArray, setFourCountriesArray] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState({});
  const [next, setNext] = useState(false);
  const [choiceClass, setChoiceClass] = useState(['', '', '', '']);
  const getRandom = (max) => Math.round(Math.random() * max);

  const getCountries = () => {
    let temp = [];
    let country = {};
    for (let i = 0; i <= 3; i++) {
      country = countriesArray[getRandom(250)];
      if (!country.capital || !country.flag) country = countriesArray[i];
      country.isAnswer = false;
      country.isChosen = false;
      temp.push(country);
    }
    setFourCountriesArray([...temp]);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (fourCountriesArray.length) {
      const ans = fourCountriesArray[getRandom(3)];
      setAnswer(ans);
      setQuestion(
        getRandom(1)
          ? `${ans.capital[0]} is the capital of?`
          : `which country does this flag belong to?`
      );
    }
  }, [fourCountriesArray]);

  const checkAnswer = (country) => {
    if (country.name.common === answer.name.common) {
      setCounter((counter += 1));
      //   getCountries();
    }
    if (country.name.common !== answer.name.common) {
      //   setEnd(true);
    }
    setNext(true);
  };

  return (
    <>
      <p class='question'>{question}</p>
      {fourCountriesArray.map((country, idx) => (
        <p
          className={`choice ${choiceClass[idx]}`}
          key={`${country.name.common} - ${counter}`}
          onClick={() => checkAnswer(country, idx)}
        >
          <span class='choice-letter'>{lettersArray[idx]}</span>
          <span class='choice-content'>{country?.name?.common}</span>
        </p>
      ))}
      {next && <button class='next-button'>Next</button>}
    </>
  );
};

export default Question;
