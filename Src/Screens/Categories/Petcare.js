import { StyleSheet, Text, View, StatusBar, Image, TextInput,ScrollView } from 'react-native';
import React from 'react';
import Headerpet from '../../Component/Headerpet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Snapcrousal from '../../Component/Snapcrousal';

const Petcare = () => {
  return (
    <ScrollView>
    <LinearGradient
      colors={['#FFB5B1', '#CD7ED9']}
      style={styles.container}
    >
      <StatusBar backgroundColor="#f3a8bb" barStyle="light-content" />
      
      <View style={{ height: '13.7%' }}>
        <Headerpet />
        <View style={styles.text}>
          <View>
            <Text style={styles.textstyle}>Hello,</Text>
            <Text style={styles.textstyle1}>Fancy for a wash today!</Text>
          </View>
          <Image source={require('../../Assets/Images/Petcare/Group4.png')} />
        </View>
        <View style={styles.petcontainer}>
          <Image source={require('../../Assets/Images/Petcare/Group3.png')} />
          <View style={styles.pet}>
            <Image source={require('../../Assets/Images/Petcare/Group.png')} />
            <Image source={require('../../Assets/Images/Petcare/Group1.png')} />
            <Image source={require('../../Assets/Images/Petcare/Group2.png')} />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
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
        <Snapcrousal/>
     
      </View>
    </LinearGradient>
    </ScrollView>
  );
};

export default Petcare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  petcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    top: 50,
    zIndex: 1,
  },
  pet: {
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    top: 50,
  },
  textstyle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  textstyle1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  textinputContainer: {
    margin: 15,
    position: 'relative',
  },
  textinput: {
    backgroundColor: '#FFEDF2',
    width: '100%',
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
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
