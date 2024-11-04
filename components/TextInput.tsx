//
//공통적으로 쓰이는 textInput
//
import React, { useState } from "react";

import { TextInput, StyleSheet, View, Text, TextStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { colors } from "@/styles/globalColors";
import { fonts } from "@/styles/globalFonts";


interface BasicTextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    width?: number;
    inputStyle?: TextStyle;
    password?: boolean;
    placeholder?:string;
}

//기본 TextInput
export const BasicTextInput = (props: BasicTextInputProps) => {
    const { width, inputStyle, password, ...restProps } = props

    const [secureMode, setSecureMode] = useState(true)

    return (
        <View style={[styles.input, { width, flexDirection: 'row' }]}>
            <TextInput
                style={[{ flex: 1 }, inputStyle]}
                secureTextEntry={password && secureMode ? true : false}
                {...restProps}
            />
            {password &&
                (secureMode
                    ? <Ionicons name="eye-off" size={32} color={colors.borderGrey} onPress={() => setSecureMode(!secureMode)} />
                    : <Ionicons name="eye" size={32} color={colors.borderGrey} onPress={() => setSecureMode(!secureMode)} />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 12,

        borderRadius: 10,
        marginVertical: 6,

        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.textGrey,
    },
});