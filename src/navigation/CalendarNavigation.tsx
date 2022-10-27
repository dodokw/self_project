import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Calander from '../screen/Calander/Calander';
import {AllScreenList} from '../screen/AllScreenProps';

const CalendarNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllScreenList.Calander}
        component={Calander}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigation;
