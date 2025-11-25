
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AboutSitm from "../element/AboutSitm";
import AppLogo from '../element/AppLogo';
import WebLinks from '../element/WebLinks';

const Profile = () => {  // its change to about section
  return (
    <>
      <View>
        <View style={styles.header}></View>
      </View>
      <ScrollView style={{backgroundColor: "#eaf8fbff"}}>
        <AppLogo />
        <AboutSitm />
        <WebLinks />
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "#743f3fff",
  },
})

export default Profile;