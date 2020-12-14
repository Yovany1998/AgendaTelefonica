import React from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src/screens/Start";
import { NumbersContextProvider } from "./src/context/NumbersContext";
import ListContact from "./src/screens/ListContact";
import AddContact from "./src/screens/AddContact";
import ModifyContact from "./src/screens/ ModifyContact";



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
          <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} />
         
            <Stack.Screen name="VerModificar" component={ListContact} />
            <Stack.Screen name="AddContact" component={AddContact} />
            <Stack.Screen name="numberModify" component={ModifyContact} />
          </Stack.Navigator>
        </NavigationContainer>
      </NumbersContextProvider>
    </View>
  );
}
