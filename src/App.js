import React, { Component } from 'react'; 

import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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

class App extends Component {
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
        <Provider store={store}>
        
        <PaperProvider>
          <Router />       
      
        </PaperProvider>
        </Provider> 
        );
               }
}


export default App;
