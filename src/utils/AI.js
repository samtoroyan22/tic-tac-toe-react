import { calculateWinner } from "./GameLogic";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

export const minimax = (board, depth, isMaximizingPlayer, alpha, beta) => {
  const winner = calculateWinner(board);
  if (winner === cross) return -10 + depth; // Максимум выигрыша для X (игрока)
  if (winner === circle) return 10 - depth; // Минимум выигрыша для O (ИИ)
  if (board.every((cell) => cell !== "")) return 0; // Ничья

  if (isMaximizingPlayer) {
    let maxEval = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = circle; // ИИ ходит за O
        const evaluation = minimax(board, depth + 1, false, alpha, beta); // Переименовано eval в evaluation
        board[i] = ""; // откатить ход
        maxEval = Math.max(maxEval, evaluation);
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break; // альфа-бета отсечение
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = cross; // Игрок ходит за X
        const evaluation = minimax(board, depth + 1, true, alpha, beta); // Переименовано eval в evaluation
        board[i] = ""; // откатить ход
        minEval = Math.min(minEval, evaluation);
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) break; // альфа-бета отсечение
      }
    }
    return minEval;
  }
};

// Функция для нахождения лучшего хода для ИИ
export const findBestMove = (board) => {
  let bestMove = -1;
  let bestValue = -Infinity;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = circle; // ИИ ходит за O
      const moveValue = minimax(board, 0, false, -Infinity, Infinity);
      board[i] = ""; // откатить ход
      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = i;
      }
    }
  }
  return bestMove;
};
