import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";


const App = () => {
  const Stack = createNativeStackNavigator();
  console.log('App.tsx');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Arokian'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
