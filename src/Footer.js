import React from 'react';


export function Footer(){
    return(
        <footer className='bg-maincolor-700 h-16 flex justify-around items-center fixed bottom-0 min-w-full'>
                <h3 className='text-maincolor-300 text-2xl ml-1'>Quizzical</h3>
                <h3 className='text-maincolor-300 text-l ml-1 pt-2 font-thin'>Copyright© 2023, <span className='underline underline-offset-4 hover:text-slate-300'><a target={'_blank'} rel='noopener noreferrer' href='https://twitter.com/ajmalwali7'>Ajmal Wali</a></span></h3>
        </footer>
    );
}