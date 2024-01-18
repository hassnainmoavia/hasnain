// Logout.js
import React from 'react';
import { View,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Remove the current user item from local storage
      await AsyncStorage.removeItem('currentUser');
      console.log("logged out")
      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Call handleLogout when the component mounts
  React.useEffect(() => {
    handleLogout();
  }, []); // The empty dependency array ensures it runs only once when the component mounts

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Logout;
