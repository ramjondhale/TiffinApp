import React, { Component } from 'react'; 
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reducers from './reducers';
import Router from './Router';


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
  

  const persistConfig = {
    key: 'root3',
    storage: AsyncStorage
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

class App extends Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
    render() {
      const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
      const persistore = persistStore(store);
        return (
        <Provider store={store}>
          <PersistGate persistor={persistore} loading={this.renderLoading()}>
        
            <PaperProvider>
              <Router />  
            </PaperProvider>
        </PersistGate>
        </Provider> 
        );
               }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
