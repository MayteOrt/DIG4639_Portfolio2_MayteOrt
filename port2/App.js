import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Stack = createNativeStackNavigator();

function LegExerciseScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text  >Leg Exercises <br></br> Let's get started!</Text>
      <Text>Elevated Goblet Squats 3x10</Text>
      <Text>Sumo Squats 3x10</Text>
      <Text>Leg Press 3x10</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}

function ArmExerciseScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Arm Exercises <br></br> Let's get started!</Text>
      <Text>Bicep Curl 3x10</Text>
      <Text>Skull Crushers 3x10</Text>
      <Text>Shoulder Press 3x10</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text >Welcome to your personal fitness tracker! </Text>
      <Text>Choose the desired area of focus.</Text>
      <Button title="Leg Exercises" onPress={()=> navigation.navigate('LegExercise')} ></Button>
      <Button title="Arm Exercises" onPress={()=> navigation.navigate('ArmExercise')} ></Button>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
  },
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  Text: {
    fontSize: 16,
    lineHeight: 21,
    alignContent: 'center',
},
});
