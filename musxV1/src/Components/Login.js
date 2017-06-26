import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Login extends React.Component {

  onPressLearnMore(){
    console.log('pressed');
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../Styles/Images/musx.png')}
             style={styles.image} />
        <Text>Welcome to musx!</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />      
        </View>
    );
  }
}
//go from here to INBOX


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: 10
  }
});
