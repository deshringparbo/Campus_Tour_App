import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeroBox2 = () => {
  return (
    <View style={styles.hero1}>
      <Text style={styles.herotext}>Visit here</Text>
      <View style={styles.hero2}>
        <View style={styles.hero3}>
          <View style={styles.box12}></View>
          <View style={styles.box12}></View>
          <View style={styles.box12}></View>
          <View style={styles.box12}></View>
          <View style={styles.box12}></View>
          <View style={styles.box12}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero1: {
    // height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaf8fbff",
  },
  hero2: {
    // height: 190,
    width: "90%",
    borderRadius: 10,
    borderBlockColor: "#121212",
    borderWidth: 0.3,
    backgroundColor: "#eaf8fbff",
    shadowColor: "#949494ff",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingBottom: 20,
    marginBottom: 30,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  herotext: {
    fontSize: 20,
    color: "black",
  },
  hero3: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box12: {
    height: 70,
    width: 70,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 50,
  },
});

export default HeroBox2;
