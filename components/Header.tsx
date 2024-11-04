//
// 공통적으로 쓰이는 header모아놓은 컴포넌트
//
import React from "react";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { colors } from "@/styles/globalColors";

const LOGO = require("@/assets/images/crayon.png");

interface BasicHeaderProps {
  back?: boolean;
  backPress?: () => void;
}

//기본적인 헤더
export const BasicHeader = ({ back, backPress }: BasicHeaderProps) => {
  return (
    <View style={[styles.container, {justifyContent: back? 'space-between' : 'center'}]}>
      {back && (
        <TouchableOpacity onPress={backPress}>
          <MaterialCommunityIcons name="backburger" size={50} color="black" />
        </TouchableOpacity>
      )}
      <Image source={LOGO} style={styles.image} />
      {back && <View style={{ width: 50 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: colors.beige,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  image: {
    width: 65,
    height: 70,
    resizeMode: "contain",
  },
});
