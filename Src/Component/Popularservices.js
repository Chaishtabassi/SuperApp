import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const sectors = [
  { id: '1', title: 'Pet Grooming', backgroundColor: '#FFE7EA', image: require('../Assets/Images/Services/Ellipse1.png'), image1: require('../Assets/Images/Services/gromming.png'), image2: require('../Assets/Images/Services/Ellipse2.png') },
  { id: '2', title: 'Pet Walking', backgroundColor: '#FFE7EA', image: require('../Assets/Images/Services/Ellipse1.png'), image1: require('../Assets/Images/Services/petwalking.png'), image2: require('../Assets/Images/Services/Ellipse2.png') },
  { id: '3', title: 'Pet Dating', backgroundColor: '#FFE7EA', image: require('../Assets/Images/Services/Ellipse1.png'), image1: require('../Assets/Images/Services/petdating.png'), image2: require('../Assets/Images/Services/Ellipse2.png') },
  { id: '4', title: 'Pet Training', backgroundColor: '#FFE7EA', image: require('../Assets/Images/Services/Ellipse1.png'), image1: require('../Assets/Images/Services/pettraining.png'), image2: require('../Assets/Images/Services/Ellipse2.png') },
  { id: '5', title: 'Pet Adoption', backgroundColor: '#FFE7EA', image: require('../Assets/Images/Services/Ellipse1.png'), image1: require('../Assets/Images/Services/adoption.png'), image2: require('../Assets/Images/Services/Ellipse2.png') },
  { id: '5'},
];

const Popularservices = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
      <Image 
        source={item.image}
        style={styles.image}
      />
      <Image 
        source={item.image2}
        style={styles.image1}
      />
      <Image 
        source={item.image1}
        style={styles.image2}
      />
      <View style={styles.heading}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={sectors}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}  
    />
  );
};

export default Popularservices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150, 
    margin: 10,
    borderRadius: 25,
    position: 'relative',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    marginTop: 90,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  image: {
    position: 'absolute',
    left: -1, 
    width: 60,
    height: 60, 
    borderRadius: 15,
    zIndex: 0,
  },
  image1: {
    position: 'absolute',
    bottom: 2, 
    right: 2, 
    width: 60,
    height: 60,
    zIndex: 0,
    borderRadius: 15,
  },
  image2: {
    position: 'absolute',
    left: -1, 
    width: 130,
    height: 100, 
    borderRadius: 15,
    zIndex: 1,
    resizeMode: 'contain',
  },
});
