import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, CheckBox, TextInput } from 'react-native';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';


Item = (props) => {
    return (
        <View style={styles.itemcontainer}>
            <View style={{flexDirection:'row'}}>
                <CheckBox
                onChange={props.isDone}
                value={props.check}/>

                { props.activeItemId ===  props.index ?
                    <TextInput
                        onChangeText={(value) => props.onChangeTodo(value)}
                        placeholder='Edit mode'
                        value={props.title}
                    />
                    :
                    <Text style={styles.title}> {props.title} </Text>
                }
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                <DeleteTodo deleteTodo={() => props.deleteTodo()} />
                <UpdateTodo isEditMode={props.activeItemId ===  props.index} updateTodo={() => props.updateTodo()} />
            </View>
        </View>
    )
}

class TodoList extends Component {

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.todo}
                    renderItem={({item, index}) =>
                        <Item
                            title={item.title}
                            check={item.isDone}
                            index={index}
                            onChangeTodo={(newTitle) => this.props.onChangeTodo(newTitle)}
                            deleteTodo={() => this.props.deleteTodo(index)}
                            isDone= {() => this.props.isDone(index)}
                            updateTodo= {() => this.props.updateTodo(index)} 
                            activeItemId={this.props.activeItemId} />
                    }
                    keyExtractor={(item, index) => index}

                />
            </View>
        )
    }
}

export default TodoList;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 0,
    },
    itemcontainer: {
        alignItems: 'center',
        backgroundColor: '#487EE9',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 25,
        color: '#ffffff'
    },
    button: {
        justifyContent: 'center',
    }
})