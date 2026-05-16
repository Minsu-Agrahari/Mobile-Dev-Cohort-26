import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";

const DetailScreens = () => {
  return (
    <View>
      <Text>DetailScreens</Text>
      <Button screen={"HomeScreen"}>Go To HomeScreen</Button>
    </View>
  );
};

export default DetailScreens;

const styles = StyleSheet.create({});
