import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './src/Component/Header';
import TodoList from './src/Component/TodoList';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headercontainer}>
          <Header title='TODOAPP'/>
        </View>

        <View style={styles.todocontainer}>
          <TodoList />
        </View>

      </View>
    )
  }
}
export default App;

const styles = StyleSheet.create({
  headercontainer: {
    flex: 0,
    justifyContent: 'center'
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