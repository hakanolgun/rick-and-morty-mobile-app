import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import EpisodeStack from './EpisodeStack';
import CharacterStack from './CharacterStack';
import handleOptions from '../utils/handleTabBar';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={handleOptions}>
      <Tab.Screen name="EpisodeStack" component={EpisodeStack} />
      <Tab.Screen name="CharacterStack" component={CharacterStack} />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{title: 'Fav', headerShown: true}}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
