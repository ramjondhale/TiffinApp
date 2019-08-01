import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import SignUp from './component/SignUp';
import Home from './component/Home';

const RouterComponent = () =>
{
  return(
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login' />
          <Scene key='signUp' component={SignUp} title='SignUp' />
        </Scene>       
        <Scene key='main'>
          <Scene key='home' component={Home} title='Home' />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;