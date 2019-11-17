import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Discover = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Discover</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24
  }
});

export default Discover;
