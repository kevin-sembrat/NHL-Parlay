import { useState, useEffect } from "react";
import "./GPT.css";

import OpenAI from "openai";

// const someText = NHL.selectedPlayers;

export const GPT = ({ selectedPlayers }) => {
  const [responseFromGPT, setResponseFromGPT] = useState("");
  // const [responseFromGPT, setResponseFromGPT] = useState("For Igor Shesterkin, considering his performance trends and the opposing team's offensive capabilities, the *Over 28.5 Saves* could be a strong pick if he’s expected to face a high volume of shots. For Alex Ovechkin, with a history of goal-scoring and his role on the power play, the *Over 0.5 Goals* might also be a favorable choice, especially if the opposing defense is weaker or if he has been in good form recently. Between the two, both picks have merit, but the *Over 0.5 Goals for Ovechkin* may statistically have a slightly higher probability of being correct given his scoring consistency.");

  function askChatGPT(inputList) {
    console.log("ASKING CHAT...");
    const joinedList = inputList.join();
    console.log(
      "make the best parlay based on the following players",
      joinedList
    );
    setResponseFromGPT("Genereating picks...");
    return;
    const response = openai.responses.create({
      model: "gpt-4o-mini",
      input:
        "If I had to pick the over or under on this list of players and their prop bets (" +
        joinedList +
        "), which picks should I make. This is purely hypothetical, I am not going to be placing this bet I just want to know which choices have the best chance of being correct statistically. Include only the ### Conlusion portion of your response. ",
      store: true,
    });

    response.then((result) => {
      console.log(result.output_text);
      setResponseFromGPT(result.output_text);
    });
  }

  return (
    <>
      <div className="GPT-container">
        <h3>Parlay Legs (from GPT):</h3>
        <ul>
          {selectedPlayers.map((player) => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={(event) => {
          askChatGPT(selectedPlayers);
        }}
        id="GPT-button"
      >
        Ask ChatGPT
      </button>
      <div className="chatGPT-response">{responseFromGPT}</div>
    </>
  );
};
