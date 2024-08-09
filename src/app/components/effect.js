"use client"
import React,{useContext} from 'react';
import { TodoContext } from '@/app/TodoContext';

const Effect = () => {
    const { effect, setEffect } = useContext(TodoContext);



    return (
        <div>
            <h1 className='text-xl'>
                use effect
            </h1>
            <button
                className='border p-1 active:bg-slate-400 rounded-lg'
                onClick={() => { setEffect(effect + 1) }}>
                Click me
            </button>
            <p>No. of times {effect}</p>
        </div>
    );
}

export default Effect;
