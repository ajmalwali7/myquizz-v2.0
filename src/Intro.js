import React from 'react';

export function Intro(props) {
  return (
    <div className="intro" id='i'>
      <h1 className='introHeader'>Quizzical</h1>
      <p className='introDescription'>This is a website where your general knowledge will be tested!!!</p>
      <button className='btn' onClick={props.func}>Start Quiz</button>
    </div>
  );
}

