import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import HomeSearch from '../Component/HomeSearch'
import Categorybutton from '../Component/Categorybutton'
import Popularsector from '../Component/Popularsector'
import Header from '../Component/Header'
import RecommendedScreen from '../Component/RecommendedScreen'

const Homescreen = ({navigation}) => {

    const handleMenuPress = () => {
        navigation.openDrawer()
      };

    return (
        <ScrollView style={styles.container}>
              <Header
                title=""
                onMenuPress={handleMenuPress}
              />
            <View style={styles.search}>
                <HomeSearch />
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.text}>Explore Categories</Text>
                    <Text style={styles.text1}>...</Text>
                </View>
                <View>
                    <Categorybutton />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.text}>Popular Sectors</Text>
                    <Text style={styles.text1}>...</Text>
                </View>
                <View>
                    <Popularsector />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textrow}>
                    <Text style={styles.text}>Recommended For You</Text>
                    <Text style={styles.text1}>...</Text>
                </View>
                <View>
                    <RecommendedScreen/>
                </View>
            </View>
            <View style={{height:100}}></View>
        </ScrollView>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        // zIndex: 1,
        // position: 'absolute',
        top: -50,
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    text1: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },
    textrow: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    section: {
        top: 120
    }
})