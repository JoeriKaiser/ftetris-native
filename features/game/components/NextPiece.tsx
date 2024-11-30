import { TETROMINOES } from '@/constants/Values';
import { useGameStore } from '@/store/gameStore';
import React from 'react';
import { View, Text } from 'react-native';

import { useGameStyles } from '../gameStyles';

export const NextPiece: React.FC = () => {
  const styles = useGameStyles();
  const { nextPiece } = useGameStore();

  if (!nextPiece) return null;

  const shape = TETROMINOES[nextPiece.type].shape;
  const color = TETROMINOES[nextPiece.type].color;
  const maxSize = 4;
  const verticalPadding = Math.floor((maxSize - shape.length) / 2);
  const horizontalPadding = Math.floor((maxSize - shape[0].length) / 2);

  return (
    <View style={styles.nextPieceContainer}>
      <Text style={styles.nextPieceLabel}>Next</Text>
      <View style={styles.nextPieceBox}>
        {Array(maxSize)
          .fill(0)
          .map((_, i) => (
            <View style={{ flexDirection: 'row' }} key={i}>
              {Array(maxSize)
                .fill(0)
                .map((_, j) => {
                  const pieceRow = i - verticalPadding;
                  const pieceCol = j - horizontalPadding;
                  const isActivePiece =
                    pieceRow >= 0 &&
                    pieceRow < shape.length &&
                    pieceCol >= 0 &&
                    pieceCol < shape[0].length &&
                    shape[pieceRow][pieceCol];

                  return (
                    <View
                      style={[
                        styles.nextPieceCell,
                        isActivePiece ? { backgroundColor: color } : undefined,
                      ]}
                      key={j}
                    />
                  );
                })}
            </View>
          ))}
      </View>
    </View>
  );
};
