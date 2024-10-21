import React, { useEffect } from "react";

import { View, LogBox } from "react-native";

import { Redirect } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GowunBatang_Regular: require("@/assets/fonts/GowunBatang-Regular.ttf"),
    GowunBatang_Bold: require("@/assets/fonts/GowunBatang-Bold.ttf"),
  });

  LogBox.ignoreAllLogs();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Redirect href="/loginSignup" />;
}
