import React from 'react';
import { Loading } from './Loading';

export function Quiz(props) {
    if(props.qs.length===0){return(<Loading />)}
    const randArr = props.randArr;
    const clicked = (id) => {
        let parentEl = '';
        if (id>99){
            parentEl = document.getElementById(`ans${id[0]}${id[1]}`);
        }else{
            parentEl = document.getElementById(`ans${id[0]}`);
        }
        
        const clickedEl = document.getElementById(id)
        for (let i=0; i<4; i++){
            if(parentEl.children[i].classList.contains('wrong') || parentEl.children[i].classList.contains('correct') || parentEl.children[i].classList.contains('emptyCorrect')){
                return;
            }
            else if(parentEl.children[i].classList.contains('selected')){
                if(parentEl.children[i]===clickedEl){
                    clickedEl.classList.remove('selected')
                    return
                }
                parentEl.children[i].classList.remove('selected')
            }
        }
        clickedEl.classList.add('selected')
    }
    const parser = new DOMParser();
    return (
        <div className="Quiz" id='q'>
            <div id='quizes'>
                {props.qs.map(q => { 
                    const opsArr = [...q.incorrect_answers]
                    opsArr.splice(randArr[props.qs.indexOf(q)],0,q.correct_answer)
                    return(<div className='q' key={props.qs.indexOf(q)}>
                        <div className='question font-bold text-xl'>
                            <h3>{parser.parseFromString(q.question,'text/html').children[0].children[1].innerHTML.replace(/&amp;/g,'&')}</h3>
                        </div>
                        <div className='answers' id={`ans${props.qs.indexOf(q)}`}>
                            {opsArr.map(a => {
                                return(<p className='option' id={`${props.qs.indexOf(q)}${opsArr.indexOf(a)}`} key={opsArr.indexOf(a)} onClick={()=>{clicked(`${props.qs.indexOf(q)}${opsArr.indexOf(a)}`)}}>{parser.parseFromString(a,'text/html').children[0].children[1].innerHTML.replace(/&amp;/g,'&')}</p>)
                            })
                            }
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='btnContainer'>
                {(props.msgs.length>0) && <h3 className='msg font-bold text-xl'>{props.msgs}</h3>}
                <button className='btn butt-1' onClick={() => props.func(document.getElementById('quizes').children, randArr)}>{props.butns}</button>
                {(props.msgs.length>0) && <button className='btn butt-1' onClick={() => props.nav('form')}>Change Quiz</button>}
            </div>
        </div>
    );
}
