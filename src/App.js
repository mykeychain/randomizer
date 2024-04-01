import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [stratagems, setStratagems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStratagems = async () => {
      const response = await fetch("http://localhost:3001/stratagems");
      const data = await response.json();
      setStratagems(data);
      setIsLoading(false);
    };

    fetchStratagems();
  }, [])

  function renderStratagems( stratagems ) {
    if (isLoading) {
      return ([<div> still loading </div>]);
    }
    else {
      const items = [];
      for (const s of stratagems){
        items.push(<div key={s.display_name}>{s.display_name}</div>);
      };
      return (items);
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        {renderStratagems(stratagems)}
      </header>
    </div>
  );
}

export default App;
