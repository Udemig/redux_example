// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabRouter';
import {CHAARACTERDETAIL, TABNAVIGATOR} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetaail';
import Colors from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHAARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
