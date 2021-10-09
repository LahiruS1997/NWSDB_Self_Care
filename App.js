import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/IT19166834/Login';
import RegisterComponent from './src/IT19166834/Register';
import ProfileComponent from './src/IT19166834/Profile';
import EditProfile from './src/IT19166834/EditProfile';
import EditPasswordComponent from './src/IT19166834/EditPassword';
import BillHistory from './src/IT19132624/BillHistory';
import PaymentsHistory from './src/IT19132624/PaymentsHistory';
import BillCalculator from './src/IT19132624/BillCalculator';
import Plumbers from './src/IT19132624/Plumbers';
import AreYouaPlumber from './src/IT19132624/AreYouaPlumber'


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen 
            name="BillHistory"
            component={BillHistory}
            // options={{title: 'Login'}}
          />
          <Stack.Screen name="PaymentsHistory" component={PaymentsHistory} />
          <Stack.Screen name="BillCalculator" component={BillCalculator} />
          <Stack.Screen name="Plumbers" component={Plumbers} />
          <Stack.Screen name="AreYoua" component={AreYouaPlumber} />
          
          <Stack.Screen 
            name="Login"
            component={Login}
             
          />
          <Stack.Screen name="Register" component={RegisterComponent}/>
          <Stack.Screen name="Profile" component={ProfileComponent} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="EditPassword" component={EditPasswordComponent} /> */}

          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App