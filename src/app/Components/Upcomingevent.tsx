import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Upcomingevent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>Upcomingevent</Text>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingBottom: 20,
    backgroundColor: "red",
  },
  container1: {
    paddingLeft: "5%",
  },
});

export default Upcomingevent;
