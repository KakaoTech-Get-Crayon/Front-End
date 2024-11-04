//
// Login 화면
//

import React, { useState } from "react";

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { router, Stack } from "expo-router";

import { RootView } from "@/components/Container";
import { BasicHeader } from "@/components/Header";
import { BasicTextInput } from "@/components/TextInput";

import { colors } from "@/styles/globalColors";
import { fonts } from "@/styles/globalFonts";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  return (
    <RootView viewStyle={styles.container}>
      <Stack.Screen
        options={{
          header: () => <BasicHeader back backPress={() => router.back()} />,
        }}
      />

      <Text style={styles.title}>모멘토라</Text>
      <BasicTextInput
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        placeholder="전화번호"
        inputStyle={styles.textInput}
      />
      <BasicTextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="비밀번호"
        inputStyle={styles.textInput}
        password
      />

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/main")}>
        <Text style={styles.text}>로그인</Text>
      </TouchableOpacity>
    </RootView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 50,
    marginBottom: 60,

    includeFontPadding: false,
    textAlignVertical: "center",
  },
  btn: {
    width: 320,
    height: 67,
    backgroundColor: colors.beige,
    borderRadius: 100,
    marginBottom: 18,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,

    marginTop: 60,
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: 30,

    includeFontPadding: false,
    textAlignVertical: "center",
  },
  textInput: {
    fontFamily: fonts.regular,
    fontSize: 20,

    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
