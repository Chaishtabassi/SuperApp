import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const data = [
    { id: '1', title: 'Rohit Singhania', time: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: require('../Assets/Images/Rating/Vector1.png'), image1: require('../Assets/Images/Rating/Profile1.png') },
    { id: '2', title: 'Rohit Singhania', time: 'Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.', image: require('../Assets/Images/Rating/Vector1.png'), image1: require('../Assets/Images/Rating/profile2.png') },
];

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{flexDirection:'row',marginVertical: 5,}}>
                    <Image source={require('../Assets/Images/Rating/Rate.png')} style={{marginRight: 5}}/>
                    <Image source={require('../Assets/Images/Rating/Rate.png')} style={{marginRight: 5}}/>
                    <Image source={require('../Assets/Images/Rating/Rate.png')} style={{marginRight: 5}}/>
                    <Image source={require('../Assets/Images/Rating/Rate.png')} style={{marginRight: 5}}/>
                    <Image source={require('../Assets/Images/Rating/Rate1.png')} style={{marginRight: 5}}/>
                    </View>
                    <Text style={styles.time}>{item.time}</Text>
                </View>

                <Image
                    source={item.image1}
                    style={styles.profileImage}
                />
            </View>
            <Image
                source={item.image}
                style={styles.vector1}
            />
        </View>
    );
};

const Ratingscreen = () => {
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
        padding: 10,
    },
    card: {
        backgroundColor: '#ffff',
        // padding: 5,
        borderRadius: 10,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        position: 'relative',
        borderColor:'#FFCCD2',
        borderWidth:1
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 12,
    },
    textContainer: {
        flex: 1, 
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    time: {
        fontSize: 12,
        color: '#999',
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    profileImage: {
        width: 80,
        height: 80,
        alignSelf: 'flex-end', 
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    vector1: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});

export default Ratingscreen;
