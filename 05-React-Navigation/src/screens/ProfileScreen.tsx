import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const ProfileScreen = () => {
  // hooks
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>ProfileScreen</Text>

      <Button onPress={() => navigation.popToTop()}>Go To to Screen</Button>

      <Button onPress={() => navigation.popTo("Details")}>
        Go To Detail Page
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
