import { Symbol } from "../types/room";

export const checkWinner = (board: (string | null)[]): Symbol | null => {
  {
    /**
       
    0 | 1 | 2
    ---------
    3 | 4 | 5
    ---------
    6 | 7 | 8

        */
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as Symbol;
    }
  }

  return null;
};

// Function to check if the board is full (draw)
export const isDraw = (board: (string | null)[]): boolean => {
  return board.every(Boolean);
};
