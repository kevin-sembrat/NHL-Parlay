import { useState } from "react";
import "./App.css";
import { NHL } from "./NHL";
import { GPT } from "./GPT";

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <section className="home-page">
        <div className="NHL">
          <label htmlFor="bet-type">Choose bet type: </label>
          <select id="bet-type" name="bet-type">
            <option value="over-under">Over/Under</option>
            <option value="spreads">Spreads</option>
            <option value="moneyline">Moneyline</option>
          </select>
          <NHL
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        </div>
        <div className="GPT">
          {/* <p>Chat GPT Responses go here...</p> */}
          <GPT selectedPlayers={selectedPlayers} />
        </div>
      </section>
    </>
  );
}

export default App;
