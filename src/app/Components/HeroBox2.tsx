import React from 'react'
import { StyleSheet, View } from 'react-native'

const HeroBox2 = () => {
    return (
        <View style={styles.hero1}>
            <View style={styles.hero2}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hero1: {
        // height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eaf8fbff",
    },
    hero2: {
        // height: 190,
        width: '90%',
        borderRadius: 10,
        borderBlockColor: '#494949ff',
        borderWidth: 0.3,
        backgroundColor: "#eaf8fbff",
        shadowColor: "#949494ff",
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        paddingBottom:20,
        marginBottom:30,
        marginTop:30,
    },
})

export default HeroBox2;