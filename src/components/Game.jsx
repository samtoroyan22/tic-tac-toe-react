import React, { useState } from "react";
import Board from "./Board";
import styles from "./Game.module.css";
import GameMode from "./GameMode";

const Game = () => {
  const [mode, setMode] = useState("twoPlayers");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Tic Tac Toe in <span>React</span>
      </h1>
      <GameMode mode={mode} setMode={setMode} /> <Board mode={mode} />
    </div>
  );
};

export default Game;
