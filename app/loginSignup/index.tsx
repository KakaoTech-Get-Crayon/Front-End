//
// LoginSignup 부분의 메인 - Login, Sigunup 화면으로 이동 가능
//
import React from "react";

import { Image, StyleSheet, View, Button } from "react-native";
import { Stack, router } from "expo-router";

import { RootView } from "@/components/Container";

const LOGO = require("@/assets/images/crayon.png");

const LoginSignup = () => {
  return (
    <RootView viewStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={LOGO} style={styles.image} />

      <Button
        title="로그인"
        onPress={() => router.push("/loginSignup/Login")}
      />
      <Button
        title="회원가입"
        onPress={() => router.push("/loginSignup/Signup")}
      />
    </RootView>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // paddingTop: 339,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
