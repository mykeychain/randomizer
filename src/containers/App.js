import React from "react";
import Game from "./Game.js";
import SettingsButton from "../components/SettingsButton.js";
import Settings from "./Settings.js";
import ToolTip from "../components/ToolTip.js";
import AppProvider from "../utils/AppProvider.js";
import GeneralSettingsProvider from "../utils/GeneralSettingsProvider.js";
import SpinningProvider from "../utils/SpinningProvider";
import StratagemsProvider from "../utils/StratagemsProvider";
import ToolTipProvider from "../utils/ToolTipProvider";
import WinnerProvider from "../utils/WinnerProvider.js";
import '../styles/App.css';

function App() {
    return (
        <GeneralSettingsProvider>
            <StratagemsProvider>
                <SpinningProvider>
                    <ToolTipProvider>
                        <AppProvider>
                            <WinnerProvider>
                                <div className="App">
                                    <header className="App-header">
                                    </header>
                                    <Game />
                                    <SettingsButton />
                                    <Settings  />
                                    <ToolTip />
                                </div>
                            </WinnerProvider>
                        </AppProvider>
                    </ToolTipProvider>
                </SpinningProvider>
            </StratagemsProvider>
        </GeneralSettingsProvider>
    );
}

export default App;
