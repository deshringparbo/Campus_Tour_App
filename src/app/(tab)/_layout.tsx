import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from "expo-blur";
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        //backgroundColor: "#000000",
        //borderTopColor:'#000000',
        position: "absolute",
        backgroundColor: "transparent",
        borderTopWidth: 0,
        height: 60,
        marginHorizontal: 26,
        marginBottom: 20,
        borderRadius: 70,

        //ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 50,

        // Android shadow
        elevation: 20,
      },

      tabBarBackground: () => (
        <View style={styles.blurWrapper}>

          <BlurView
            intensity={60}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
        </View>
      ),
    }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
      <Tabs.Screen name="chat" options={{ title: "ChatBot", tabBarIcon: ({ color }) => <FontAwesome size={28} name="wechat" color={color} /> }} />
      <Tabs.Screen name="mapPage" options={{ title: "Map", tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="map-marked" color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Setting", tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} /> }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  blurWrapper: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden", // THIS clips the blur
  },
});

export default TabLayout;