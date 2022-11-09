import { View, Text } from 'react-native';

import { Header } from '../components/Header';
import { Note } from '../components/Note';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Note />
    </View>
  );
}
