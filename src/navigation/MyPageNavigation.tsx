import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/home/Home';
import {AllScreenList} from '../screen/AllScreenProps';
import Mypage from '../screen/mypage/Mypage';

export type MyPageNavigationParamList = {
  MyPageScreen: undefined;
};

const MyPageNavigation = () => {
  const Stack = createStackNavigator<MyPageNavigationParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllScreenList.Mypage}
        component={Mypage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyPageNavigation;
