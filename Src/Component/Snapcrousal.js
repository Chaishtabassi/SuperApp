import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import Popularservices from './Popularservices';
import Serviceproviders from './Serviceproviders';
import Feather from 'react-native-vector-icons/Feather';
import Ratingscreen from './Ratingscreen';

const Snapcrousal = () => {
    const carouselData = [
        { id: '1', image: require('../Assets/Images/Crousal/Ellipse.png'), title: 'All-New Groomers in Town', image1: require('../Assets/Images/Crousal/Group1.png'), image2: require('../Assets/Images/Crousal/Vector1.png') },
        { id: '2', image: require('../Assets/Images/Crousal/Ellipse.png'), title: 'All-New Groomers in Town', image1: require('../Assets/Images/Crousal/Group1.png'), image2: require('../Assets/Images/Crousal/Vector1.png') },
        { id: '3', image: require('../Assets/Images/Crousal/Ellipse.png'), title: 'All-New Groomers in Town', image1: require('../Assets/Images/Crousal/Group1.png'), image2: require('../Assets/Images/Crousal/Vector1.png') },
    ];

    const renderCarouselItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <ImageBackground source={item.image} style={styles.leftImage} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.textOverlay}>
                    <Text style={styles.text}>BOOK NOW!</Text>
                    <Text style={styles.discountText}>-20%</Text>
                </View>
            </ImageBackground>
            <Text style={styles.text1}>All-New Groomers in Town!</Text>
            <ImageBackground source={item.image2} style={styles.rightImage} imageStyle={{ borderRadius: 20 }}>
                <Image source={item.image1} />
            </ImageBackground>
        </View>
    );

    return (
        <View>
            <View style={styles.carouselContainer}>
                <Carousel
                    data={carouselData}
                    renderItem={renderCarouselItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                />
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.texthere}>Popular Services</Text>
                    <Text style={styles.textdot}>...</Text>
                </View>
                <View>
                    <Popularservices />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.texthere}>Popular Services</Text>
                    <Text style={styles.textdot}>...</Text>
                </View>
                <View>
                    <Serviceproviders />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.texthere}>Ratings</Text>
                    <Text style={styles.textdot}>...</Text>
                </View>
                <View style={styles.textrow}>
                    <Text style={styles.textreview}>13 Reviews</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textreview}>WRITE A REVIEW</Text>
                        <View style={{ marginLeft: 10 }}>
                            <Feather
                                name="edit"
                                size={15}
                                color="#FF8A00"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Ratingscreen />
                </View>
            </View>
            <View style={{ height: 10 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        height: '9.9%',
        width: '90%',
        backgroundColor: '#f3a8bb',
        alignSelf: 'center',
        borderRadius: 20,
    },
    carouselItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    leftImage: {
        width: 100,
        height: 130,
        resizeMode: 'contain',
    },
    rightImage: {
        width: 100,
        height: 130,
        resizeMode: 'contain',
    },
    textOverlay: {
        position: 'absolute',
        alignItems: 'center',
        top: 30,
        left: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: '800',
        color: '#FF6694',
    },
    discountText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000',
    },
    text1: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000000',
        width: '30%',
    },
    section: {
        margin: 10
    },
    textrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texthere: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    textdot: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
    textreview: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FF6694'
    }
});

export default Snapcrousal;
