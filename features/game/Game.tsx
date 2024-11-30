import { IconSymbol } from '@/components/ui/IconSymbol';
import { useGameStore } from '@/store/gameStore';
import * as Haptics from 'expo-haptics';
import React, { useEffect, useState } from 'react';
import { Pressable, Modal, Text, View } from 'react-native';

import { ControlButton, GameControls } from './components/GameControls';
import { NextPiece } from './components/NextPiece';
import { useGameStyles } from './gameStyles';
import Grid from './Grid';
import Settings from './Settings';

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const styles = useGameStyles();

  const { gameInterval, isGameOver, resumeGame, startGame, pauseGame, isPaused, settings, score } =
    useGameStore();

  useEffect(() => {
    if (gameInterval) {
      return () => clearInterval(gameInterval);
    }
  }, [gameInterval]);

  const handleGameStart = () => {
    if (settings.haptics) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    setIsStarted(true);
    startGame();
  };

  const handleGamePause = () => {
    if (settings.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    if (isPaused) {
      resumeGame();
    } else {
      pauseGame();
    }
  };

  const SideControls = () => (
    <View style={styles.sideControlsWrapper}>
      {!isStarted ? (
        <Pressable style={styles.sideButton} onPress={handleGameStart}>
          <IconSymbol name="play.fill" color="#fff" size={24} />
        </Pressable>
      ) : (
        <>
          <Pressable style={styles.sideButton} onPress={handleGamePause}>
            <IconSymbol name={isPaused ? 'play.fill' : 'pause.fill'} color="#fff" size={24} />
          </Pressable>
          <Pressable style={[styles.sideButton, styles.restartButton]} onPress={handleGameStart}>
            <IconSymbol name="arrow.clockwise" color="#fff" size={24} />
          </Pressable>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.sideControlsContainer}>
        <SideControls />
      </View>

      <View style={styles.gameContainer}>
        <View style={styles.gameInfo}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Score</Text>
            <Text style={styles.scoreText}>{score}</Text>
          </View>
          <NextPiece />
        </View>

        <View style={styles.gridContainer}>
          <Grid />
        </View>

        <View style={styles.bottomControlsContainer}>
          {!isGameOver && !isPaused && isStarted && <GameControls />}
        </View>
      </View>

      <Modal visible={isGameOver} animationType="fade" transparent={false}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Game Over!</Text>
            <ControlButton onPress={handleGameStart} icon="play.fill" />
          </View>
        </View>
      </Modal>

      <Modal visible={isPaused && !isGameOver} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Game Paused</Text>
            <Settings />
            <ControlButton onPress={handleGamePause} icon="play.fill" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Game;
