import { useState, useEffect } from "react";
// import { Data} from "./Data";

let responses = [
  {
    gameId: 2025020001,
    homeTeam: {
      name: "Panthers",
      oddsML: "-325",
    },
    awayTeam: {
      name: "Blackhawks",
      oddsML: "+260",
    },
  },
];

export const Moneyline = ({
  gameMoneyLines,
  setGameMoneyLines,
  moneyLineData,
  props,
}) => {
  const highlightPlayer = (gameId) => {
    // console.log(propBet);
    // console.log(typeof player);
    setGameMoneyLines(
      (existing) =>
        existing.includes(gameId)
          ? existing.filter((p) => p !== gameId) // deselect
          : [...existing, gameId] // select
    );
  };

  return (
    <div>
      <div className="selected-menu">
        {moneyLineData.map(({ gameId, homeTeam, awayTeam }) => (
          <p
            key={`${gameId} ${homeTeam.name} (${homeTeam.oddsML}) vs ${awayTeam.name} (${awayTeam.oddsML})`}
            className={`selectable ${
              gameMoneyLines.includes(
                `${gameId} ${homeTeam.name} (${homeTeam.oddsML}) vs ${awayTeam.name} (${awayTeam.oddsML})`
              )
                ? "selected"
                : ""
            }`}
            onClick={() =>
              highlightPlayer(
                `${gameId} ${homeTeam.name} (${homeTeam.oddsML}) vs ${awayTeam.name} (${awayTeam.oddsML})`
              )
            }
            // style={{ fontSize: defaultSize }}
          >
            {`${homeTeam.name} (${homeTeam.oddsML}) vs ${awayTeam.name} (${awayTeam.oddsML})`}
          </p>
        ))}
      </div>
      {/* <Data /> */}
      {/* <h3>Parlay Legs:</h3>
      <div className="selected-items">
        <ol>
          {gameMoneyLines.map((game) => (
            <li key={game}>{game.slice(10)}</li>
          ))}
        </ol>
      </div> */}
    </div>
  );
};
