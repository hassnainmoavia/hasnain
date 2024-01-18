import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack'
import Logout from '../Screens/Logout'
import ProfileScreen from '../Screens/Signup/ProfileScreen'
export default function DrawerNavigator(){
const Drawer = createDrawerNavigator();

return(

      <Drawer.Navigator >

      <Drawer.Screen name="Home" component={HomeStack}/>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
        
        <Drawer.Screen name="Logout" component={Logout}/>



       
      </Drawer.Navigator>
      
    
)
}

