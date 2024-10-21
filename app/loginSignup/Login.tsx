//
// Login 화면
//

import React from "react";

import { StyleSheet, View, Button } from "react-native";
import { router, Stack } from "expo-router";

import { RootView } from "@/components/Container";


const LoginScreen = () => {

    return (
        <RootView viewStyle={styles.container}>
            {/* <Stack.Screen options={{ header: () => <BasicHeader left="back" leftPress={() => router.back()} title=" " /> }} /> */}

            <Button title="로그인" onPress={() => router.push('/main')} />
        </RootView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})