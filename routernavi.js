/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Wishlist from './src/components/Wishlist';
import MyCart from './src/components/MyCart';
import Account from './src/components/Account';
import * as React from 'react';
const Tab = createBottomTabNavigator();
function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Image
        style={styles.imageStyle}
        source={require('./src/assets/cart.png')}
      />
      {badgeCount > 0 && (
        <View style={styles.badgestyle}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={1} />;
}

const MyApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Image
                style={styles.imageStyle}
                source={require('./src/assets/homenew1.png')}
              />
            );
          } else if (route.name === 'Categories') {
            return (
              <Image
                style={styles.imageStyle}
                source={require('./src/assets/list.png')}
              />
            );
          } else if (route.name === 'My Cart') {
            return <HomeIconWithBadge size={size} color={color} />;
          } else if (route.name === 'Wishlist') {
            return (
              <Image
                style={styles.imageStyle}
                source={require('./src/assets/heart.png')}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <Image
                style={styles.imageStyle}
                source={require('./src/assets/account.png')}
              />
            );
          }
          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        // activeBackgroundColor: 'lightgray',
        activeTintColor: '#FFAE0D',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
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

const styles = StyleSheet.create({
  imageStyle: {
    width: 25,
    height: 25,
  },
  badgestyle: {
    position: 'absolute',
    right: -17,
    top: -3,
    backgroundColor: '#FFAE0D',
    borderRadius: 11,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
