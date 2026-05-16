import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HomeHeader = ({ isDark, setIsDark, iconName }) => {
    return (
        <View style={styles.container}>
            <Text
                style={[
                    styles.TitleText,
                    {
                        color: isDark ? "#D7B4FF" : "#5B21B6",
                    },
                ]}
            >
                My Notes
            </Text>

            <Pressable
                style={[
                    styles.ToggleContainer,
                    {
                        backgroundColor: isDark ? "#0B0B0F" : "#FFFFFF",
                    },
                ]}
                onPress={() => setIsDark(!isDark)}
            >
                <Ionicons
                    name={iconName}
                    size={24}
                    color={isDark ? "#D7B4FF" : "#5B21B6"}
                />
            </Pressable>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 22,
        paddingVertical: 16,
        backgroundColor: "#0B0B0F",
    },
    TitleText: {
        fontSize: 34,
        fontWeight: "700",
        letterSpacing: 0.5,
        color: "#D7B4FF",
    },
    ToggleContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});
