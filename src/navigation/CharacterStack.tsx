import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const CharacterStack = () => {
  return (
    <Stack.Navigator>
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
