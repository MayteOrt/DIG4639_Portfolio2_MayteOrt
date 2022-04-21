import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack = creatNativeStackNavigator();
function legExerciseScreen({ route, navigation }) {
  let gotolegExercise = useCallback(() => {
    navigation.push("LegExercise", {name: "Skull Crusher"})
  })
  return(
    <View style={styles.container}>
      <Button onPress={gotolegExercise} title="Go to Screen"></Button>
      <StatusBar style="auto" />
    </View>
  )
}

function HomeScreen({ navigation }) {
  let gotolegExercise = useCallback(() => {
    navigation.navigate("LegExercise", {name: "Skull Crusher"})
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={gotoExercise} title="Go to Screen"></Button>
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LegExercise" component={legExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
