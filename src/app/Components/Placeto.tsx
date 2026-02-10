import React from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Library from "../Pages/Library";

const Placeto = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.viewtext}>Featured Location</Text>

        <View style={styles.contentbox}>
          <View style={styles.contentbody}>
            <Pressable
              style={styles.boxes}
              onPress={() => Alert.alert("clicked me already")}
            >
              <View style={styles.library}>
                <Image
                  source={require("../../assets/images/library.jpeg")}
                  style={styles.images}
                ></Image>
                <View style={styles.buttonclickon}>
                  <Text style={styles.placename}>Library</Text>
                  <Text style={styles.placenameaddress}>
                    2nd floor A-Block Building
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert("clicked you")}
                  >
                    <Text style={styles.buttonlibrary}> Start A Toour</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.boxes}
              onPress={() => Alert.alert("click here")}
            >
              <View style={styles.library}>
                <Image
                  source={require("../../assets/images/library.jpeg")}
                  style={styles.images}
                ></Image>
                <View style={styles.buttonclickon}>
                  <Text style={styles.placename}>Library</Text>
                  <Text style={styles.placenameaddress}>
                    2nd floor A-Block Building
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert("clicked you")}
                  >
                    <Text style={styles.buttonlibrary}> Start A Toour</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.boxes}
              onPress={() => Alert.alert("click me")}
            >
              <View style={styles.library}>
                <Image
                  source={require("../../assets/images/library.jpeg")}
                  style={styles.images}
                ></Image>
                <View style={styles.buttonclickon}>
                  <Text style={styles.placename}>Boy's Hostel</Text>
                  <Text style={styles.placenameaddress}>
                    2nd floor A-Block Building
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert("clicked you")}
                  >
                    <Text style={styles.buttonlibrary}> Start A Toour</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  view: {
    width: "100%",
    paddingTop: "5%",
    paddingBottom: "20%",
  },
  viewtext: {
    fontWeight: "bold",
    color: "white",
    marginLeft: "5%",
    fontSize: 18,
  },
  contentbox: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: "5%",
  },
  contentbody: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
  boxes: {
    // height:10,  // need to remove
    width: "100%",
    backgroundColor: "#192930",
    borderRadius: 20,
    marginBottom: 20,
  },

  library: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  images: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  placename: {
    color: "white",
    paddingTop: 5,
    paddingBottom: 1,
    marginLeft: "5%",
    //textAlign: "center",
    fontSize: 28,
  },
  placenameaddress: {
    color: "white",
    marginLeft: "5%",
    //textAlign: "center",
    fontSize: 10,
  },
  background: {
    width: "100%",
    height: 120,
    // borderTopLeftRadius: 20,
    overflow: "hidden",
  },

  button: {
    height: 40,
    width: "100%",
    marginTop: "2%",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: "2%",
  },
  buttonlibrary: {
    color: "#183062ff",
    fontWeight: "bold",
  },
  buttonclickon: {
    width: "100%",
    //marginLeft: '5%',
    // marginTop: '5%',
    //backgroundColor: 'red',
  },
});

export default Placeto;
