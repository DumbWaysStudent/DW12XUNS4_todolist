import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';

// const DATA = [
//     'work',
//     'swim',
//     'study',
//     'sleep',
//     'run'
// ]

Item = ({ title }) => {
    return (
        <View style={styles.itemcontainer}>
            <Text style={styles.title}> {title.item} </Text>
        </View>
    )
}

class TodoList extends Component {
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




    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.todo}
                    renderItem={(item) => <Item title={item} />}
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
        backgroundColor: '#487EE9',
        padding: 8,
        marginVertical: 2,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#ffffff'
    }
})