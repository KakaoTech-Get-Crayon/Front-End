//
// 스토리 화면
//
import React from "react";

import { StyleSheet, Text } from "react-native";
import { Stack, router } from "expo-router";

import { RootView } from "@/components/Container";

const Story = () => {
  return (
    <RootView viewStyle={styles.container}>
      <Text>스토리 화면</Text>
    </RootView>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
