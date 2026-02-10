import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColLogo from "./ColLogo";

const Header = () => {
  return (
    <View style={styles.topbar}>
      <View style={styles.name}>
        <Text style={styles.headname}>
          Scholar's Institute of Technology and Management
        </Text>
        <Text style={styles.motoname}>
          ...Brings out the scholar's in you...
        </Text>
      </View>
      <View>
        <ColLogo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: 80,
    width: "100%",
    backgroundColor: "#183062ff",
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
  },
  name: {
    width: "80%",
  },
  headname: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  motoname: {
    color: "white",
    fontFamily: "ariel",
    fontSize: 10,
  },
});

export default Header;
