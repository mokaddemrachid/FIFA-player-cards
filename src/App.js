import React from "react";
import PlayerList from "./PlayerList";
import data from "./players";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PlayerList players={data} />
      </header>
    </div>
  );
}

export default App;
