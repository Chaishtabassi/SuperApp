import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homescreen from '../Screens/Homescreen';
import Drawercontent from './Drawercontent';
import Searchscreen from '../Screens/Searchscreen';
import Playscreen from '../Screens/Playscreen';
import Profilescreen from '../Screens/Profilescreen';
import Petcare from '../Screens/Categories/Petcare';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const DashboardStack = createNativeStackNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#625bc5" : "black";

          if (route.name === 'Petcare') {
            iconColor = focused ? "pink" : "black"; 
          }

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Play':
              iconName = 'play-circle-o';
              break;
            case 'Profile':
              iconName = 'user-o';
              break;
            case 'Petcare':
              iconName = 'paw';
              break;
            default:
              iconName = 'question';
          }

          return (
            <View style={[styles.selectedTab, { backgroundColor: focused ? '#e0dcf7' : 'transparent' }]}>
              <FontAwesome
                name={iconName}
                size={size}
                color={iconColor} 
              />
              {focused && <Text style={styles.selectedLabel}>{route.name}</Text>}
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Searchscreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#625bc5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={30}
              color="#fff"
              style={{ marginLeft: 10, top: 2 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={Playscreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#625bc5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={30}
              color="#fff"
              style={{ marginLeft: 10, top: 2 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilescreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#625bc5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={30}
              color="#fff"
              style={{ marginLeft: 10, top: 2 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name="Petcare"
        component={Petcare}
        options={{
          headerShown: false, 
        }}
      />
    </DashboardStack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Drawercontent />}>
      <Drawer.Screen
        name="Dashboard"
        component={MainStack} 
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="AppDrawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  selectedTab: {
    flexDirection: 'row',
    // backgroundColor: '#e0dcf7',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  selectedLabel: {
    marginLeft: 5,
    color: '#625bc5',
    fontWeight: 'bold',
  },
});
