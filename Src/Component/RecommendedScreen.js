import React from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { id: '1', title: 'Now share the Construction Sectors with your anyone and can save it as bookmark', time: '06:30 AM' },
  { id: '2', title: 'Now share the Construction Sectors with your anyone and can save it as bookmark', time: '06:30 AM' },
];

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../Assets/Images/Recommended/Vector1.png')} style={styles.vector1} />
      <Image source={require('../Assets/Images/Recommended/Vector3.png')} style={styles.vector1} />
      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        <View style={styles.imagePlaceholder}>
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.time}>Updated | {item.time}</Text>
        <TouchableOpacity style={styles.button}>
          {/* <LinearGradient
            colors={['#9766FF', '#F7F3FF']}
            style={styles.gradientButton}
          > */}
            <Text style={styles.buttonText}>Explore</Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </View>
      <Image source={require('../Assets/Images/Recommended/Vector2.png')} style={styles.vector2} />
      <Image source={require('../Assets/Images/Recommended/Vector4.png')} style={styles.vector2} />
    </View>
  );
};

const MyList = () => {
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
    backgroundColor: '#F6F4FF',
    padding: 16,
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
  },
  button: {
    borderRadius: 20,
    backgroundColor:'#9766FF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
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
    borderRadius:10
  },
  vector2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius:10
  },
});

export default MyList;
