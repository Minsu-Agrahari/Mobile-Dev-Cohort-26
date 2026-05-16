import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button screen={"Details"}>Go To Details Screen</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
