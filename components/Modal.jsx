import React from 'react';

const Modal = ({ message, onClose, className }) => {
    return (
        <div className={`${className} fixed inset-0 flex items-center justify-center z-50`}>
            <div className="bg-white p-6 rounded-lg shadow-md w-full flex justify-center flex-col items-center">
                <p className="text-lg text-text font-extralight">{message}</p>
                <button onClick={onClose} className="mt-4 bg-primary transition-all duration-150 text-white py-2 px-4 rounded hover:opacity-70 focus:outline-none">
                    Okay
                </button>
            </div>
        </div>
    );
};

export default Modal;
