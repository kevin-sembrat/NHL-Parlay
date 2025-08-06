let responses = [
  { player: "Connor McDavid", propBet: "Over/Under 1.5 Total Assists" },
  { player: "Igor Shesterkin ", propBet: "Over/Under 28.5 Saves" },
  { player: "Alex Ovechkin", propBet: "Over/Under 0.5 Goals" },
  { player: "Auston Matthews", propBet: "Over/Under 1.5 Total Goals" },
];

export const OverUnder = ({ selectedPlayers, setSelectedPlayers, props }) => {
  const highlightPlayer = (playerAndPropBet) => {
    // console.log(propBet);
    // console.log(typeof player);
    setSelectedPlayers(
      (existing) =>
        existing.includes(playerAndPropBet)
          ? existing.filter((p) => p !== playerAndPropBet) // deselect
          : [...existing, playerAndPropBet] // select
    );
  };

  return (
    <div>
      <div className="selected-menu">
        {responses.map(({ player, propBet }) => (
          <p
            key={player + " " + propBet}
            className={`selectable ${
              selectedPlayers.includes(player + " " + propBet) ? "selected" : ""
            }`}
            onClick={() => highlightPlayer(player + " " + propBet)}
            // style={{ fontSize: defaultSize }}
          >
            {player} - {propBet}
          </p>
        ))}
      </div>

      {/* <h3>Parlay Legs:</h3>
      <div className="selected-items">
        <ol>
          {selectedPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ol>
      </div> */}
    </div>
  );
};
