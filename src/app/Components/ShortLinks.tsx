import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "lucide-react-native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";

const ShortLinks = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.boxes}>
      <Text style={styles.quick}>Quick Actions</Text>
      <View style={styles.underbox}>
        <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
          <View style={styles.linkbox}>
            {/* <FontAwesome size={28} name="camera" color="rgb(168, 180, 206)" /> */}
            <Ionicons name="camera-outline" size={28} color={"#fff"} />
            <Text style={styles.titlebox}>Camera</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.Link1}
          onPress={
            () => navigation.navigate("mapPage")
            //  Alert.alert("click me")
          }
        >
          <View style={styles.linkbox}>
            {/* <FontAwesome size={28} name="map-o" color="rgb(168, 180, 206)" /> */}
            <Ionicons name="map-outline" size={28} color={"#fff"} />
            <Text style={styles.titlebox}>Map</Text>
          </View>
        </Pressable>
        <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
          <View style={styles.linkbox}>
            {/* <FontAwesome size={28} name="home" color="rgb(168, 180, 206)" /> */}
            <Ionicons name="scan" size={28} color={"#fff"} />
            <Text style={styles.titlebox}>Scan</Text>
          </View>
        </Pressable>
        <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
          <View style={styles.linkbox}>
            {/* <FontAwesome size={28} name="home" color="rgb(168, 180, 206)" /> */}
            <Camera size={28} strokeWidth={2} color={"#fff"} />
            <Text style={styles.titlebox}>Camera</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxes: {
    width: "100%",
    backgroundColor: "#000000",
  },
  quick: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: "5%",
    marginBottom: "3%",
  },
  underbox: {
    // height: 130,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#000000",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Link1: {
    height: 80,
    width: 80,
    borderRadius: 15,
    backgroundColor: "#192930",
    color: "red",
  },
  linkbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  titlebox: {
    fontWeight: "bold",
    fontSize: 8,
    color: "white",
  },
});

export default ShortLinks;
