//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import Icons from "@expo/vector-icons/Feather";
// create a component
const index = ({ visible, setVisibility, title }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Icons
            name="x"
            size={20}
            onPress={() => setVisibility(false)}
            color="white"
            style={{ alignSelf: "flex-end", margin: 8 }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{title}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  card: {
    height: 200,
    width: 200,
    borderRadius: 16,

    backgroundColor: "brown",
  },
});

//make this component available to the app
export default index;
