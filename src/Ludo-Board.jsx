import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((currMoves) => {
      return { ...currMoves, blue: currMoves.blue + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((currMoves) => {
      return { ...currMoves, yellow: currMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((currMoves) => {
      return { ...currMoves, green: currMoves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((currMoves) => {
      return { ...currMoves, red: currMoves.red + 1 };
    });
  };

  return (
    <div>
      <h4>Game begins!</h4>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
