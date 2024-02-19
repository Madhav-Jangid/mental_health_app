import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Login from '../auth/Login';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AppNavigation from './AppNavigation';
import Register from '../auth/Register';
import {AuthProvider} from '../../../context/authContext';
import {AuthContext} from '../../../context/authContext';
import WelcomeScreen from '../auth/Screens/WelcomeScreen';
import LoginScreen from '../auth/Screens/LoginScreen';
import SignupScreen from '../auth/Screens/SignupScreen';
import SecondSignup from '../auth/Screens/SecondSignup';

const Stack = createStackNavigator();

const RootNavigation = () => {
  //global state
  const [state] = useContext(AuthContext);
  //auth condition is true?
  const authenticateUser = state?.user && state?.token;
  console.log(authenticateUser);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            gestureEnabled: true,
            // ...TransitionPresets.SlideFromRightIOS, // This will make the transition from right to left
          }}>
          {authenticateUser ? (
            <Stack.Group>
              <Stack.Screen
                name="MainApp"
                component={AppNavigation}
                options={{headerShown: false}}
              />
            </Stack.Group>
          ) : (
            // <Stack.Group>
            //   <Stack.Screen
            //     name="Login"
            //     options={{headerShown: false}}
            //     component={Login}
            //   />
            //   <Stack.Screen name="Register" component={Register} />
            // </Stack.Group>
            <Stack.Group>
              <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
              <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown: false}}/>
              <Stack.Screen name="SecondSignup" component={SecondSignup} options={{headerShown: false}}/>
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  iconBackground: {
    height: 55,
    width: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
