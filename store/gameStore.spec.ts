import { act } from '@testing-library/react-native';
import { useGameStore } from './gameStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tetromino } from '@/types/gameTypes';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('GameStore', () => {
    beforeEach(() => {
        useGameStore.setState({
          score: 0,
          level: 1,
          isGameOver: false,
          isPaused: false,
          grid: Array(20).fill(null).map(() => Array(10).fill(0)),
          currentPiece: {
            position: { x: 0, y: 0 },
            rotation: 0,
            type: 'I'
          },
        });
      });

      describe('Scoring System', () => {
        it('should award regular points for clearing 1 line', async () => {
          const store = useGameStore.getState();
          
          const testGrid = Array(20).fill(null).map(() => Array(10).fill(0));
          testGrid[19] = Array(10).fill(1);
          
          const testPiece: Tetromino = {
            position: { x: 0, y: 18 },
            rotation: 0,
            type: 'I'
          };
          
          useGameStore.setState({ 
            grid: testGrid,
            currentPiece: testPiece
          });
          
          await act(async () => {
            store.moveDown();
          });
      
          expect(useGameStore.getState().score).toBe(100);
        });
      
        it('should award Tetris bonus for clearing 4 lines', async () => {
          const store = useGameStore.getState();
          
          const testGrid = Array(20).fill(null).map(() => Array(10).fill(0));
          testGrid[19] = Array(10).fill(1);
          testGrid[18] = Array(10).fill(1);
          testGrid[17] = Array(10).fill(1);
          testGrid[16] = Array(10).fill(1);
          
          const testPiece: Tetromino = {
            position: { x: 0, y: 15 },
            rotation: 0,
            type: 'I'
          };
          
          useGameStore.setState({ 
            grid: testGrid,
            currentPiece: testPiece
          });
          
          await act(async () => {
            store.moveDown();
          });
      
          expect(useGameStore.getState().score).toBe(800);
        });
      });

  describe('Game Controls', () => {
    it('should move piece left', () => {
        const testPiece: Tetromino = {
          position: { x: 5, y: 0 },
          rotation: 0,
          type: 'I'
        };
        
        useGameStore.setState({
          currentPiece: testPiece
        });
      
        const store = useGameStore.getState();
        const initialX = store.currentPiece.position.x;
        
        act(() => {
          store.moveLeft();
        });
      
        expect(useGameStore.getState().currentPiece.position.x).toBe(initialX - 1);
      });

    it('should move piece right', () => {
      const store = useGameStore.getState();
      const initialX = store.currentPiece.position.x;
      
      act(() => {
        store.moveRight();
      });

      expect(useGameStore.getState().currentPiece.position.x).toBe(initialX + 1);
    });

    it('should rotate piece', () => {
      const store = useGameStore.getState();
      const initialRotation = store.currentPiece.rotation;
      
      act(() => {
        store.rotate();
      });

      expect(useGameStore.getState().currentPiece.rotation).toBe((initialRotation + 1) % 4);
    });
  });

  describe('Game State', () => {
    it('should start game with initial values', () => {
      const store = useGameStore.getState();
      
      act(() => {
        store.startGame();
      });

      expect(useGameStore.getState().score).toBe(0);
      expect(useGameStore.getState().level).toBe(1);
      expect(useGameStore.getState().isGameOver).toBe(false);
      expect(useGameStore.getState().isPaused).toBe(false);
    });

    it('should pause and resume game', () => {
      const store = useGameStore.getState();
      
      act(() => {
        store.pauseGame();
      });

      expect(useGameStore.getState().isPaused).toBe(true);

      act(() => {
        store.resumeGame();
      });

      expect(useGameStore.getState().isPaused).toBe(false);
    });
  });

  describe('High Scores', () => {
    it('should save and load scores', async () => {
      const store = useGameStore.getState();
      const testScore = 1000;
      
      useGameStore.setState({ score: testScore });
      
      await act(async () => {
        await store.saveScore();
      });

      expect(AsyncStorage.setItem).toHaveBeenCalled();
    });
  });
});