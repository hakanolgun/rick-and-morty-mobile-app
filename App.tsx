import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {store} from './src/store/store';

let persistor = persistStore(store);

const App = () => {
  StatusBar.setBarStyle('light-content', true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
