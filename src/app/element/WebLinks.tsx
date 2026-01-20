import { AntDesign, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React from 'react';
import { Alert, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

const WebLinks = () => {
  return (
    <View style={styles.headbox}>
      <View style={styles.clickedd}>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><FontAwesome size={20} name="cog" color={'white'} />  Settings</Text>
        </Pressable>
        {/* <Pressable onPress={() => Alert.alert("clicked me")}>
                  <Text style={styles.clickedText}><FontAwesome size={20} name="cog" color={'black'} />  About SITM</Text>
                </Pressable> */}
        <Pressable onPress={() => Linking.openURL("https://sitmguwahati.ac.in/")}>
          <Text style={styles.clickedText}><AntDesign size={20} name="link" color={'white'} />  CollegeWebsite</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL("https://instagram.com/sitmguwahati")}>
          <Text style={styles.clickedText}><FontAwesome size={20} name="instagram" color={'white'} />  Instagram</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL("https://www.youtube.com/@mediasitmguwahati5087")
        }>
          <Text style={styles.clickedText}><FontAwesome size={20} name="youtube-play" color={'white'} />  YouTube</Text>
        </Pressable>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><SimpleLineIcons size={20} name="social-facebook" color={'white'} />  Facebook</Text>
        </Pressable>
        <Pressable onPress={() => Alert.alert("clicked me")}>
          <Text style={styles.clickedText}><Feather size={20} name="info" color={'white'} />  Help & Support</Text>
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
    backgroundColor: "#121212",
    paddingBottom:70,
  },
  clickedd: {
    //flex: 1,
    width: '90%',
    borderRadius:20,
    paddingBottom:'5%',
    paddingLeft:'5%',
    backgroundColor: '#131313',
  },
  clickedText: {
    fontSize: 18,
    color: "white",
    paddingTop: 16,
  },

})

export default WebLinks