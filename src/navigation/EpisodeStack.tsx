import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodesScreen from '../screens/EpisodesScreen';
import EpisodeScreen from '../screens/EpisodeScreen';
import colors from '../styles/colors';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const EpisodeStack = () => {
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
        name="EpisodesScreen"
        component={EpisodesScreen}
        // options={{title: 'Episodes'}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EpisodeScreen"
        component={EpisodeScreen}
        options={{title: 'Episode'}}
      />
      <Stack.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={{title: 'Character'}}
      />
    </Stack.Navigator>
  );
};
export default EpisodeStack;
