import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterScreen from '../screens/CharacterScreen';
import colors from '../styles/colors';
const Stack = createNativeStackNavigator();

const CharacterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.main,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="CharactersScreen"
        component={CharactersScreen}
        options={{title: 'Characters'}}
      />
      <Stack.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={{title: 'Character'}}
      />
    </Stack.Navigator>
  );
};
export default CharacterStack;
