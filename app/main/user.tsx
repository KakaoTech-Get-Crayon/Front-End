//
// 유저 화면
//
import React from "react";

import { StyleSheet, Text } from "react-native";
import { Stack, router } from "expo-router";

import { RootView } from "@/components/Container";

const User = () => {
  return (
    <RootView viewStyle={styles.container}>
      <Text>유저 화면</Text>
    </RootView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
