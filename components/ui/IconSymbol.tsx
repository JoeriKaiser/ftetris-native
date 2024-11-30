// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  chveron: {
    down: 'keyboard-arrow-down',
    right: 'chevron-right',
    left: 'chevron-left',
  },
  'chevron.left.forwardslash.chevron.right': 'code',
  'arrow.down.to.line': 'vertical-align-bottom',
  'chevron.down': 'keyboard-arrow-down',
  'chevron.right': 'chevron-right',
  'chevron.left': 'chevron-left',
  'arrow.clockwise': 'refresh',
  'paperplane.fill': 'send',
  'play.fill': 'play-arrow',
  rotate: 'rotate-right',
  'pause.fill': 'pause',
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  play: 'play-arrow',
  refresh: 'refresh',
  pause: 'pause',
  xmark: 'close',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  size = 24,
  color,
  style,
  name,
}: {
  color: OpaqueColorValue | string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  name: IconSymbolName;
  size?: number;
}) {
  return (
    <MaterialIcons
      style={style as StyleProp<TextStyle>}
      name={MAPPING[name]}
      color={color}
      size={size}
    />
  );
}
