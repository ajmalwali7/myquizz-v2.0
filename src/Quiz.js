import React from 'react';

export function Quiz(props) {
    const qus = props.qs
    if(qus.length>0){
        try{
            document.getElementById('butt-1').style.display='block';
        }
        catch{}
    }else{
        try{
            document.getElementById('butt-1').style.display='none';
        }
        catch{}
    }
    const randArr = props.randArr;
    const clicked = (id) => {
        const parentEl = document.getElementById(`ans${id[0]}`)
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
            {qus.map(q => { 
                const opsArr = [...q.incorrect_answers]
                opsArr.splice(randArr[qus.indexOf(q)],0,q.correct_answer)
                return(<div className='q' key={qus.indexOf(q)}>
                    <div className='question'>
                        <h3>{parser.parseFromString(q.question,'text/html').children[0].children[1].innerHTML}</h3>
                    </div>
                    <div className='answers' id={`ans${qus.indexOf(q)}`}>
                        {opsArr.map(a => {
                            return(<p className='option' id={`${qus.indexOf(q)}${opsArr.indexOf(a)}`} key={opsArr.indexOf(a)} onClick={()=>{clicked(`${qus.indexOf(q)}${opsArr.indexOf(a)}`)}}>{parser.parseFromString(a,'text/html').children[0].children[1].innerHTML}</p>)
                        })
                        }
                    </div>
                </div>
                )
            })}
        </div>
        <div className='btnContainer'>
            <h3 className='msg'>{props.msgs}</h3>
            
            <button id='butt-1' className='btn' onClick={() => props.func(document.getElementById('quizes'), randArr)}>{props.butns}</button>
        </div>
    </div>
  );
}
