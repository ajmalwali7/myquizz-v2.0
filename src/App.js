import React, {useEffect, useState} from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom';

import { Intro } from './Intro';
import { Quiz } from './Quiz';
import { Layout } from './Layout'
import { Form } from './Form';
import { About } from './About'
import { Missing } from './Missing';

export function App() {
    const rand = () => {return(Math.floor(Math.random()*4))};
    const navigat = useNavigate();

    const [questionsArray, setQuesArray] = useState([]);
    const [{butn,msg}, setButn] = useState({butn:'Check Answers',msg:''});
    const [count, setCount] = useState(0);
    const [apiUrl, setApiUrl] = useState('https://opentdb.com/api.php?amount=5&type=multiple')
    const [randArr, setRandArr] = useState([]);
    useEffect(()=>{
        setRandArr(a=>{
            let arr=[];
            for(let i=0; i<questionsArray.length; i++){
                arr.push(rand());
            }
            return arr;
        });
    },[questionsArray])

    useEffect(() => {
        fetch(apiUrl)
        .then(response => response.json())
        .then(json => (setQuesArray(json.results)))
    }, [count,apiUrl]);

    const handleForm = (e) => {
        e.preventDefault();
        const amountSel = e.target[0].value;
        const catSel = e.target[1].selectedOptions[0].value;
        const difSel = e.target[2].selectedOptions[0].value;
        const catUrl = (catSel==='ac')? '' : `&category=${catSel}`;
        const difUrl = (difSel==='ad') ? '' : `&difficulty=${difSel}`;
        const apiU = `https://opentdb.com/api.php?amount=${amountSel}${catUrl}${difUrl}&type=multiple`;
        setApiUrl(apiU);
        setQuesArray([]);
        setCount(p=>(p+1));
        setButn({butn:'Check Answers', msg:''});
        navigat('../quiz');
    }

    const checkAnswers = (arr, randArr) => {
        if(butn==='Check Answers'){
            let ansArr=[];
            let corAns = 0;
            for (let i=0; i<randArr.length; i++){
                for(let j=0; j<4; j++){
                    if(arr.children[i].children[1].children[j].classList.contains('selected'))
                        ansArr.push((arr.children[i].children[1].children[j].id[1])-0);
                }
                if(!(ansArr.length===i+1))
                    ansArr.push(-1);
            }
            for(let i=0; i<randArr.length; i++){
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
            setButn({butn:'Restart Quiz', msg:`You Scored ${corAns}/${randArr.length} Correct Answers!`});
        }
        else{
            setQuesArray([]);
            setCount(c => (c+1));
            setButn({butn:'Check Answers', msg:''});
        }
    }

  return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Intro func={navigat} />} />
                <Route path='form' element={<Form handleForm={handleForm}/>} />
                <Route path='about' element={<About />} />
                <Route path='quiz' element={<Quiz qs={questionsArray} randArr={randArr} butns={butn} msgs={msg} func={checkAnswers} nav={navigat}/>} />
                <Route path='*' element={<Missing />} />

            </Route>
        </Routes>
    );
}
