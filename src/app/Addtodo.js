'use client'
import React, { useState, useContext, useRef, useEffect } from 'react';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
            <input
                className='border shadow:inner p-1 rounded-xl text-center shadow-inner'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new list"
                ref={inputRef}
            />
            <button
                className='relative bg-gradient-to-r from-gray-500 via-gray-300 to-gray-400 font-semibold border border-transparent p-1 px-3 rounded-xl text-gray-800 active:opacity-40 shadow-md gradient-border'
                type="submit"
            >
                Add list
            </button>

        </form>
    );
};

export default AddTodo;
