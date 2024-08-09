'use client'
import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
    const { deleteTodo } = useContext(TodoContext);

    if (!todo) {
        return null;
    }

    return (
        <li key={todo.id} className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => deleteTodo(todo.id)}
                className="mr-2 cursor-pointer"
            />
            <span 
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            >
                {todo.text}
            </span>
        </li>
    );
};

export default TodoItem;
