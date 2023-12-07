import React, { useState } from "react";

function Players() {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  const addPlayer = () => {
    if (playerName.trim() !== "") {
      setPlayers([...players, { name: playerName, score: 0 }]);
      setPlayerName("");
    }
  };

  const handleScoreChange = (index, amount) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index].score += amount;
      return updatedPlayers;
    });
  };

  const removePlayer = (index) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers.splice(index, 1);
      return updatedPlayers;
    });
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <>
      <div className="container">
        <div className="player-container">
          <div className="how-to-header">
            <h3>Challange your friends with the FlagGame!</h3>
          </div>

          <button className="rules-btn" onClick={toggleInstructions}>
            {showInstructions ? "Hide Instructions" : "How to play"}
          </button>
          {showInstructions && (
            <div className="how-to-play">
              <ol>
                <li>Start with adding players</li>
                <li>Select the continent you want to guess the flags for</li>
                <li>Each player answers the country's name and capital</li>
                <li>After the answers, click on the flag</li>
                <li>Update the scoreboard</li>
                <li>You choose the end score!</li>
                <li>We recommend first to 20!</li>
              </ol>
            </div>
          )}
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Add player name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button className="adding-btn" onClick={addPlayer}>
              Add Player
            </button>
          </div>
          <ul id="list-container">
            {players.map((player, index) => (
              <li key={index}>
                {player.name} <span className="score">{player.score}</span>{" "}
                points
                <button
                  className="score-btn"
                  onClick={() => handleScoreChange(index, 1)}
                >
                  +
                </button>
                <button
                  className="score-btn"
                  onClick={() => handleScoreChange(index, -1)}
                >
                  -
                </button>
                <span
                  onClick={() => removePlayer(index)}
                  className="remove-icon"
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Players;
