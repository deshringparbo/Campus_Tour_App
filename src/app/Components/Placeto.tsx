import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

const Placeto = () => {
    return (
        <>
            <View style={styles.view}>
                <Text style={styles.viewtext}>Featured Location</Text>

                <View style={styles.contentbox}>
                    <View style={styles.contentbody}>
                        <Pressable style={styles.boxes} onPress={() => Alert.alert("clicked me already")}>
                            <View>
                                <Text style={styles.placename}>Place name to be shown</Text>
                            </View>
                        </Pressable>
                        <Pressable style={styles.boxes} onPress={() => Alert.alert("click here")}>Library</Pressable>
                        <Pressable style={styles.boxes} onPress={() => Alert.alert("click me")}>Hostel</Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        width: "100%",
        paddingTop:"5%",

    },
    viewtext: {
        fontWeight: 'bold',
        color: 'white',
        marginLeft:"5%",
        fontSize:18,

    },
    contentbox: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        marginLeft:'5%',
    },
    contentbody: {
        width: "100%",
        flex: 1,
        flexDirection: 'column',
    },
    boxes: {
        height:10,  // need to remove
        width: '100%',
        backgroundColor: "pink",
        borderRadius:20,
        marginBottom:10,


    },
    placename: {
        color: "white",
        paddingTop: 20,
        textAlign: "center",
    },
    background: {
        width: '100%',
        height: 120,
        // borderTopLeftRadius: 20,
        overflow: 'hidden',

    },
})

export default Placeto