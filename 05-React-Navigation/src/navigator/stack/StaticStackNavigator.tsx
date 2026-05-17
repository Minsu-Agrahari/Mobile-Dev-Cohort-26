import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import HomeScreen from "../../screens/HomeScreen";
import DetailScreens from "../../screens/DetailScreens";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator({
  // Screens
  screens: {
    Home: HomeScreen,
    Details: DetailScreens,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function staticStackNavigator() {
    return <Navigation/>
}
