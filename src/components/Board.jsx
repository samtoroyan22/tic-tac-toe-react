import React, { useState, useEffect } from "react";
import Square from "./Square";
import styles from "./Game.module.css";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";
import Header from "./Header";
import { calculateWinner } from "../utils/GameLogic";
import { findBestMove } from "../utils/AI";

const BOARD = ["", "", "", "", "", "", "", "", ""];

const Board = ({ mode }) => {
  const [board, setBoard] = useState(BOARD);
  const [isXNext, setIsXNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const onClick = (index) => {
    if (board[index] === "" && !isGameOver) {
      const newBoard = [...board];
      newBoard[index] = isXNext ? cross : circle;
      setBoard(newBoard);
      setIsXNext(!isXNext);
    }
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
    } else if (board.every((cell) => cell !== "")) {
      setIsDraw(true);
      setIsGameOver(true);
    }
  }, [board]);

  useEffect(() => {
    if (mode === "vsAI" && !isXNext && !isGameOver) {
      const bestMove = findBestMove(board);
      const newBoard = [...board];
      newBoard[bestMove] = circle;
      setBoard(newBoard);
      setIsXNext(true);
    }
  }, [board, isXNext, mode, isGameOver]);

  const resetGame = () => {
    setBoard(BOARD);
    setIsXNext(true);
    setIsGameOver(false);
    setWinner(null);
    setIsDraw(false);
  };

  useEffect(() => {
    resetGame();
  }, [mode]);

  return (
    <>
      <Header isXNextStep={isXNext} isWinner={winner} isDraw={isDraw} />
      <div className={styles.board}>
        {board.map((square, index) => (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        ))}
      </div>
      <button className={styles.reset} onClick={resetGame}>
        Reset
      </button>
    </>
  );
};

export default Board;
