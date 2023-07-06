import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoForm = ({ onAdd, onUpdate, initialTitle, editingId }) => {
  const [todo, setTodo] = useState(initialTitle || '');

  const handleButtonPress = () => {
    if (editingId) {
      onUpdate(editingId, todo);
    } else {
      onAdd(todo);
    }
    setTodo('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title={editingId ? 'Salvar' : 'Adicionar'} onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    backgroundColor:"#dbe1e1"
    
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
});

export default TodoForm;
