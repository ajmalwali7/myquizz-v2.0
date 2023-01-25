import React from 'react';

export function Form(props){
    return(
        <div className='flex justify-center mt-[3rem] text-maincolor-900'>
            <form id='myform' className='sm:text-2xl text-xl max-w-[90vw]' onSubmit={props.handleForm}>
                <div className='flex flex-col my-4 max-w-[90vw]'>
                    <label htmlFor="amount" className='font-bold'>Number of Questions:</label>
                    <input className='text-base p-3 bg-slate-300 max-w-[90vw] sm:w-96 rounded-md w-96 mt-1 focus-visible:outline-0' type={'number'} defaultValue='5' min='5' max='20' id='amount' name='amount' step={'1'}></input>
                </div>
                <div className='flex flex-col my-4 max-w-[90vw]'>
                    <label htmlFor="category" className='font-bold'>Select Category:</label>
                    <select className='text-base p-3 bg-slate-300 rounded-md max-w-[90vw] sm:w-96 mt-1 focus-visible:outline-0' id='category' name='category'>
                        <option value='ac'>Any Category</option>
                        <option value='9'>General Knowledge</option>
                        <option value='17'>Science</option>
                        <option value='18'>Computer</option>
                        <option value='19'>Mathematics</option>
                        <option value='10'>Books</option>
                        <option value='22'>Geography</option>
                        <option value='23'>History</option>
                        <option value='24'>Politics</option>
                        <option value='26'>Celebrities</option>
                        <option value='12'>Music</option>
                        <option value='21'>Sports</option>
                        <option value='27'>Animals</option>
                    </select>
                </div>
                <div className='flex flex-col my-4 max-w-[90vw]'>
                    <label htmlFor="difficulty" className='font-bold'>Select Difficulty:</label>
                    <select className='text-base p-3 bg-slate-300 max-w-[90vw] sm:w-96 rounded-md w-96 mt-1 focus-visible:outline-0' id='difficulty' name='difficulty'>
                        <option value='ad'>Any Difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                {/*<button className='btn' onClick={()=>{}}>Start Quiz</button>*/}
                <button className='btn' type={'submit'}>Start Quiz</button>
            </form>
        </div>
    );
}