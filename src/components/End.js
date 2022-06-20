import React from 'react';
import endingSVG from '../resources/undraw_winners_ao2o 2.svg';
import '../styles/End.css';

const Results = ({ counter = 0, setEnd }) =>
<div className='end'>
    <img className='end-image' src={endingSVG} alt='ending svg' />
    <span className='end-text'>
      <h2 className='end-heading'>Results</h2>
      You got <span className='results-counter'>{counter}</span> correct answers
    </span>
    <button className='try-again-button' onClick={() => setEnd(false)}>Try again</button>
    </div>;

export default Results;
