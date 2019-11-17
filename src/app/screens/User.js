import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const User = () => (
  <View style={styles.container}>
    <Text style={styles.text}>User</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24
  }
});

export default User;
