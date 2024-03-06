import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login';
import RecoverPassword from './src/screens/RecoverPassword/RecoverPassword';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import VerifyEmail from './src/screens/VerifyEmail/VerifyEmail';
import RedefinePassword from './src/screens/RedefinePassword/RedefinePassword';
import Profile from './src/screens/Profile/Profile';
import { DoctorHome } from './src/screens/DoctorHome/DoctorHome';
import Appointment from './src/screens/Appointment/Appointment';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { PatientHome } from './src/screens/PatientHome/PatientHome';
import SelectClinic from './src/screens/SelectClinic/SelectClinic';
import SelectDoctor from './src/screens/SelectDoctor/SelectDoctor';
import { ViewPrescription } from './src/screens/ViewPrescription/ViewPrescription';
import { SelectDate } from './src/screens/SelectDate/SelectDate';
import { Main } from './src/screens/Main/Main'

import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';

import {
  Quicksand_500Medium,
  Quicksand_600SemiBold
} from '@expo-google-fonts/quicksand';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedefinePassword"
          component={RedefinePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorHome"
          component={DoctorHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientHome"
          component={PatientHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewPrescription"
          component={ViewPrescription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectClinic"
          component={SelectClinic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDoctor"
          component={SelectDoctor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDate"
          component={SelectDate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}