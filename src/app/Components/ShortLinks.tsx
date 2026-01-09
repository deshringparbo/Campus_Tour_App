import { FontAwesome } from "@expo/vector-icons"
import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

const ShortLinks = () => {
    return (
        <View style={styles.boxes}>
            <Text style={styles.quick}>Quick Actions</Text>
            <View style={styles.underbox}>
                <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
                    <View style={styles.linkbox}><FontAwesome size={30} name="home" color="white" />
                        <Text style={styles.titlebox}>Home</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
                    <View style={styles.linkbox}><FontAwesome size={30} name="home" color="white" />
                        <Text style={styles.titlebox}>Home</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
                    <View style={styles.linkbox}><FontAwesome size={30} name="home" color="white" />
                        <Text style={styles.titlebox}>Home</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.Link1} onPress={() => Alert.alert("click me")}>
                    <View style={styles.linkbox}><FontAwesome size={30} name="home" color="white" />
                        <Text style={styles.titlebox}>Home</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxes: {
        width: '100%',
        backgroundColor: "#121212",
    },
    quick: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: '5%',
        marginBottom: '3%',
    },
    underbox: {
        // height: 130,
        width: '90%',
        marginLeft: '5%',
        backgroundColor: "#121212",
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    Link1: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: '#192930',
        color: "red",
    },
    linkbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        color: 'white',
    },
    titlebox: {
        fontWeight: "bold",
        fontSize: 13,
        color: "white"
    },
})

export default ShortLinks;
