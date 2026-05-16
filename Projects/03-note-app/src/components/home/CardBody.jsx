import { StyleSheet, View } from "react-native";

const CardBody = ({ Title, Body, Date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}></View>
            
            <View style={styles.body}></View>
        </View>
    );
};

export default CardBody;

const styles = StyleSheet.create({
    container: {},
    title: {},
    body: {},
});
