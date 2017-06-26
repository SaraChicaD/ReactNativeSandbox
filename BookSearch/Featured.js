import React, 
      { Component, View, AppRegistry, StyleSheet, Text } 
from 'react-native';
import BookList from './BookList';
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default class Featured extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  Featured Tab
	        </Text>
	    </View>
        );
    }
}
 
