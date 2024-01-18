import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login/Login'
import Signup from '../Screens/Signup/Signup'
import Drawer from './Drawer'



function StackNavigator()  {
  const Stack = createStackNavigator();
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" 
        component={Drawer} 
        />

      </Stack.Navigator>
    
  );
};

export default StackNavigator;
