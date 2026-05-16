import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreens from "./src/screens/DetailScreens";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator({
  // Screens
  screens: {
    Home: HomeScreen,
    Details: DetailScreens,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return <Navigation />;
}
