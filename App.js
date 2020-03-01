/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BiometricAuthentication} from './security/BiometricAuthentication';
import {Home} from './Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen
            name="fingerprint"
            component={BiometricAuthentication}
          />
        </Stack.Navigator>
        <StatusBar barStyle="dark-content" />
      </>
    </NavigationContainer>
  );
};

export default App;
