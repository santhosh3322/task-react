import { useReducer, useCallback } from 'react';

function todosReducer(state, action) {
    // console.log ('Reducer called with action:', action);
    switch (action.type) {
        case 'addtodo':
            return [...state, action.payload];
        case 'delete':
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, completed: true } : todo
            );
        case 'removelist':
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useTodos(initialTodos) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);

    const addTodo = useCallback((text) => {
        console.log ('Adding todo:', text);
        const newTodo = { id: Date.now(), text, completed: false };
        dispatch({ type: 'addtodo', payload: newTodo });
    }, []);

    const deleteTodo = useCallback((id) => {
        dispatch({ type: 'delete', payload: { id } });

        setTimeout(() => {
            dispatch({ type: 'removelist', payload: { id } });
        }, 1000);
    }, []);

    // console.log ('current task', todos);

    return { todos, addTodo, deleteTodo };
}

export default useTodos;
