import React, { useState } from 'react';
import {  Text, TouchableOpacity,  StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CourseCard = ({ item }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const viewDetail = () => {
    navigation.navigate('Course Detail', { item });
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[styles.container, isPressed && styles.containerPressed]}
      onPress={viewDetail}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={styles.name}>{item.courseName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFFFFF', // Default background color
  },
  containerPressed: {
    backgroundColor: 'yellow', // Background color when pressed
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CourseCard;
