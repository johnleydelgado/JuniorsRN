import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import LoginScreen from "./src/Screens/LoginScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="SignUp"
          options={{ headerTitle: "", headerBackTitle: "Back" }}
        />
      </Stack.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen name="DASHBOARD" />
        <Stack.Screen name="HOME" />
        <Stack.Screen name="PROFILE" />

      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
