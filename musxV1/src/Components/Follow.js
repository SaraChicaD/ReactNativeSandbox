import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Follow extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>FOLLOW</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  }
});
