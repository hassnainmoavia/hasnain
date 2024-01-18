import { createStackNavigator } from '@react-navigation/stack';

import FoodList from '../Screens/Home/CoursesList'
import ItemDetail from '../Screens/Home/CourseDetail'



function HomeStack()  {
  const Stack = createStackNavigator();
  return (
    
      <Stack.Navigator>
        
        <Stack.Screen name="Home" 
        component={FoodList} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Course Detail" 
        component={ItemDetail} 
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
};

export default HomeStack;
