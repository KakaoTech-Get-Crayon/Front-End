//
// Signup 화면
//

import React, { useState } from "react";

import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { router, Stack } from "expo-router";
import Checkbox from "expo-checkbox";

import { RootView } from "@/components/Container";
import { BasicHeader } from "@/components/Header";
import { BasicTextInput } from "@/components/TextInput";

import { colors } from "@/styles/globalColors";
import { fonts } from "@/styles/globalFonts";

const SignupScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isFamily, setIsFamily] = useState<boolean>(false);
  const [familyId, setFamilyId] = useState<string>("");

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
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="이름"
        inputStyle={styles.textInput}
      />
      <BasicTextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="비밀번호"
        inputStyle={styles.textInput}
        password
      />

      <View style={styles.family}>
        <Text style={styles.textInput}>가족인가요?</Text>
        <Checkbox
          style={styles.checkbox}
          value={isFamily}
          onValueChange={setIsFamily}
          color={isFamily ? "#4630EB" : undefined}
        />
      </View>

      {isFamily ? (
        <BasicTextInput
          value={familyId}
          onChangeText={(text) => setFamilyId(text)}
          placeholder="가족 ID"
          inputStyle={styles.textInput}
        />
      ) : (
        <View style={{ height: 70 }} />
      )}

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/main")}>
        <Text style={styles.text}>회원가입</Text>
      </TouchableOpacity>
    </RootView>
  );
};

export default SignupScreen;

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

    marginTop: 40,
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
  family: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  checkbox:{
    width: 24,
    height: 24,
    marginHorizontal:8
  }
});
