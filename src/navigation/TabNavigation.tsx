import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import EpisodeStack from './EpisodeStack';
import handleOptions from '../utils/handleTabBar';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={handleOptions}>
      <Tab.Screen name="EpisodeStack" component={EpisodeStack} />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
