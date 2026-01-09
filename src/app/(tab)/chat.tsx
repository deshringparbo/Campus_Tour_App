import { ResizeMode, Video } from "expo-av";
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../Components/header';

const ChatBot = () => {
  return (
    <View>
      <ScrollView
        decelerationRate="normal" bounces={true}
      >
        <View style={styles.header}></View>
        <Header />
        <ScrollView
          decelerationRate="normal" bounces={true}
        >
          <View style={styles.chatboxx}>
            <Video
              source={require("../../assets/images/backvideo.mp4")}
              style={styles.backvideo}
              resizeMode={ResizeMode.COVER}
              shouldPlay
              isLooping
              isMuted
            />
            <Text style={styles.chatbo}>ChatBot Coming Soon</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "#121212",
  },
  chatboxx: {
    // height: 600,
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden'
  },
  chatbo: {
    color: "white",
    height: 800,
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
    animationDuration: '1s',
  },
})

export default ChatBot