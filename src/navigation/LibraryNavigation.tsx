import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AllScreenList} from '../screen/AllScreenProps';
import Library from '../screen/library/Library';

export type LibraryNavigationParamList = {
  LibraryScreen: undefined;
};

const LibraryNavigation = () => {
  const Stack = createStackNavigator<LibraryNavigationParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AllScreenList.Library}
        component={Library}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LibraryNavigation;
