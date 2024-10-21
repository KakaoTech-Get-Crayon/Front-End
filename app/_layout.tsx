//
//global layout style
//

import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { Stack } from "expo-router";

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 45 : 0,
    paddingBottom: Platform.OS == "android" ? 15 : 0,
  },
});
