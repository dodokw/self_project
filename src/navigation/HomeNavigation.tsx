import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home/Home';
import {AllScreenList} from '../screen/AllScreenProps';

export type HomeNavigationParamList = {
  HomeScreen: undefined;
};

const HomeNavigation = () => {
  const Stack = createStackNavigator<HomeNavigationParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllScreenList.Home}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
