 import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var {
    StyleSheet,
    View,
    Text,
    Component
   } = React;
 
const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default class Search extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  Search Tab
	        </Text>
	    </View>
        );
    }
}