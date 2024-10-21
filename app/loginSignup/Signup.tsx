//
// Signup 화면
//

import React from "react";

import { StyleSheet, View, Button } from "react-native";
import { router, Stack } from "expo-router";

import { RootView } from "@/components/Container";


const SignupScreen = () => {

    return (
        <RootView viewStyle={styles.container}>
            {/* <Stack.Screen options={{ header: () => <BasicHeader left="back" leftPress={() => router.back()} title=" " /> }} /> */}

            <Button title="회원가입"onPress={() => router.push('/main')} />
        </RootView>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})