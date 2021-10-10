import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/IT19166834/Login';
import RegisterComponent from './src/IT19166834/Register';
import ProfileComponent from './src/IT19166834/Profile';
import EditProfile from './src/IT19166834/EditProfile';
import EditPasswordComponent from './src/IT19166834/EditPassword';
import SampleHome from './src/IT19189840/SampleHome';
import MessagingService from './src/IT19189840/MessagingService';
import MeterReadingPart1 from './src/IT19189840/MeterReadingPart1';
import MeterReadingPart2 from './src/IT19189840/MeterReadingPart2';
import ImageUpload from './src/IT19189840/ImageUpload';
import Home from './src/IT19189840/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
           name="Home"component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Register" component={RegisterComponent} />
          <Stack.Screen name="Profile" component={ProfileComponent} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="EditPassword" component={EditPasswordComponent} />
          <Stack.Screen  name="Login" component={Login}/>
          
          <Stack.Screen name="MessagingService" component={MessagingService}/>
          <Stack.Screen name="MeterReading1" component={MeterReadingPart1}/>
          <Stack.Screen name="MeterReading2" component={MeterReadingPart2}/>
          <Stack.Screen name="ImageUpload" component={ImageUpload}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;