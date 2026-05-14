import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.card}>
                <StatusBar style="dark" />
                <Text style={styles.title}>HomeScreen</Text>
                <Text style={styles.subTitle}>Hello World !</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 20,
        margin: 16,

        // Android
        elevation: 4,

        // IOS
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    subTitle: {
        fontSize: 14,
        color: "#888",
        marginTop: 4,
    },
});
