import React, { useState } from "react";
import StratagemsProvider from "../utils/StratagemsProvider";
import SpinningProvider from "../utils/SpinningProvider";
import Settings from "./Settings.js";
import Game from "./Game.js";
import '../styles/App.css';
import SettingsButton from "../components/SettingsButton.js";

function App() {
    const [appMode, setAppMode] = useState('game');

    return (
        <StratagemsProvider>
            <SpinningProvider>
                <div className="App">
                    <header className="App-header">
                    </header>
                    <Game />
                    <SettingsButton currentMode={appMode} setCurrentMode={setAppMode}/>
                    <Settings currentMode={appMode} setCurrentMode={setAppMode} />
                </div>
            </SpinningProvider>
        </StratagemsProvider>
    );
}

export default App;
