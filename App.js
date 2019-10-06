import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './src/Component/Header';
import TodoList from './src/Component/TodoList';
import AddTodo from './src/Component/AddTodo';

class App extends Component {
  constructor(){
    super()
    this.state = {
        todo: [
            {title:'work', isDone: false},
            {title:'swim', isDone: false},
            {title:'study', isDone: false},
            {title:'sleep', isDone: false},
            {title:'run', isDone: false}
        ]
    }
}

addTodo (item) {
    //console.log(this.state)
    const newTodo = this.state.todo
    newTodo.push({title: item,  isDone: false})

    this.setState({ todo: newTodo })

    console.log(this.state.todo)
  }

  deleteTodo (index) {
    const newTodo = this.state.todo
    newTodo.splice(index, 1)

    this.setState({ todo: newTodo })
  }

  isDone (index) {
    const newTodo = this.state.todo
    newTodo[index].isDone = !newTodo[index].isDone
    this.setState({ todo: newTodo })
  }


render() {
  return (
    <View style={styles.container}>

      <View style={styles.headercontainer}>
        <Header title='TODOAPP'/>
      </View>

      <View style={styles.textinputcontainer}>
        <AddTodo addTodo={(value) => this.addTodo(value)} />
      </View>

      <View style={styles.todocontainer}>
        <TodoList
          todo={this.state.todo}
          deleteTodo={(value) => this.deleteTodo(value)}
          isDone={(value) => this.isDone(value)}
        />
          
      </View>

    </View>
  )}
}

export default App;

const styles = StyleSheet.create({
  headercontainer: {
    flex: 0,
    justifyContent: 'center'
  },
  textinputcontainer:{
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  todocontainer: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
})