import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, Modal, TextInput, StyleSheet } from 'react-native';

const CourseDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState('1');

  const closeModal = () => {
    navigation.goBack(); // Navigate back to the previous screen to close the modal
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      presentationStyle="overFullScreen"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.name}>{item.courseName}</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </ScrollView>
          <Button title="Cancel" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default CourseDetail;
