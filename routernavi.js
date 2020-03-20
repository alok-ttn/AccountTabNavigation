import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Wishlist from './src/components/Wishlist';
import MyCart from './src/components/MyCart';
import Account from './src/components/Account';
import * as React from 'react';
import {Ionicons} from 'react-native-vector-icons';
const Tab = createBottomTabNavigator();

const MyApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Wishlist" component={Wishlist} /> */}
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
};

export default App;
