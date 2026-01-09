import { AntDesign, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React from 'react';
import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

const WebLinks = () => {
  return (
    <View style={styles.headbox}>
      <View style={styles.clickedd}>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><FontAwesome size={20} name="cog" color={'black'} />  Settings</Text>
        </Pressable>
        {/* <Pressable onPress={() => Alert.alert("clicked me")}>
                  <Text style={styles.clickedText}><FontAwesome size={20} name="cog" color={'black'} />  About SITM</Text>
                </Pressable> */}
        <Pressable onPress={() => Linking.openURL("https://sitmguwahati.ac.in/")}>
          <Text style={styles.clickedText}><AntDesign size={20} name="link" color={'black'} />  CollegeWebsite</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL("https://instagram.com/sitmguwahati")}>
          <Text style={styles.clickedText}><FontAwesome size={20} name="instagram" color={'black'} />  Instagram</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL("https://www.youtube.com/@mediasitmguwahati5087")
        }>
          <Text style={styles.clickedText}><FontAwesome size={20} name="youtube-play" color={'black'} />  YouTube</Text>
        </Pressable>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><SimpleLineIcons size={20} name="social-facebook" color={'black'} />  Facebook</Text>
        </Pressable>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><Feather size={20} name="info" color={'black'} />  Help & Support</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headbox: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eaf8fbff",
    paddingBottom:70,
  },
  clickedd: {
    //flex: 1,
    width: '80%',
    backgroundColor: '#eaf8fbff',
  },
  clickedText: {
    fontSize: 18,
    color: "blue",
    paddingTop: 16,
  },

})

export default WebLinks