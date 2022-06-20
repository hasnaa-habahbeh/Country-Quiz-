import React, { useState, useEffect } from 'react';
import '../styles/Question.css';

const lettersArray = ['A', 'B', 'C', 'D'];

const Question = ({ setEnd, counter, setCounter, countriesArray }) => {
  const [fourCountriesArray, setFourCountriesArray] = useState([]);
  const [question, setQuestion] = useState({question: '', flag: ''});
  const [answer, setAnswer] = useState({});
  const [next, setNext] = useState({showButton: false, nextPage: 'question'});
  const getRandom = (max) => Math.round(Math.random() * max);

  const getCountries = () => {
    setNext({...next, showButton: false});
    setFourCountriesArray([]);
    let temp = [];
    let country = {};
    for (let i = 0; i <= 3; i++) {
      country = countriesArray[getRandom(250)];
      if (!country.capital || !country.flag) country = countriesArray[i];
      country.colorClass = '';
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
          ? {question: `${ans.capital[0]} is the capital of -> ${ans.name.common}`, flag: ''}
          : {question: `which country does this flag belong to -> ${ans.name.common}`, flag: ans.flags[1]}
      );
    }
  }, [fourCountriesArray]);

  const checkAnswer = (country) => {
    for(let i=0; i<4; i++) {
      if (fourCountriesArray[i].name.common === answer.name.common) fourCountriesArray[i].colorClass = 'correct';
    }
    if (country.name.common === answer.name.common) {
      setCounter((counter += 1));
    }
    if (country.name.common !== answer.name.common) {
      country.colorClass = 'incorrect';
      next.nextPage = 'end';
      setNext({next});
    }
    setNext({...next, showButton: true});
  };

  const submittedAnswer = () => {
    if(next.nextPage === 'question') getCountries();
    if(next.nextPage === 'end') setEnd(true);
  }

  return (
    <>
      {question.flag && <img className='question-flag' src={question.flag} alt='country flag' />}
      <p className='question'>{question.question}</p>
      {fourCountriesArray.map((country, idx) => (
        <p
          className={`choice ${country.colorClass}`}
          key={`${country.name.common} - ${counter}`}
          onClick={() => checkAnswer(country)}
        >
          <span className='choice-letter'>{lettersArray[idx]}</span>
          <span className='choice-content'>{country?.name?.common}</span>
        </p>
      ))}
      {next.showButton && <button className='next-button' onClick={() => submittedAnswer()}>Next</button>}
    </>
  );
};

export default Question;
