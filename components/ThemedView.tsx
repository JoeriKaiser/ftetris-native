import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { type ViewProps, View } from 'react-native';

export type ThemedViewProps = {
  lightColor?: string;
  darkColor?: string;
} & ViewProps;

export function ThemedView({ lightColor, darkColor, style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
