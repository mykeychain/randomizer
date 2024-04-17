import React, { useState } from 'react';
import StratagemsContext from './StratagemsContext';
import STRATAGEMS  from "./Stratagems";

const StratagemsProvider = ({ children }) => {
    const [stratagems, setStratagems] = useState({...STRATAGEMS});

    const updateStratagems = (id) => {
        setStratagems(prevStratagems => ({
            ...prevStratagems,
            [id]: {
                ...prevStratagems[id],
                active: !prevStratagems[id]["active"],
            },
        }));
    };

    const resetStratagems = () => {
        setStratagems({...STRATAGEMS});
    };

    return (
        <StratagemsContext.Provider value={{ stratagems, updateStratagems, resetStratagems }}>
            {children}
        </StratagemsContext.Provider>
    );
};

export default StratagemsProvider;
