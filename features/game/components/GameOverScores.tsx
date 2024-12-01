import { useGameStore } from '@/store/gameStore';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScores = () => {
  const highScores = useGameStore((state) => state.highScores);

  return (
    <View style={styles.container}>
      <Text style={styles.gameOverText}>Game Over!</Text>
      <View style={styles.scoresContainer}>
        <Text style={styles.highScoresTitle}>High Scores</Text>
        {highScores.length === 0 ? (
          <Text style={styles.noScoresText}>No scores yet</Text>
        ) : (
          highScores.map((score, index) => (
            <View style={styles.scoreRow} key={index}>
              <View style={styles.rankContainer}>
                <Text style={styles.rankText}>#{index + 1}</Text>
              </View>
              <View style={styles.scoreDetails}>
                <Text style={styles.scoreText}>{score.score.toLocaleString()} pts</Text>
                <View style={styles.levelDateContainer}>
                  <Text style={styles.levelText}>Level {score.level}</Text>
                  <Text style={styles.dateText}>{new Date(score.date).toLocaleDateString()}</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rankContainer: {
    justifyContent: 'center',
    backgroundColor: '#333',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 12,
    height: 40,
    width: 40,
  },
  scoreRow: {
    borderBottomColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  scoresContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    maxHeight: 400,
    width: '100%',
    padding: 16,
  },
  highScoresTitle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    fontSize: 24,
  },
  levelDateContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noScoresText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
    fontSize: 16,
  },
  gameOverText: {
    fontWeight: 'bold',
    color: '#FF4B4B',
    marginBottom: 20,
    fontSize: 32,
  },
  scoreText: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFF',
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  rankText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
  levelText: {
    color: '#AAA',
    fontSize: 14,
  },
  dateText: {
    color: '#888',
    fontSize: 12,
  },
  scoreDetails: {
    flex: 1,
  },
});

export default GameOverScores;
