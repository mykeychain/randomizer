import React, { useState } from "react";
import StratagemsProvider from "../utils/StratagemsProvider";
import SpinningProvider from "../utils/SpinningProvider";
import ToolTipProvider from "../utils/ToolTipProvider";
import Settings from "./Settings.js";
import Game from "./Game.js";
import SettingsButton from "../components/SettingsButton.js";
import ToolTip from "../components/ToolTip.js";
import '../styles/App.css';

function App() {
    const [appMode, setAppMode] = useState('game');

    return (
        <StratagemsProvider>
            <SpinningProvider>
                <ToolTipProvider>
                    <div className="App">
                        <header className="App-header">
                        </header>
                        <Game />
                        <SettingsButton currentMode={appMode} setCurrentMode={setAppMode}/>
                        <Settings currentMode={appMode} setCurrentMode={setAppMode} />
                        <ToolTip />
                    </div>
                </ToolTipProvider>
            </SpinningProvider>
        </StratagemsProvider>
    );
}

export default App;
