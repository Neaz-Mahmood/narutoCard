import NarutoCard from '@/components/NarutoCard';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NarutoCard />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    marginLeft: 20,
    backgroundColor: '#f5f5f5',
  },
});
