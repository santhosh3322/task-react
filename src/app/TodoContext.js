'use client'
import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useTodos from '@/app/usetodos';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [effect, setEffect] = useState(0);
    const [count, setCount] = useState(0)
    const [storedTodos, setStoredTodos] = useLocalStorage('todos', []);
    const { todos, addTodo, deleteTodo } = useTodos(storedTodos);
    // console.log(useTodos,'eouferwh');
    

    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    const incrementTodos = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setEffect(3);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const value = {
        todos,
        storedTodos,
        setStoredTodos,
        incrementTodos,
        effect,
        setEffect,
        count,
        setCount,
        addTodo,
        deleteTodo
    }

    return (
        <TodoContext.Provider value={value}            >
            {children}
        </TodoContext.Provider>
    );
};
