import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#1c1c1e",
            }}
        >
            <Text
                style={{
                    color: "#fff",
                    fontSize: 18,
                    padding: 16,
                }}
            >
                Header (bleeds under notch!)
            </Text>

            <Text style={{ color: "#aaa", padding: 16 }}>
                This content might be hidden behind the status bar in dark mode.
            </Text>
        </View>
    );
}

function SafeScreen() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#1c1c1e",
            }}
        >
            <Text
                style={{
                    color: "#fff",
                    fontSize: 18,
                    padding: 16,
                }}
            >
                Header (safely below notch ... 🌹)
            </Text>

            <Text style={{ color: "#aaa", padding: 16 }}>
                This content respects the safe area on all devices. 🤗
            </Text>
        </SafeAreaView>
    );
}
const index = () => {
    return (
        <>
            <SafeScreen />
            {/* <UnsafeScreen /> */}
        </>
    );
};

export default index;

const styles = StyleSheet.create({});
