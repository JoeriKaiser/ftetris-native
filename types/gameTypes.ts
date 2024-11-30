export type GameState = {
  currentPiece: Tetromino;
  nextPiece: Tetromino;
  isGameOver: boolean;
  grid: number[][];
  score: number;
  level: number;
};

export type Tetromino = {
  type: TetrominoType;
  position: Position;
  rotation: number;
};

export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type Position = {
  x: number;
  y: number;
};
