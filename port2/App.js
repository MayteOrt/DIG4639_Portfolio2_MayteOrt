import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createContext, useCallback, useImperativeHandle } from 'react';
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native';

const Stack = creatNativeStackNavigator();
function legExcerciseScreen({ route, navigation }) {
  let gotolegExcercise = useCallback(() => {
    navigation.push("LegExcercise", {name: "Skull Crusher"})
  })
  return(
    <View style={styles.container}>
      <Button onPress={gotolegExercise} title="Go to Screen"></Button>
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
