import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const sectors = [
  { id: '1', title: 'Home Services', backgroundColor: '#EDFFCE', image: require('../Assets/Images/circles.png'),image1: require('../Assets/Images/PopularServices/Homeservices.png') },
  { id: '2', title: 'Healthcare', backgroundColor: '#CDEFFF', image: require('../Assets/Images/circles.png'),image1: require('../Assets/Images/PopularServices/Carecard.png') },
];

const Popularsector = () => {
  const renderItem = ({ item }) => (
  <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
      <Image 
        source={item.image}
        style={styles.image}
      />
      <View style={styles.heading}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
       <Image 
        source={item.image1}
        style={styles.image1}
      />
    </View>
  );

  return (
    <FlatList
      data={sectors}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal 
    />
  );
};

export default Popularsector;

const styles = StyleSheet.create({
  container:{
    height: 140, 
    width: 156, 
    backgroundColor: '#EDFFCE',
    borderRadius: 15,
    margin: 10,
    position: 'relative', 
  },
  heading: {
    margin: 10,
    paddingTop: 5, 
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    width: '80%',
  },
  image: {
    position: 'absolute',
    right: -1, 
    width: 60,
    height: 60, 
    borderRadius: 15,
  },
  image1: {
    position: 'absolute', 
    bottom: 10, 
    right: 10, 
    width: 60,
    height: 60,
  },
});

