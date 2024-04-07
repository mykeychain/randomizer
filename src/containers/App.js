import React, { useState } from "react";
import StratagemsProvider from "../utils/StratagemsProvider";
import SpinningProvider from "../utils/SpinningProvider";
import ToolTipProvider from "../utils/ToolTipProvider";
import Settings from "./Settings.js";
import Game from "./Game.js";
import SettingsButton from "../components/SettingsButton.js";
import ToolTip from "../components/ToolTip.js";
import '../styles/App.css';
import AppProvider from "../utils/AppProvider.js";

function App() {
    return (
        <StratagemsProvider>
            <SpinningProvider>
                <ToolTipProvider>
                    <AppProvider>
                        <div className="App">
                            <header className="App-header">
                            </header>
                            <Game />
                            <SettingsButton />
                            <Settings  />
                            <ToolTip />
                        </div>
                    </AppProvider>
                </ToolTipProvider>
            </SpinningProvider>
        </StratagemsProvider>
    );
}

export default App;
