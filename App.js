import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import StackNavigator from './Routes/LoginStack'

export default function App() {
  return (
   
     <NavigationContainer>
        <StackNavigator />
        </NavigationContainer>
   
  );
}

AppRegistry.registerComponent(appName, () => App);