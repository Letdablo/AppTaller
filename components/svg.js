import React from "react";
import { View, StyleSheet } from "react-native";
import Coche from "./coche.svg";
export default class SvgCoche extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Coche></Coche>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
