import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Components/header';
import HeroBox from '../Components/HeroBox';
import Placeto from '../Components/Placeto';
import ShortLinks from '../Components/ShortLinks';
import Welcome from '../Components/welcome';
import AiBoxHome from '../Components/AiBoxHome';

const TabHome = () => {
  return (
    <>
      <View style={styles.header}></View>
      <Header />
      <ScrollView style={styles.fullscreen}
        decelerationRate="normal" bounces={true}
      >
        <Welcome />
        {/* <HeroBox /> */}
        <AiBoxHome />
        <ShortLinks />
        {/* <HeroBox2 /> */}
        {/* <Map height={400} width={'100%'} /> */}
        <Placeto />
      </ScrollView >
    </>
  )
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "#121212",
  },

})

export default TabHome;