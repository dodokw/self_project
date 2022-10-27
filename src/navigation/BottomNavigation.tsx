import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {hp, wp} from '../tools/UI';
import {AllScreenList} from '../screen/AllScreenProps';
import HomeNavigation from './HomeNavigation';
import CalendarNavigation from './CalendarNavigation';
import MyPageNavigation from './MyPageNavigation';
import LibraryNavigation from './LibraryNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomNavigation = () => {
  const BottomStack = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomStack.Navigator initialRouteName={AllScreenList.Home}>
        <BottomStack.Screen
          name={'Home'}
          component={HomeNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarIcon: ({focused, color}) => (
              <View>
                {focused ? (
                  <Ionicons name="home" size={hp(20)} />
                ) : (
                  <Ionicons name="home-outline" size={hp(20)} />
                )}
              </View>
            ),
          }}
        />
        <BottomStack.Screen
          name={'Calendar'}
          component={CalendarNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarIcon: ({focused, color}) => (
              <View>
                {focused ? (
                  <Ionicons name="calendar" size={hp(20)} />
                ) : (
                  <Ionicons name="calendar-outline" size={hp(20)} />
                )}
              </View>
            ),
          }}
        />
        <BottomStack.Screen
          name={'Library'}
          component={LibraryNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarIcon: ({focused, color}) => (
              <View>
                {focused ? (
                  <Ionicons name="library" size={hp(20)} />
                ) : (
                  <Ionicons name="library-outline" size={hp(20)} />
                )}
              </View>
            ),
          }}
        />
        <BottomStack.Screen
          name={'My Page'}
          component={MyPageNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarIcon: ({focused, color}) => (
              <View>
                {focused ? (
                  <Ionicons name="person" size={hp(20)} />
                ) : (
                  <Ionicons name="person-outline" size={hp(20)} />
                )}
              </View>
            ),
          }}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
