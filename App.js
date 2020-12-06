import React from "react";
import Inicio from "./src/screens/Inicio";
import Telefono from "./src/screens/Telefono";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Telefono" 
          component={Telefono} 
          options={{
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#333',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}