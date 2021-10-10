import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/IT19166834/Login';
import RegisterComponent from './src/IT19166834/Register';
import ProfileComponent from './src/IT19166834/Profile';
import EditProfile from './src/IT19166834/EditProfile';
import EditPasswordComponent from './src/IT19166834/EditPassword';
import UpdateProfilePicture from './src/IT19166834/UpdateProfilePicture';

import Home from './src/IT19152356/Home';
import Accounts from './src/IT19152356/Accounts';
import AddAccount from './src/IT19152356/AddAccount';
import EditAccount from './src/IT19152356/EditAccount';

import BillHistory from './src/IT19132624/BillHistory';
import PaymentsHistory from './src/IT19132624/PaymentsHistory';
import BillCalculator from './src/IT19132624/BillCalculator';
import Plumbers from './src/IT19132624/Plumbers';
import AreYouaPlumber from './src/IT19132624/AreYouaPlumber'
import CreatePlumber from './src/IT19132624/CreateAreYouaPlumber'
import ProfileView from './src/IT19132624/Profile'

import MessagingService from './src/IT19189840/MessagingService';
import MeterReadingPart1 from './src/IT19189840/MeterReadingPart1';
import MeterReadingPart2 from './src/IT19189840/MeterReadingPart2';
import ImageUpload from './src/IT19189840/ImageUpload';


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
          <Stack.Screen name="Register" component={RegisterComponent} />
          <Stack.Screen name="Profile" component={ProfileComponent} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="EditPassword" component={EditPasswordComponent} />
          <Stack.Screen name="UpdateProfilePicture" component={UpdateProfilePicture} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddAccount" component={AddAccount} />
          <Stack.Screen name="Accounts" component={Accounts} />
          <Stack.Screen name="EditAccount" component={EditAccount} />

          <Stack.Screen name="PaymentsHistory" component={PaymentsHistory} />
          <Stack.Screen name="BillCalculator" component={BillCalculator} />
          <Stack.Screen name="Plumbers" component={Plumbers} />
          <Stack.Screen name="BillHistory" component={BillHistory} />
          <Stack.Screen name="AreYoua" component={AreYouaPlumber} />
          <Stack.Screen name="CreatePlumber" component={CreatePlumber} />

          <Stack.Screen name="MessagingService" component={MessagingService}/>
          <Stack.Screen name="MeterReading1" component={MeterReadingPart1}/>
          <Stack.Screen name="MeterReading2" component={MeterReadingPart2}/>
          <Stack.Screen name="ImageUpload" component={ImageUpload}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;