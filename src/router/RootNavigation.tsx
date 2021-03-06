import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "pages/home";
import ViewProfile from "pages/view-profile";

import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"HomePage"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
    </Stack.Navigator>
  );
}
