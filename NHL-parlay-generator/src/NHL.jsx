import { useState, useEffect } from "react";
import "./NHL.css";
import { OverUnder } from "./OverUnder";
import { Moneyline } from "./Moneyline";

export const NHL = ({
  selectedPlayers,
  setSelectedPlayers,
  gameMoneyLines,
  setGameMoneyLines,
  props,
}) => {
  const [betType, setBetType] = useState("moneyline");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("MAKING API CALL");
    // This runs once, on mount, because deps array is empty
    const fetchData = async () => {
      try {
        const res = await fetch("/api/nhl");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ← empty array means “only on first render”

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;

  //add data to a simplified object
  const totalGames = data.games; //array
  const moneyLineData = [];
  totalGames.map((game) => {
    const gameId = game.gameId;
    const homeTeamName = game.homeTeam.name.default;
    const homeTeamOdds = game.homeTeam.odds[1].value;
    const awayTeamName = game.awayTeam.name.default;
    const awayTeamOdds = game.awayTeam.odds[1].value;

    const compiledStats = {
      gameId,
      homeTeam: {
        name: homeTeamName,
        oddsML: homeTeamOdds,
      },
      awayTeam: {
        name: awayTeamName,
        oddsML: awayTeamOdds,
      },
    };
    moneyLineData.push(compiledStats);
  });

  // console.log(moneyLineData);

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

  const changeBetType = (e) => {
    setBetType(e.target.value);
  };

  return (
    <>
      {/* Your selector, now controlled */}
      <label htmlFor="bet-type">Choose bet type: </label>
      <select
        id="bet-type"
        name="bet-type"
        value={betType}
        onChange={changeBetType}
      >
        <option value="over-under">Over/Under</option>
        <option value="spreads">Spreads</option>
        <option value="moneyline">Moneyline</option>
      </select>

      <hr />

      {betType === "over-under" && (
        <OverUnder
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}

      {betType === "moneyline" && (
        <Moneyline
          gameMoneyLines={gameMoneyLines}
          setGameMoneyLines={setGameMoneyLines}
          moneyLineData={moneyLineData}
        />
      )}
      {/* {betType === "spreads"     && <Spreads />} */}

      {/* <label htmlFor="bet-type">Choose bet type: </label>
      <select id="bet-type" name="bet-type">
        <option value="over-under">Over/Under</option>
        <option value="spreads">Spreads</option>
        <option value="moneyline">Moneyline</option>
      </select>
      <OverUnder
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      /> */}
    </>
  );
};
