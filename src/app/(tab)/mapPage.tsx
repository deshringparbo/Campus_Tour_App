import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../Components/header";
import Map from "../Components/Map";
import Headeroftop from "../Components/Headeroftop";

const MapPage = () => {
  return (
    <View style={styles.container1}>
      <Headeroftop />
      <Header />
      <ScrollView
        decelerationRate="normal"
        bounces={true}
        style={{ backgroundColor: "#121212" }}
      >
        <Map height={750} width="100%" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
});

export default MapPage;
