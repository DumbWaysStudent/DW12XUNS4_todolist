import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class textInput extends Component {
    render(){
        return(
            <View>
                <TextInput placeholder='Input your todo list here'></TextInput>
            </View>
        )
    }
}

export default textInput;