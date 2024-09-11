import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Headerpet = ({ title, onMenuPress, onLogoPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
        <Ionicons name="menu" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogoPress} style={styles.logoContainer}>
        <Image source={require('../Assets/Images/Logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogoPress} style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default Headerpet;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 150,
    // paddingHorizontal: 10,
    borderBottomRightRadius: 50,
    // backgroundColor: '#f3a8bb',
    marginHorizontal:15,
    top:40
  },
//   logo: {
//     width: 50, // Adjust as needed
//     height: 50, // Adjust as needed
//   },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
