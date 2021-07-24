import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Modal from "../Components/modal";

const index = ({ navigation }) => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const LoginHandler = () => {
    let user = "test";
    let password = "admin";
    if (
      userRef.current.state.value == user &&
      passwordRef.current.state.value == password
    ) {
      setVisibility(true);
      return;
    }
    setVisibility2(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={visible}
        title="LOGIN SUCCESS !"
        setVisibility={setVisibility}
      />
      <Modal
        visible={visible2}
        title="Wrong Credential !"
        setVisibility={setVisibility2}
      />
      <Image
        source={{ uri: "https://mdrecords.org/images/MDR.png" }}
        style={{ height: 200, width: 300 }}
        resizeMode="center"
      />
      <TextInput
        placeholder="username"
        style={{ margin: 8 }}
        ref={userRef}
        mode="outlined"
      />
      <TextInput
        placeholder="password"
        style={{ margin: 8 }}
        ref={passwordRef}
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
        onPress={LoginHandler}
      >
        LOGIN
      </Button>

      <Button
        style={{
          backgroundColor: "cyan",
          marginTop: 16,
          borderRadius: 8,
          height: 60,
          justifyContent: "center",
        }}
        labelStyle={{ color: "black" }}
        onPress={() => navigation.navigate("SignUp")}
      >
        SIGNUP
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
});

export default index;
