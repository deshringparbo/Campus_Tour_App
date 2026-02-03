
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AboutSitm from "../element/AboutSitm";
import AppLogo from '../element/AppLogo';
import WebLinks from '../element/WebLinks';
import Headeroftop from '../Components/Headeroftop';

const Profile = () => { 
  return (
    <>
      <View style={{ backgroundColor: "#121212" }} >
        <Headeroftop />
      </View>
      <ScrollView style={{ backgroundColor: "#121212" }}>
        <AppLogo />
        <AboutSitm />
        <WebLinks />
      </ScrollView>

    </>
  )
}

export default Profile;