import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class UpdateTodo extends Component {

    render () {
        return(
            <TouchableOpacity onPress={ () =>this.props.updateTodo() } style={styles.button}>
                <Text>{this.props.isEditMode ? 'SAVE' : 'EDIT'}</Text>
            </TouchableOpacity >
        )
    }
}

export default UpdateTodo;

const styles = StyleSheet.create({
    button: {
        flex: 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#487EE9',
        marginVertical: 5
    }
})