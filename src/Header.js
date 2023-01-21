import React from 'react';
import { Link } from 'react-router-dom';


export function Header(){
    const toggleMenu = () => {
        document.getElementById('mobMenu').classList.toggle('hidden');
        document.getElementById('mobMenu').classList.toggle('flex');
    }
    return(   
        <header className='bg-maincolor-700 h-16 flex justify-around items-center'>
            <Link to={'/'}>
                <div className='flex text-maincolor-300 font-bold'>
                    <img className='rounded-lg max-h-8 max-w-8' alt='logo' src='./Capture.PNG' />
                    <h3 className='text-2xl ml-1'>uizzical</h3>
                </div>
            </Link>

            <nav className='hidden sm:flex'>
                <ul className='flex list-none text-maincolor-300 font-bold gap-x-7 pt-4'>
                    <Link to={'/'}>
                        <li className='hover:text-slate-300 hover:cursor-pointer'>Home</li>
                    </Link>
                    <Link to={'/formquest'}>
                        <li className='hover:text-slate-300 hover:cursor-pointer'>Start Quiz</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className='hover:text-slate-300 hover:cursor-pointer'>About</li>
                    </Link>
                </ul>
            </nav>
            <button id="hamburger-button" onClick={toggleMenu} className="mt-1 relative h-8 w-8 cursor-pointer text-3xl sm:hidden">
                <div
                    className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
                </div>
            </button>
            <nav id='mobMenu' onClick={toggleMenu} className='hidden flex-col w-full absolute top-16 bg-maincolor-900 opacity-90 text-maincolor-300'>
                <ul className='flex flex-col w-full text-center text-2xl font-bold gap-x-7 py-7 px-28'>
                    <Link to={'/'}>
                        <li className='hover:text-slate-300 w-auto hover:cursor-pointer mt-3'>Home</li>
                    </Link>
                    <Link to={'/formquest'}>
                        <li className='hover:text-slate-300 w-auto hover:cursor-pointer mt-3'>Start Quiz</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className='hover:text-slate-300 w-auto hover:cursor-pointer mt-3'>About</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}