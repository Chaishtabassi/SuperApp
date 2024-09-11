import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeSearch = () => {
  return (
    <View style={{zIndex:1,position:'absolute'}}>
    <View style={styles.container}>
      <Image 
        source={require('../Assets/Images/circles.png')}
        style={styles.image}
      />
      <View style={styles.heading}>
        <Text style={styles.text}>Welcome,</Text>
        <Text style={styles.text1}>Find Your Dream Sector!</Text>
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          placeholder='What are you looking for?'
          style={styles.textinput}
        />
        <FontAwesome
          name="search"
          size={20}
          color="#FF8A00"
          style={styles.icon}
        />
      </View>
    </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    height: 160, 
    width: '120%',
    backgroundColor: '#EDFFCE',
    borderTopEndRadius: 15,
    borderEndEndRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
  },
  heading: {
    margin: 10,
    paddingTop: 5, 
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFPRODISPLAYBOLD',
    color: 'black',
  },
  text1: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    width: '60%',
  },
  image: {
    position: 'absolute',
    right: -1, 
    width: 60,
    height: 60, 
    borderRadius: 15,
  },
  textinputContainer: {
    margin: 10,
    position: 'relative',
  },
  textinput: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    paddingLeft: 40, 
    height: 40, 
  },
  icon: {
    position: 'absolute',
    left: 10, 
    top: '50%',
    transform: [{ translateY: -10 }], 
  },
});
