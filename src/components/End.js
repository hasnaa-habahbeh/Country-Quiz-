import React from 'react';
import endingSVG from '../resources/undraw_winners_ao2o 2.svg';
import '../styles/End.css';

const Results = ({ counter = 0, setEnd }) => {
  return <>
    <img className='results-image' src={endingSVG} alt='ending svg' />
    <h2 className='results-heading'>Results</h2>
    <p className='results-text'>You got <span className='results-counter'>{counter}</span> correct answers</p>
    <button className='results-button' onClick={() => setEnd(false)}>Try again</button>
    </>;
};

export default Results;
align-items: flex-end;