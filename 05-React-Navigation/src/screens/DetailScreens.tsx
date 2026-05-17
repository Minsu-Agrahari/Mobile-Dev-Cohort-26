import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const DetailScreens = () => {
  // Hook
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>DetailScreens</Text>
      <Button onPress={()=>navigation.goBack()}>Go Back z</Button>
    </View>
  );
};

export default DetailScreens;

const styles = StyleSheet.create({});
