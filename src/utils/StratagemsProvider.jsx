import React, { useState } from 'react';
import StratagemsContext from './StratagemsContext';
import STRATAGEMS  from "./Stratagems";

const StratagemsProvider = ({ children }) => {
    const [stratagems, setStratagems] = useState({...STRATAGEMS});

    const updateStratagems = (key) => {
        setStratagems(prevStratagems => ({
            ...prevStratagems,
            [key]: {
                ...prevStratagems[key],
                active: !prevStratagems[key]["active"],
            },
        }));
    };

    const toggleWarbond = (warbondId) => {
        setStratagems(prevStratagems => {
            const updated = { ...prevStratagems };
            const warbondKeys = Object.keys(updated).filter(key => updated[key].warbond === warbondId);
            const anyActive = warbondKeys.some(key => updated[key].active);
            const newState = !anyActive;
            for (const key of warbondKeys) {
                updated[key] = { ...updated[key], active: newState };
            }
            return updated;
        });
    };

    const resetStratagems = () => {
        setStratagems({...STRATAGEMS});
    };

    return (
        <StratagemsContext.Provider value={{ stratagems, updateStratagems, toggleWarbond, resetStratagems }}>
            {children}
        </StratagemsContext.Provider>
    );
};

export default StratagemsProvider;
