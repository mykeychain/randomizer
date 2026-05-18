import React, { useState } from 'react';
import SpinningContext from './SpinningContext';

const SpinningProvider = ({ children }) => {
    const [isSpinning, setIsSpinning] = useState(false);

    return (
        <SpinningContext.Provider value={{ isSpinning, setIsSpinning }}>
            {children}
        </SpinningContext.Provider>
    );
};

export default SpinningProvider;
