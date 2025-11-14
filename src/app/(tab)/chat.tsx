import { Video } from "expo-av";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/header';

const ChatBot = () => {
  return (
    <View>
      <View style={styles.header}></View>
      <Header />
      <View style={styles.chatboxx}>
        <Video
          source={require("../../assets/images/backvideo.mp4")}
          style={styles.backvideo}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />
        <Text style={styles.chatbo}>ChatBot Comming Soon</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: "#743f3fff",
  },
  chatboxx: {
    height: 900,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden'
  },
  chatbo: {
    color: "white",
    height: 100,
    width: '80%',
    alignContent: "center",
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  backvideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
})

export default ChatBot