import { RootStack } from '@/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppNavigator } from './appNavigator/appNavigator';
import { AuthNavigator } from './authNavigator/authNavigator';

export const RootNavigation = () => {
  const RootNavigation = createNativeStackNavigator();
  return (
    <RootNavigation.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootNavigation.Screen name = {RootStack.APP} component={AppNavigator} /> */}
      <RootNavigation.Screen name={RootStack.AUTH} component={AuthNavigator} />
    </RootNavigation.Navigator>
  );
};
