import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

const Map = ({ height = 450, width = '100%' }) => {
    const [selectedMarker, setSelectedMarker] = useState<number | null>(0);

    return (
        <View style={[styles.container, { height, ...(typeof width === 'number' ? { width } : { width: width as any }) }]}>
            {(Platform.OS === 'web' || Platform.OS === 'ios' || Platform.OS === 'android') && (

                <View style={styles.map}>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7166.495570028291!2d91.725019!3d26.090829!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5c45471a4913%3A0xfcbcab5629378517!2sScholar&#39;s%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1734036513366!5m2!1sen!2sin" frameBorder="0" style={{ width: '100%', height: '100%', borderRadius: 10 }} >
                    </iframe> */}


                    <MapView
                        style={{ width: '100%', height: '100%' }}
                        mapType='hybridFlyover'
                        initialRegion={{
                            latitude: 26.090829,
                            longitude: 91.725019,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 26.090829, longitude: 91.725019 }}
                            title="SITM GHY"
                            description="campus location"
                        >

                        </Marker>


                        <Marker
                            coordinate={{ latitude: 26.090629, longitude: 91.725019 }}
                            onPress={() => setSelectedMarker(1)}
                        >
                            <Callout tooltip>
                                <View style={styles.callout}>
                                    <Text style={styles.calloutTitle}>SITM A-Block Building</Text>
                                    <Text style={styles.calloutDescription1}> 26.090629, 91.725019</Text>
                                    <Text style={styles.calloutDescription}>Campus Location</Text>
                                </View>
                            </Callout>
                        </Marker>



                        <Marker
                            coordinate={{ latitude: 26.090614, longitude: 91.723662 }}
                            onPress={() => setSelectedMarker(0)}
                        >
                            <Callout tooltip>
                                <View style={styles.callout}>
                                    <Text style={styles.calloutTitle}>SITM Boy's Hostel</Text>
                                    <Text style={styles.calloutDescription1}> 26.090614, 91.723662</Text>
                                    <Text style={styles.calloutDescription}>Campus Location</Text>
                                </View>
                            </Callout>
                        </Marker>
                        <Marker
                            coordinate={{ latitude: 26.090660, longitude: 91.724605 }}
                            onPress={() => setSelectedMarker(1)}
                        >
                            <Callout tooltip>
                                <View style={styles.callout}>
                                    <Text style={styles.calloutTitle}>SITM Playground</Text>
                                    <Text style={styles.calloutDescription1}> 26.090660, 91.724605</Text>
                                    <Text style={styles.calloutDescription}>Campus Location</Text>
                                </View>
                            </Callout>
                        </Marker>
                        <Marker
                            coordinate={{ latitude: 26.091095, longitude: 91.724598 }}
                            onPress={() => setSelectedMarker(1)}
                        >
                            <Callout tooltip>
                                <View style={styles.callout}>
                                    <Text style={styles.calloutTitle}>SITM B-Block Building</Text>
                                    <Text style={styles.calloutDescription1}> 26.091095, 91.724598</Text>
                                    <Text style={styles.calloutDescription}>Campus Location</Text>
                                </View>
                            </Callout>
                        </Marker>

                    </MapView>
                </View>
            )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        backgroundColor: '#f0feffff',
        padding: 20,

    },
    map: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    callout: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    calloutTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    calloutDescription: {
        fontSize: 12,
        color: '#666',
    },
    calloutDescription1: {
        fontSize: 9,
        color: '#007bffff',
    },
});

export default Map;
