'use client';
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from '@/app/todoitem';
import Spinner from './components/spinner';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold mb-4">List Of Tasks</h1>
            {todos.length > 0 ? (
                <ul className='font-semibold'>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No Tasks Available...</p>
            )}
        </div>
    );
};

export default TodoList;
