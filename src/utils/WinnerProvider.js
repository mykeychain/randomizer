import React, { useReducer } from 'react';
import WinnerContext from './WinnerContext';

const initialState = {};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE":
            return { ...state, ...action.payload };
        case "RESET": 
            return {};
        default: 
            return state;
    }
}

const WinnerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <WinnerContext.Provider value={{ state, dispatch }}>
            {children}
        </WinnerContext.Provider>
    );
};

export default WinnerProvider;
