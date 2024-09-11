import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
    { id: '1', title: 'Rohit Singhania', time: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: require('../Assets/Images/Serviceprovider/Vector1.png'), image1: require('../Assets/Images/Serviceprovider/Vector2.png') },
    { id: '2', title: 'Rohit Singhania', time: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: require('../Assets/Images/Serviceprovider/Vector1.png'), image1: require('../Assets/Images/Serviceprovider/Vector2.png') },
];

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image
                source={item.image}
                style={styles.vector1}
            />
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <Image source={require('../Assets/Images/Serviceprovider/Profile.png')} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Know More</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.row}>

            </View>
            <Image
                source={item.image1}
                style={styles.vector2}
            />
        </View>
    );
};

const Serviceproviders = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card item={item} />}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 16,
    },
    card: {
        backgroundColor: '#FFE7EA',
        padding: 5,
        borderRadius: 10,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        position: 'relative',
    },
    imagePlaceholder: {
        height: 80,
        width: 80,
        backgroundColor: '#fdd',
        borderRadius: 8,
        marginRight: 12,
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flexWrap: 'wrap',
        flexShrink: 1,
        marginBottom: 0,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    time: {
        fontSize: 12,
        color: '#999',
        flexWrap: 'wrap',
        flexShrink: 1,
        marginBottom: 0,
        width: '65%'
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#CF76DD',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '45%',
        top: 10
    },
    gradientButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    vector1: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 10
    },
    vector2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 50,
        height: 50,
        borderRadius: 10
    },
});

export default Serviceproviders;
