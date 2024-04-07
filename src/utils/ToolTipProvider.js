import React, { useState } from 'react';
import ToolTipContext from './ToolTipContext';

const ToolTipProvider = ({ children }) => {
    const [toolTipVisible, setToolTipVisible] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function showToolTip(content, position) {
        setTooltipContent(content);
        setPosition(position);
        setToolTipVisible(true);
    };

    const hideToolTip = () => {
        setToolTipVisible(false);
    };

    return (
        <ToolTipContext.Provider value={{ showToolTip, hideToolTip, setPosition, toolTipVisible, tooltipContent, position }}>
            {children}
        </ToolTipContext.Provider>
    );
};

export default ToolTipProvider;
