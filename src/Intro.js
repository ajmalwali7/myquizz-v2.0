import React from 'react';

export function Intro(props) {
  return (
      <div className="intro" id='i'>
        <h1 className='introHeader text-maincolor-900'>Quizzical</h1>
        <p className='introDescription text-maincolor-900'>This is a website where you can create and attempt different kinds of Quizzes. It is a place where you can have fun, enjoy the quizzes and increase your knowledge while having fun.</p>
        <button className='btn' onClick={()=>props.func('form')}>Start Quiz</button>
      </div>
  );
}

