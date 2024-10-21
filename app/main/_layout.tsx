//
// 홈화면 layout
//
import { Image, StyleSheet } from "react-native";
import { Tabs } from "expo-router";

import { BasicHeader } from "@/components/Header";

import { colors } from "@/styles/globalColors";

const home = require("@/assets/images/home.png");
const home_focused = require("@/assets/images/home_focused.png");
const story = require("@/assets/images/story.png");
const story_focused = require("@/assets/images/story_focused.png");
const user = require("@/assets/images/user.png");
const user_focused = require("@/assets/images/user_focused.png");

export default () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ header: () => <BasicHeader />, tabBarShowLabel: false , tabBarStyle:{backgroundColor:colors.beige}}}
    >
      <Tabs.Screen
        name="story"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? story_focused : story}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? home_focused : home} style={styles.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? user_focused : user} style={styles.icon} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    // marginTop:15
  },
});
