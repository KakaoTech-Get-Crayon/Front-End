//
// LoginSignup 부분의 메인 - Login, Sigunup 화면으로 이동 가능
//
import React from "react";

import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { Stack, router } from "expo-router";

import { RootView } from "@/components/Container";

import { colors } from "@/styles/globalColors";
import { fonts } from "@/styles/globalFonts";

const LOGO = require("@/assets/images/crayon.png");

const LoginSignup = () => {
  return (
    <RootView viewStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.title}>모멘토라</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/loginSignup/Login")}>
        <Text style={styles.text}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => router.push("/loginSignup/Signup")}>
        <Text style={styles.text}>회원가입</Text>
      </TouchableOpacity>
    </RootView>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop:330,
  },
  title:{ 
    fontFamily:fonts.bold,
    fontSize: 50,
    marginBottom: 140,

    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  btn:{
    width: 320,
    height: 67,
    backgroundColor: colors.beige,
    borderRadius:100,
    marginBottom:18,

    alignItems:'center',
    justifyContent:'center',

    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  text:{
    fontFamily:fonts.bold,
    fontSize: 30,

    includeFontPadding: false,
    textAlignVertical: 'center',
  },

});
