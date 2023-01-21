import React, {useEffect, useState} from 'react';

import { Intro } from './Intro';
import { Quiz } from './Quiz';

export function App() {
    const [questionsArray, setQuesArray] = useState([]);
    const [{butn,msg}, setButn] = useState({butn:'Check Answers',msg:''});
    const [count, setCount] = useState(0);
    const rand = () => {return(Math.floor(Math.random()*4))};
    const [random, setRandom] = useState([rand(), rand(),rand(), rand(), rand()])
    useEffect(() => {
        // https://opentdb.com/api_config.php
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
        .then(response => response.json())
        .then(json => (setQuesArray(json.results)))
    }, [count]);
    const toggleDisplay = () => {
        document.getElementById('q').style.display='block';
        document.getElementById('i').style.display='none';
    }
    const checkAnswers = (arr, randArr) => {
        if(butn==='Check Answers'){
            let ansArr=[];
            let corAns = 0;
            for (let i=0; i<5; i++){
                for(let j=0; j<4; j++){
                    if(arr.children[i].children[1].children[j].classList.contains('selected'))
                        ansArr.push((arr.children[i].children[1].children[j].id[1])-0);
                }
                if(!(ansArr.length===i+1))
                    ansArr.push(-1);
            }
            for(let i=0; i<5; i++){
                if(ansArr[i]===randArr[i]){
                    document.getElementById(`${i}${randArr[i]}`).classList.remove('selected')
                    document.getElementById(`${i}${randArr[i]}`).classList.add('correct')
                    corAns = corAns + 1;
                }
                else if(ansArr[i]===-1){
                    document.getElementById(`${i}${randArr[i]}`).classList.add('emptyCorrect')
                }
                else{
                    
                    document.getElementById(`${i}${ansArr[i]}`).classList.remove('selected')
                    document.getElementById(`${i}${ansArr[i]}`).classList.add('wrong')
                    document.getElementById(`${i}${randArr[i]}`).classList.add('emptyCorrect')
                }
            }
            setButn({butn:'Restart Quiz', msg:`You Scored ${corAns}/5 Correct Answers!`});
            
        }
        else{
            setQuesArray([]);
            setCount(c => (c+1));
            setButn({butn:'Check Answers', msg:''});
            setRandom([rand(), rand(),rand(), rand(), rand()]);
        }
    }
  return (
        <div>
            <Intro func={toggleDisplay} />
            <Quiz qs={questionsArray} randArr={random} butns={butn} msgs={msg} func={checkAnswers}/>
        </div>
    );
}
