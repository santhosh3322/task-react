'use client'
import React, { useContext } from 'react';
import { TodoContext } from '@/app/TodoContext';

const State = () => {
    const { count, incrementTodos } = useContext(TodoContext);

    

    return (
        <div>
            <h1 className='text-xl'>use State</h1>
            <button
                className='border p-1 active:bg-red-400 rounded-lg'
                onClick={incrementTodos}>
                Click me
            </button>
            <p>No. of times {count}</p>
        </div>
    );
}

export default State;
