import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodesScreen from '../screens/EpisodesScreen';
import EpisodeScreen from '../screens/EpisodeScreen';

const Stack = createNativeStackNavigator();

const EpisodeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EpisodesScreen"
        component={EpisodesScreen}
        options={{title: 'Episodes'}}
      />
      <Stack.Screen
        name="EpisodeScreen"
        component={EpisodeScreen}
        options={{title: 'Episode'}}
      />
    </Stack.Navigator>
  );
};
export default EpisodeStack;
