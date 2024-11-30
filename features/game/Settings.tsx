import React from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';

import { useGameStore } from '../../store/gameStore';

interface SettingItemProps {
  onValueChange: (value: boolean) => void;
  value: boolean;
  label: string;
}

const SettingItem: React.FC<SettingItemProps> = ({ onValueChange, label, value }) => (
  <View style={styles.settingItem}>
    <Text style={styles.settingLabel}>{label}</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={onValueChange}
      value={value}
    />
  </View>
);

const Settings: React.FC = () => {
  const { updateSetting, settings } = useGameStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <SettingItem
        onValueChange={(value) => updateSetting('haptics', value)}
        value={settings.haptics}
        label="Haptic Feedback"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    fontSize: 20,
  },
  settingLabel: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    width: '100%',
    padding: 16,
  },
});

export default Settings;
