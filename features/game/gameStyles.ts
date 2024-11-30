import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useGameStyles = () => {
  const insets = useSafeAreaInsets();

  const colors = {
    background: useThemeColor({}, 'background'),
    dark: useThemeColor({}, 'tabIconDefault'),
    light: useThemeColor({}, 'background'),
    primary: useThemeColor({}, 'tint'),
    text: useThemeColor({}, 'text'),
    secondary: '#00B894',
    danger: '#FF7675',
  };

  const commonButtonStyles = {
    shadowOffset: { height: 2, width: 0 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  };

  return StyleSheet.create({
    // Layout
    container: {
      backgroundColor: colors.background,
      paddingBottom: insets.bottom,
      paddingRight: insets.right,
      paddingLeft: insets.left,
      paddingTop: insets.top,
      padding: 16,
      flex: 1,
    },
    rotateButton: {
      backgroundColor: colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 32,
      height: 64,
      width: 64,
      ...commonButtonStyles,
    },
    // Buttons
    controlButton: {
      backgroundColor: colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 28,
      height: 56,
      width: 56,
      ...commonButtonStyles,
    },

    dropButton: {
      backgroundColor: colors.danger,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 32,
      height: 64,
      width: 64,
      ...commonButtonStyles,
    },
    sideButton: {
      backgroundColor: colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
      height: 48,
      width: 48,
      ...commonButtonStyles,
    },
    nextPieceBox: {
      backgroundColor: colors.dark,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      padding: 8,
      height: 96,
      width: 96,
    },

    modalContent: {
      backgroundColor: colors.background,
      alignItems: 'center',
      borderRadius: 20,
      minWidth: 280,
      padding: 32,
      ...commonButtonStyles,
    },
    gridContainer: {
      backgroundColor: colors.dark,
      alignSelf: 'center',
      borderRadius: 12,
      maxHeight: '60%',
      ...commonButtonStyles,
    },
    // Game Info
    gameInfo: {
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },

    // Side Controls
    sideControlsContainer: {
      transform: [{ translateY: -52 }],
      position: 'absolute',
      top: '50%',
      zIndex: 10,
      right: 16,
    },
    // Modal
    modalOverlay: {
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    nextPieceCell: {
      backgroundColor: colors.dark,
      borderRadius: 2,
      height: 18,
      width: 18,
      margin: 1,
    },
    horizontalControls: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
    },

    sideControlsWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 104,
      gap: 8,
    },
    nextPieceLabel: {
      color: colors.text,
      fontWeight: '600',
      marginBottom: 8,
      fontSize: 16,
    },
    modalTitle: {
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 24,
      fontSize: 28,
    },

    scoreLabel: {
      color: colors.text,
      fontWeight: '600',
      marginBottom: 8,
      fontSize: 16,
    },
    // Controls
    bottomControlsContainer: {
      justifyContent: 'center',
      paddingBottom: 8,
      minHeight: 160,
    },
    // Next Piece
    nextPieceContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    scoreContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },

    scoreText: {
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: 32,
    },
    gameContainer: {
      justifyContent: 'space-between',
      flex: 1,
      gap: 16,
    },
    bottomControls: {
      alignItems: 'center',
      gap: 12,
    },
    restartButton: {
      backgroundColor: colors.danger,
    },
  });
};
