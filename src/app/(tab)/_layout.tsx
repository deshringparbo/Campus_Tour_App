import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'


const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />  }} />
      <Tabs.Screen name="chat" options={{ title: "ChatBot", tabBarIcon: ({ color }) => <FontAwesome size={28} name="wechat" color={color} /> }} />
      <Tabs.Screen name="mapPage" options={{ title: "Map", tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="map-marked" color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Setting", tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} /> }} />
    </Tabs>
  )
}

export default TabLayout;