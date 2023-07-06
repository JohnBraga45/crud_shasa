import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import TodoListScreen from './src/screens/TodoListScreen';
import Spinner from 'react-native-loading-spinner-overlay';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner
            visible={isLoading}
            textContent={'Shasa Development'}
            textStyle={{ color: 'green' }}
          />
          
        </View>
      ) : (
        <TodoListScreen />
      )}
    </View>
  );
};
export default App