import React from 'react';
import { Image, Text, StyleSheet,TouchableOpacity,View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onMenuPress, onLogoPress }) => {
  return (
    <View style={{backgroundColor:'white'}}>
    <LinearGradient
    colors={['#9766FF', '#F7F3FF']}
    style={styles.header}
  >
    <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
      <Ionicons name="menu" size={30} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onLogoPress} style={styles.logoContainer}>
      <Image source={require('../Assets/Images/Logo.png')} style={styles.logo} />
    </TouchableOpacity>
  </LinearGradient>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 150, 
        paddingHorizontal: 10,
        borderBottomRightRadius:50,
        backgroundColor:'white'
      },
      title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      iconContainer: {
        flex: 1,
      },
      logoContainer: {
        flex: 1,
        alignItems: 'flex-end',
      },
    });