import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

const AboutSitm = () => {
    return (
        <View style={styles.box1} >
            <View style={styles.innerBox}>
                <Text style={styles.headText}>About the College</Text>
                <Text style={styles.textBoxes}>Scholar’s Institute of Technology and Management (SITM), Guwahati, is an AICTE-approved institute and has been affiliated with ASTU. Established in 2010, the Institute offers undergraduate programs in engineering, management, and computer applications. The college has a friendly learning environment; the staff members are highly experienced, the laboratories are well-equipped, and the campus is calm. It aims to equip students with strong technical skills and industry readiness.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        // height: 230,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eaf8fbff",
        paddingBottom:30,
    },
    innerBox: {
        // height: 200,
        width: '80%',
        borderRadius: 10,
        borderBlockColor: '#494949ff',
        backgroundColor: "#eaf8fbff",
    },
    textBoxes: {
        textAlign: 'justify',
        fontSize:18,
    },
    headText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },


})

export default AboutSitm