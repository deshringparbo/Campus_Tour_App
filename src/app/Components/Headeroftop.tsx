import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Headeroftop = () => {
  return (
    <View>
      <View style={styles.header}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: "#121212",
  },
});

export default Headeroftop