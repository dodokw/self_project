import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AllScreenList} from '../screen/AllScreenProps';
import Calendar from '../screen/calander/Calander';

const CalendarNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllScreenList.Calendar}
        component={Calendar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CalendarNavigation;
