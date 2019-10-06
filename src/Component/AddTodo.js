import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

class AddTodo extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }

    onPress(){
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue: ''})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputcontainer}>
                    <TextInput
                        onChangeText={(text) => this.setState({inputValue: text})}
                        placeholder='Input your todo list here'
                        value={this.state.inputValue}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity 
                    disabled={this.state.inputValue === '' ? true : false} 
                    onPress={() => this.onPress()} 
                    >
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5
    },
    inputcontainer: {
        flex: 0,
    },
    button: {
        flex: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#487EE9',
        marginVertical: 5
    }
})