import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../Components/header';
import Map from '../Components/Map';


const MapPage = () => {
  return (
    <View>
      <View style={styles.header}></View>
      <Header />
      <ScrollView decelerationRate="normal" bounces={true}
      style={{ backgroundColor: "#eaf8fbff"}}
      >
        <Map height={650} width='100%' />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: "#743f3fff",
  },
  // mapstyle:{
  //   flex:1,
  // },
})

export default MapPage;