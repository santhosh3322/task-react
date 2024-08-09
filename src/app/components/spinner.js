import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-8 h-8 rounded-full animate-spin duration-500 bg-gradient-to-r from-blue-300 to-purple-500"></div>
        </div>
    );
};

export default Spinner;
