import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/IT19166834/Login';
import RegisterComponent from './src/IT19166834/Register';
import ProfileComponent from './src/IT19166834/Profile';
import EditProfile from './src/IT19166834/EditProfile';
import EditPasswordComponent from './src/IT19166834/EditPassword';

import Home from './src/IT19152356/Home';
import Accounts from './src/IT19152356/Accounts';
import AddAccount from './src/IT19152356/AddAccount';
import EditAccount from './src/IT19152356/EditAccount';
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen 
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
     
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: 'NSWSD SelfCare'}}
          />
            <Stack.Screen name="AddAccount" component={AddAccount} />
            <Stack.Screen name="Accounts" component={Accounts} />
            <Stack.Screen name="EditAccount" component={EditAccount} />
         

          <Stack.Screen name="Register" component={RegisterComponent} />
          <Stack.Screen name="Profile" component={ProfileComponent} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="EditPassword" component={EditPasswordComponent} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;