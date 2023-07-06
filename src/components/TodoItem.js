import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ item, onDelete, onUpdate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={onUpdate}>
          <Text style={styles.buttonText}>✏ Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
          <Text style={styles.buttonText}>🚮 Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor:"#dbe1e1",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 8,
    backgroundColor: 'green',
    padding:3,
    
  },
  deleteButton: {
    marginLeft: 8,
    backgroundColor: 'red',
    padding:3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TodoItem;
