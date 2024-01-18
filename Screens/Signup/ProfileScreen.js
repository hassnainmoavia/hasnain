import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUserJSON = await AsyncStorage.getItem('currentUser');
        const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : {};
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {user && (
        <View style={styles.profileInfo}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.infoItem}>{user.fname}</Text>

          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.infoItem}>{user.lname}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoItem}>{user.email}</Text>

          <Text style={styles.label}>Username:</Text>
          <Text style={styles.infoItem}>{user.username}</Text>
        </View>
      )}
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
  profileInfo: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProfileScreen;
