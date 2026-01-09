import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HeroBox = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.heroFirst}>
            <View style={styles.heroBox}>
                <Text style={styles.textboxx}>
                    Visit the map to view the complete layout of the college campus.
                </Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => Alert.alert("clicked you")}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Open Map</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heroFirst: {
        // height: 160,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#121212",


    },
    heroBox: {
        // height: 140,
        width: '90%',
        borderRadius: 10,
        borderBlockColor: '#494949ff',
        borderWidth: 0.3,
        backgroundColor: "#192930",
        shadowColor: "rgb(41, 41, 41)",
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        paddingBottom: 20,
        marginBottom: 30,
        marginTop: 30,
    },
    button: {
        height: 40,
        width: "90%",
        backgroundColor: "#212199",
        color: 'white',
        marginLeft: 20,
        marginTop: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

  
    textboxx: {
        paddingLeft: 20,
        color:"white",
        paddingRight: 15,
        paddingTop: 40,
        fontSize: 19,
        gap: 5,
    }

})

export default HeroBox