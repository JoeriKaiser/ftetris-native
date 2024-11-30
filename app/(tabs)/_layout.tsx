import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarBackground: TabBarBackground,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="house.fill" color={color} size={28} />,
          title: 'Home',
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="paperplane.fill" color={color} size={28} />,
          title: 'Explore',
        }}
        name="explore"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="house.fill" color={color} size={28} />,
          title: 'Tetris',
        }}
        name="tetris"
      />
    </Tabs>
  );
}
