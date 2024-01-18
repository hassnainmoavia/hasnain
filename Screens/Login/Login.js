// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomButton'
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    checkUser();

  }, [])

  const checkUser = async () => {
    const currentUserJSON = await AsyncStorage.getItem('currentUser');
    const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : {};
    const userId = currentUser.id;
    console.log(userId)
    if (currentUser.id != null) {

      navigation.navigate('Home')
    }
  }
  const handleLogin = async () => {
    try {

      const existingUsersJSON = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];


      const matchedUser = existingUsers.find(user => user.username === username && user.password === password);
      console.log(matchedUser)
      if (username != "" && password != "" && matchedUser) {

        await AsyncStorage.setItem('currentUser', JSON.stringify(matchedUser));

        setErrorMessage('');

        navigation.navigate('Home');
      } else {

        setErrorMessage('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>


      <Text style={styles.title}>LOG IN</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <CustomButton title="Log In" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Sign up here.</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  link: {
    color: '#000',
    marginTop: 100,
  },
});
export default LoginScreen;
