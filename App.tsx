import ToDosScreen from './src/screen/ToDosScreen';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return <View style={styles.rootView}>
  <ToDosScreen/>
  </View>
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    marginTop: 20
  }
})

