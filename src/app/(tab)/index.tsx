import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Components/header';
import HeroBox from '../Components/HeroBox';
import HeroBox2 from '../Components/HeroBox2';
import Placeto from '../Components/Placeto';
import Welcome from '../Components/welcome';

const TabHome = () => {
  return (
    <>
      <View style={styles.header}></View>
      <Header />
      <ScrollView style={styles.fullscreen}
        decelerationRate="normal" bounces={true}
      >
        <Welcome />
        <HeroBox />
        <HeroBox2 />
        {/* <Map height={400} width={'100%'} /> */}
        <Placeto />
      </ScrollView >
    </>
  )
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: "#eaf8fbff",
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "#743f3fff",
  },

})

export default TabHome;