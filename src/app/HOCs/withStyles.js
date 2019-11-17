import React from 'react';
import { StyleSheet } from "react-native";

/**
 * withStyles takes a style object, creates React Native StyleSheet, and
 * passes it into the wrapped component as the styles prop
 * @param styles
 * @returns {function(*): function(*): *}
 */
export default withStyles = styles => Component => {
  const styleSheet = StyleSheet.create(styles);
  return props => {
    return <Component {...props} styles={styleSheet} />;
  };
};