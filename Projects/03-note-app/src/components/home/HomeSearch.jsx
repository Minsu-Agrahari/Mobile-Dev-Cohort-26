import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput
                style={[styles.serchbar]}
                placeholder="Search ... "
                placeholderTextColor="#7C6F93"
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111118",
        borderWidth: 1,
        borderColor: "#3B2F52",
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 14,
        flexDirection: "row",
        alignItem: "center",
        gap: 10,
    },
    serchbar: {
        flex: 1,
        fontSize: 16,
        color: "#E9D5FF",
        paddingVertical: 0,
    },
});
