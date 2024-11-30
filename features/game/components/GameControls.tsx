import { IconSymbol } from '@/components/ui/IconSymbol';
import { useGameStore } from '@/store/gameStore';
import * as Haptics from 'expo-haptics';
import { SFSymbol } from 'expo-symbols';
import React, { useState } from 'react';
import { Pressable, StyleProp, ViewStyle, Platform, View } from 'react-native';

import { useGameStyles } from '../gameStyles';

interface ControlButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  icon: SFSymbol;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onPress, style, icon }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { settings } = useGameStore();

  const handlePressIn = () => {
    setIsPressed(true);
    if (settings.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        style,
        {
          opacity: Platform.OS === 'ios' ? (pressed ? 0.6 : 1) : 1,
          transform: [{ scale: isPressed ? 0.95 : 1 }],
        },
      ]}
      onPressOut={() => setIsPressed(false)}
      onPressIn={handlePressIn}
    >
      <IconSymbol color="#fff" name={icon} size={32} />
    </Pressable>
  );
};

export const GameControls: React.FC = () => {
  const styles = useGameStyles();
  const { moveRight, moveLeft, moveDown, hardDrop, rotate } = useGameStore();

  return (
    <View style={styles.bottomControls}>
      <View style={styles.horizontalControls}>
        <ControlButton style={styles.controlButton} icon="chevron.left" onPress={moveLeft} />
        <ControlButton style={styles.rotateButton} icon="arrow.clockwise" onPress={rotate} />
        <ControlButton style={styles.controlButton} icon="chevron.right" onPress={moveRight} />
      </View>
      <View style={styles.horizontalControls}>
        <ControlButton style={styles.controlButton} icon="chevron.down" onPress={moveDown} />
        <ControlButton style={styles.dropButton} icon="arrow.down.to.line" onPress={hardDrop} />
      </View>
    </View>
  );
};

export { ControlButton };
