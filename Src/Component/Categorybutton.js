import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Construction from '../Assets/Images/Categories/construction.png';
import Event from '../Assets/Images/Categories/event.png';
import Film from '../Assets/Images/Categories/event.png';
import Healthcare from '../Assets/Images/Categories/healthcare.png';
import Home from '../Assets/Images/Categories/home.png';
import Pet from '../Assets/Images/Categories/pet.png';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CategoryButton = ({ label, colors, image, onPress }) => (
  <LinearGradient
    colors={colors}
    style={styles.gradientButton}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <TouchableOpacity style={styles.buttonContent} onPress={onPress}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const Categorybutton = () => {
  const navigation = useNavigation();

  const categories = [
    { label: 'Construction', colors: ['#FFFFFF', '#CBE0FF'], image: Construction, screen: '' },
    { label: 'Entertainment', colors: ['#FFFFFF', '#FFE9BE'], image: Film, screen: '' },
    { label: 'Pet Care', colors: ['#FEF2F3', '#FFB0DD'], image: Pet, screen: 'Petcare' },
    { label: 'Home Care', colors: ['#FFFFFF', '#C0FCF6'], image: Home, screen: '' },
    { label: 'Events', colors: ['#FFFFFF', '#FFC8AB'], image: Event, screen: '' },
    { label: 'Healthcare', colors: ['#FFFFFF', '#CFCFFF'], image: Healthcare, screen: '' },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          label={category.label}
          colors={category.colors}
          image={category.image}
          onPress={() => navigation.navigate(category.screen)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  gradientButton: {
    borderRadius: 25,
    padding: 3,
    marginBottom: 15,
    width: '45%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    padding: 12,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Categorybutton;
