import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import CustomButton from '../CustomButton';

const SignUpScreen = ({ navigation }) => {
 const [fname, setFName] = useState('');
 const [lname, setLName] = useState('');
 const [email, setEmail] = useState('');
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleSignUp = async () => {
    try {
      if (!fname || !lname || !email || !username || !password) {
        setErrorMessage('All fields are required.');
        Alert.alert('Signup Failed', 'All fields are required.');
        return;
      }

      const existingUsersJSON = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

      const usernameExists = existingUsers.some(user => user.username === username);

      if (usernameExists) {
        setErrorMessage('Username already exists. Please choose another.');
        Alert.alert('Signup Failed', 'Username already exists. Please choose another.');
      } else {
        const newUser = { id: uuidv4(), fname, lname, email, username, password };
        existingUsers.push(newUser);

        await AsyncStorage.setItem('users', JSON.stringify(existingUsers));
        console.log(newUser)
        setErrorMessage('');
        Alert.alert('Account created successfully', '', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
              setFName('');
              setLName('');
              setEmail('');
              setUsername('');
              setPassword('');
            },
          },
        ]);
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Signup Failed', "baka", [
        {
          text: 'OK',
          
        },
      ]);
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={fname}
        onChangeText={text => setFName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lname}
        onChangeText={text => setLName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <CustomButton title="Sign Up" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Log in here.</Text>
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
    marginBottom: 16,
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
    color: 'blue',
    marginTop: 16,
  },
});

export default SignUpScreen;
