import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';

import AddTodo from "./components/AddToDo";


const ToDoApp = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newText) => {
    setTodos((todos) => {
      return [
        ...todos,
        { text: newText }
      ];
    })
  }

  return (
    <SafeAreaView style={{ backgroundColor: "gray", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.header}> TO DO</Text>
          <Text style={styles.header}> {todos.length}</Text>
        </View>
        <View>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
            <Text style={styles.todoBar}>{item.text}</Text>
            )}
          />
    
        </View>
      </View>
     
    
        <AddTodo addNewTodo={addNewTodo} />
      

    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "orange",
    fontWeight: "bold",
    margin: 5,
  },
  todoBar:{
    backgroundColor:"white",
    fontSize:18,
    fontWeight:"bold",
    marginHorizontal: 10,
    marginVertical: 5,
    padding:5,
    borderBottomColor:10,
    borderRadius:10,
  },  
})


export default ToDoApp;
