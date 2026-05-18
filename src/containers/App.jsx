import React from "react";
import Game from "./Game";
import SettingsButton from "../components/SettingsButton";
import Settings from "./Settings";
import ToolTip from "../components/ToolTip";
import AppProvider from "../utils/AppProvider";
import GeneralSettingsProvider from "../utils/GeneralSettingsProvider";
import SpinningProvider from "../utils/SpinningProvider";
import StratagemsProvider from "../utils/StratagemsProvider";
import ToolTipProvider from "../utils/ToolTipProvider";
import WinnerProvider from "../utils/WinnerProvider";
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
