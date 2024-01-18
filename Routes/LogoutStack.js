import { createStackNavigator } from '@react-navigation/stack';

import LoginStack from './LoginStack'
import Logout from '../Screens/Logout'


function LogoutStack()  {
  const Stack = createStackNavigator();
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="LoginStack" component={LoginStack} />
        

      </Stack.Navigator>
    
  );
}

export default LogoutStack;
