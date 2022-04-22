import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack = createNativeStackNavigator();
function LegExerciseScreen({ navigation }) {
  let gotoLegExercise = useCallback(() => {
    navigation.push("LegExercise")
  })
  return(
    <View style={styles.container}>
      <Text>Leg Exercises <br></br> Let's get started!</Text>
      <Text>Elevated Goblet Squats 3x10</Text>
      <Text>Sumo Squats 3x10</Text>
      <Text>Leg Press 3x10</Text>
      <Button onPress={gotoLegExercise} title="Home"></Button>
      <StatusBar style="auto" />
    </View>
  )
}

function ArmExerciseScreen({ navigation }) {
  let gotoArmExercise = useCallback(() => {
    navigation.push("ArmExercise")
  })
  return(
    <View style={styles.container}>
      <Text>Arm Exercises <br></br> Let's get started!</Text>
      <Text>Bicep Curl 3x10</Text>
      <Text>Skull Crushers 3x10</Text>
      <Text>Shoulder Press 3x10</Text>
      <Button onPress={gotoArmExercise} title="Home"></Button>
      <StatusBar style="auto" />
    </View>
  )
}

function HomeScreen({ navigation }) {
  let gotoLegExercise = useCallback(() => {
    navigation.navigate("LegExercise")
  })
  return (
    <View style={styles.container}>
      <Text>Welcome to your personal fitness tracker! <br></br> Choose the desired area of focus.</Text>
      <Button onPress={gotoLegExercise} title="Leg Exercise"></Button>
     
      <Button onPress={gotoLegExercise} title="Arm Exercise"></Button>
      
      <StatusBar style="auto" />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LegExercise" component={LegExerciseScreen} />
        <Stack.Screen name="ArmExercise" component={ArmExerciseScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},
});
