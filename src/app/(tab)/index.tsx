import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Components/header';
import Map from '../Components/Map';
import Placeto from '../Components/Placeto';
import Welcome from '../Components/welcome';

const TabHome = () => {
  return (
    <>
      <View style={styles.header}></View>
      <Header />
      <ScrollView style={styles.fullscreen}
        decelerationRate="normal" bounces={true}>
        <Welcome />
        <Map height={400} width={'100%'} />
        <Placeto />
      </ScrollView >
    </>
  )
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: "#743f3fff",
  },

})

export default TabHome;