export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;
export const INITIAL_SPEED = 1000;
export const SPEED_INCREASE = 0.85;
export const POINTS_PER_LINE = 100;
export const LINES_PER_LEVEL = 10;

export const TETRIS_BONUS = 800;

export const TETROMINOES = {
  I: {
    shape: [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: '#FF0055',
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#AA00FF',
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    color: '#00FF00',
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    color: '#FF0000',
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#00FFDD',
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    color: '#FF9500',
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: '#FFFF00',
  },
} as const;

export type TetrominoShape = (typeof TETROMINOES)[keyof typeof TETROMINOES]['shape'];
