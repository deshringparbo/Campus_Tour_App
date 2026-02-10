import React from "react";
import { StyleSheet, Text, View } from "react-native";

const welcome = () => {
  return (
    <View style={styles.welcomebox}>
      <Text style={styles.banner}>Your personalize tour is awaits.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomebox: {
    height: 150,
    width: "100%",
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: 50,
  },
  banner: {
    height: 100,
    width: "75%",
    textAlign: "center",
    fontSize: 28,
    color: "white",
    justifyContent: "center",
    borderRadius: 5,
    animationName: "myAnimation",
    animationDuration: "5s",
    animationIterationCount: "infinite",
  },
});
export default welcome;
