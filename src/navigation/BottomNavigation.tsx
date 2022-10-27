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
          }}
        />
        <BottomStack.Screen
          name={'Calander'}
          component={CalendarNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
          }}
        />
        <BottomStack.Screen
          name={'Library'}
          component={LibraryNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
          }}
        />
        <BottomStack.Screen
          name={'My Page'}
          component={MyPageNavigation}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
          }}
        />
      </BottomStack.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
