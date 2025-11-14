import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ColLogo = () => {
    return (
        <View style={styles.colLogo}>
            <Image
                source={require("../../assets/images/ColLogo.png")}
                style={styles.imageLogo}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    colLogo: {
        height: 60,
        width: 60,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 50,
    },
    imageLogo: {
        height: 55,
        width: 55,
    },
})

export default ColLogo