import { SymbolViewProps, SymbolWeight, SymbolView } from 'expo-symbols';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export function IconSymbol({
  weight = 'regular',
  size = 24,
  color,
  style,
  name,
}: {
  name: SymbolViewProps['name'];
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  size?: number;
  color: string;
}) {
  return (
    <SymbolView
      style={[
        {
          height: size,
          width: size,
        },
        style,
      ]}
      resizeMode="scaleAspectFit"
      tintColor={color}
      weight={weight}
      name={name}
    />
  );
}
