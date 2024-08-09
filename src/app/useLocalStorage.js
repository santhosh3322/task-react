'use client'
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Failed to parse local storage item:', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            if (storedValue.length > 0) {
                localStorage.setItem(key, JSON.stringify(storedValue));
            } else {
                localStorage.removeItem(key);
            }
        } catch (error) {
            console.error('Failed to set local storage item:', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
