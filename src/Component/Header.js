import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

class Header extends Component {
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}
export default Header;

const styles = StyleSheet.create({
    header: {
       backgroundColor: '#487EE9',
       height: 60,
       alignItems: 'center',
       justifyContent: 'center' 
    },
    title: {
        color: '#f3f3f3',
        fontSize: 32,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
})