import { useState } from "react";
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
