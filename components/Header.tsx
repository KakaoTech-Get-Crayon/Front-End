//
// 공통적으로 쓰이는 header모아놓은 컴포넌트
//
import React from "react";

import { StyleSheet, View, Image } from "react-native";

import { colors } from "@/styles/globalColors";

const LOGO = require("@/assets/images/crayon.png");

//기본적인 헤더
export const BasicHeader = () => {

    return (
        <View style={styles.container}>
            <Image source={LOGO} style={styles.image} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: colors.beige,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width:65,
        height:70,
        resizeMode:'contain'
    }
});