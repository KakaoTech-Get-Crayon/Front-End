//
// 홈화면 메인
//
import React from "react";

import { StyleSheet, Text } from "react-native";
import { Stack, router } from "expo-router";

import { RootView } from "@/components/Container";

const Home = () => {
  return (
    <RootView viewStyle={styles.container}>
      <Text>홈화면</Text>
    </RootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
