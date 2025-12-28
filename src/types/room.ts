export type Symbol = "X" | "O";

export interface Room {
  players: [string, string];
  board: (Symbol | null)[];
  currentTurn: Symbol;
}
