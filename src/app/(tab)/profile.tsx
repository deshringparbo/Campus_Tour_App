import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../Components/header';

const Profile = () => {
  return (
    <View>
      <View style={styles.header}></View>
      <Header />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: "#743f3fff",
  },
})

export default Profile