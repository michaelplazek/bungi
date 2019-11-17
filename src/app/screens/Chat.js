
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Chat = () => (
    <View style={styles.container}>
      <Text style={styles.text}>Chat</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  }
});

export default Chat;
