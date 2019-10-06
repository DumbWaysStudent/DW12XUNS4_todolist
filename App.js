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
            'work',
            'swim',
            'study',
            'sleep',
            'run'
        ]
    }
}

addTodo (item) {
    console.log(this.state)
    const newTodo = this.state.todo
    newTodo.push(item)

    this.setState({ todo: newTodo })
  }

// componentDidMount(){
//   this.addTodo('apam')
// }

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
          todo={this.state.todo} />
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