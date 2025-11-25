import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const AppLogo = () => {
    return (
        <View>
            <View style={styles.logoapp}>
                <ImageBackground
                    style={styles.app}

                    source={require('../../assets/images/icon.png')}
                >
                </ImageBackground>
                <View>
                    <Text style={styles.textbro}>SITMap</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoapp: {
        height: 200,
        width: '100%',
        backgroundColor: "#eaf8fbff",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    app: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    ImageBackground: {
        borderRadius: 50,
    },
    textbro: {
        paddingTop: 20,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
})

export default AppLogo