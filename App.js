import React from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NumbersContextProvider } from "./src/context/NumbersContext";
import NumbersListScreen from "./src/screens/NumbersListScreen";
import Telefono from "./src/screens/Telefono";
import NumberModifyScreen from "./src/screens/NumberModifyScreen";

const Stack = createStackNavigator();

export default function App() {
  // Prevenir que la pantalla de splash se oculte
  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  // Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();

  return (
    <View style={{ flex: 1 }}>
      <NumbersContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="numbersList">
            <Stack.Screen name="numbersList" component={NumbersListScreen} />
            <Stack.Screen name="numberCreate" component={Telefono} />
            <Stack.Screen name="numberModify" component={NumberModifyScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NumbersContextProvider>
    </View>
  );
}
