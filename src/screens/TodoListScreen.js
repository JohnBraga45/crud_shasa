import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from '../components/TodoItem';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  // Carregar tarefas do AsyncStorage ao iniciar
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);
// Salvar tarefas no AsyncStorage sempre que houver alterações
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.log('Error saving todos:', error);
      }
    };

    saveTodos();
  }, [todos]);

  const addTodo = () => {
    // Adicionar uma nova tarefa à lista
    if (newTodoTitle.trim() !== '') {
      const newTodo = { id: Date.now().toString(), title: newTodoTitle };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    } else {
      Alert.alert('Erro', 'Por favor, digite uma tarefa válida.');
    }
  };

  const deleteTodo = (id) => {
    // Exluir uma nova tarefa à lista
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const openEditModal = (item) => {
    // Abrir o modal de edição de uma tarefa
    setEditingTodo(item);
    setNewTodoTitle(item.title);
  };

  const updateTodo = () => {
    // Atualizar uma tarefa existente
    if (newTodoTitle.trim() !== '') {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editingTodo.id) {
          return { ...todo, title: newTodoTitle };
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditingTodo(null);
      setNewTodoTitle('');
    } else {
      Alert.alert('Erro', 'Por favor, digite uma tarefa válida.');
    }
  };

  const closeModal = () => {
    // Fechar o modal de edição
    setEditingTodo(null);
    setNewTodoTitle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shasa Development - To Do-LIST</Text>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              onDelete={deleteTodo}
              onUpdate={() => openEditModal(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhuma tarefa encontrada</Text>
            </View>
          )}
          contentContainerStyle={styles.todoListContainer}
          keyboardShouldPersistTaps="handled"
        />

        {/* Formulário para adicionar ou atualizar uma tarefa */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite umatarefa"
            value={newTodoTitle}
            onChangeText={(text) => setNewTodoTitle(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={editingTodo ? updateTodo : addTodo}>
            <Text style={styles.addButtonText}>{editingTodo ? 'Atualizar' : 'Adicionar'}</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para cancelar a edição */}
        {editingTodo && (
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#497d73',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    paddingBottom:20,
     
    top:50,
    textAlign:"center",
    alignContent:"center",
    alignSelf:"center",
    
  },
  todoListContainer: {
    flexGrow: 1,
    paddingBottom: 16,
    marginTop: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#dbe1e1',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 8,
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cancelButtonText: {
    color: '#888',
    fontSize: 16,
  },
});

export default TodoListScreen;
