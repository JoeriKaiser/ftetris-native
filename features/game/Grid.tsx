import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';

import { TETROMINOES } from '../../constants/Values';
import { useGameStore } from '../../store/gameStore';

const Grid: React.FC = () => {
  const { currentPiece, ghostPiece, grid } = useGameStore();

  const getRotatedShape = (shape: readonly number[][], rotation: number): readonly number[][] => {
    let rotated = [...shape.map((row) => [...row])];
    for (let i = 0; i < rotation; i++) {
      const N = rotated.length;
      const newRotated = Array(N)
        .fill(0)
        .map(() => Array(N).fill(0));
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          newRotated[y][x] = rotated[N - 1 - x][y];
        }
      }
      rotated = newRotated;
    }
    return rotated as readonly number[][];
  };

  const renderCell = (cell: number, x: number, y: number) => {
    const piece = TETROMINOES[currentPiece.type];
    const rotatedShape = getRotatedShape(
      piece.shape as unknown as readonly number[][],
      currentPiece.rotation
    );

    // check if current piece occupies this cell
    const isCurrent =
      currentPiece.type &&
      y >= currentPiece.position.y &&
      y < currentPiece.position.y + rotatedShape.length &&
      x >= currentPiece.position.x &&
      x < currentPiece.position.x + rotatedShape[0].length &&
      rotatedShape[y - currentPiece.position.y][x - currentPiece.position.x];

    // check if ghost piece occupies this cell
    const isGhost =
      ghostPiece &&
      y >= ghostPiece.y &&
      y < ghostPiece.y + rotatedShape.length &&
      x >= ghostPiece.x &&
      x < ghostPiece.x + rotatedShape[0].length &&
      rotatedShape[y - ghostPiece.y][x - ghostPiece.x];

    return (
      <View
        style={
          [
            styles.cell,
            cell && styles.secondaryCell,
            isCurrent && styles.currentCell,
            isGhost && styles.ghostCell,
            {
              backgroundColor: isCurrent ? piece.color : cell ? '#666666' : 'transparent',
              borderColor: isGhost ? piece.color : styles.cell.borderColor,
            },
          ] as StyleProp<ViewStyle>
        }
        key={`${x}-${y}`}
      />
    );
  };

  const transposedGrid = Array(grid[0].length)
    .fill(null)
    .map((_, colIndex) => grid.map((row) => row[colIndex]));

  return (
    <View style={styles.gridContainer}>
      {transposedGrid.map((col, x) => (
        <View style={styles.column} key={x}>
          {col.map((cell, y) => renderCell(cell, x, y))}
        </View>
      ))}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  gridContainer: {
    shadowOffset: { height: 4, width: 0 },
    backgroundColor: '#16161E',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    borderRadius: 12,
    shadowRadius: 8,
    elevation: 10,
    padding: 12,
  },
  currentCell: {
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowOffset: { height: 2, width: 0 },
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  cell: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    height: 24,
    width: 24,
  },
  secondaryCell: {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: '#666666',
  },
  ghostCell: {
    borderStyle: 'dashed',
    borderWidth: 2,
    opacity: 0.4,
  },
  column: {
    flexDirection: 'column',
  },
});
