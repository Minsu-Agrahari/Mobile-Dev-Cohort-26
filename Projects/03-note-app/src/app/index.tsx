import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../components/home/HomeHeader";
import HomeSeach from "../components/home/HomeSearch";
import CardBody from "../components/home/CardBody";

const HomeScreen = () => {
    const currMode = useColorScheme() === "dark";
    const [isDark, setIsDark] = useState(currMode);
    const iconName = isDark ? "toggle-sharp" : "toggle-outline";

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: isDark ? "#0B0B0F" : "#FFFFFF",
                },
            ]}
        >
            <StatusBar style="auto" animated />

            <HomeHeader
                isDark={isDark}
                setIsDark={setIsDark}
                iconName={iconName}
            />

            <HomeSeach />

            <CardBody />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
