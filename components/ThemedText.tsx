import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { type TextProps, StyleSheet, Text } from 'react-native';

export type ThemedTextProps = {
  type?: 'defaultSemiBold' | 'subtitle' | 'default' | 'title' | 'link';
  lightColor?: string;
  darkColor?: string;
} & TextProps;

export function ThemedText({
  type = 'default',
  lightColor,
  darkColor,
  style,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  defaultSemiBold: {
    fontWeight: '600',
    lineHeight: 24,
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 32,
    fontSize: 32,
  },
  link: {
    color: '#0a7ea4',
    lineHeight: 30,
    fontSize: 16,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  default: {
    lineHeight: 24,
    fontSize: 16,
  },
});
