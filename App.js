/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Ionicons} from 'react-native-vector-icons/Ionicons';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Ionicons from 'react-native-ionicons';

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

// (...)
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 40, height: 40}}
        source={require('./src/assets/home.png')}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Image
                  style={{width: 25, height: 25}}
                  source={require('./src/assets/home.png')}
                />
              );
            } else if (route.name === 'Settings') {
              return <Text>1234</Text>;
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
