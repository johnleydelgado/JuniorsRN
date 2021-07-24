//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

// create a component
const index = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="email" style={{ margin: 8 }} mode="outlined" />
      <TextInput placeholder="username" style={{ margin: 8 }} mode="outlined" />
      <TextInput
        placeholder="password"
        style={{ margin: 8 }}
        secureTextEntry
        mode="outlined"
      />
      <TextInput
        placeholder="confirm password"
        style={{ margin: 8 }}
        secureTextEntry
        mode="outlined"
      />

      <Button
        style={{
          backgroundColor: "cyan",
          marginTop: 16,
          borderRadius: 8,
          height: 60,
          justifyContent: "center",
        }}
        labelStyle={{ color: "black" }}
        // onPress={LoginHandler}
      >
        SUBMIT
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingTop: 16,
  },
});

//make this component available to the app
export default index;
